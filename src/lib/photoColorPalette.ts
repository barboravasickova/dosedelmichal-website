type Rgb = [number, number, number];

const FALLBACK: Rgb[] = [
	[24, 24, 24],
	[92, 92, 92],
	[227, 225, 218],
	[201, 75, 75],
	[74, 124, 89],
];

function rgbToHex([r, g, b]: Rgb): string {
	return `#${[r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}

function colorDistance(a: Rgb, b: Rgb): number {
	return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}

export function extractVibrantPalette(img: HTMLImageElement, count = 5): string[] {
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d', { willReadFrequently: true });
	if (!ctx || img.naturalWidth === 0) {
		return FALLBACK.slice(0, count).map(rgbToHex);
	}

	const sampleW = 96;
	const sampleH = Math.max(1, Math.round(sampleW * (img.naturalHeight / img.naturalWidth)));
	canvas.width = sampleW;
	canvas.height = sampleH;
	ctx.drawImage(img, 0, 0, sampleW, sampleH);

	const { data } = ctx.getImageData(0, 0, sampleW, sampleH);
	const bucket = new Map<string, { rgb: Rgb; score: number }>();

	for (let i = 0; i < data.length; i += 4) {
		const r = data[i];
		const g = data[i + 1];
		const b = data[i + 2];
		const a = data[i + 3];
		if (a < 200) continue;

		const rn = r / 255;
		const gn = g / 255;
		const bn = b / 255;
		const max = Math.max(rn, gn, bn);
		const min = Math.min(rn, gn, bn);
		const l = (max + min) / 2;
		if (l < 0.05 || l > 0.98) continue;

		const d = max - min;
		const sat = d === 0 ? 0 : l > 0.5 ? d / (2 - max - min) : d / (max + min);
		if (sat < 0.1) continue;

		const score = sat * 2 + (1 - Math.abs(l - 0.4));
		const step = 10;
		const qr = Math.min(255, Math.round(r / step) * step);
		const qg = Math.min(255, Math.round(g / step) * step);
		const qb = Math.min(255, Math.round(b / step) * step);
		const key = `${qr},${qg},${qb}`;
		const prev = bucket.get(key);
		if (prev) {
			prev.score += score;
		} else {
			bucket.set(key, { rgb: [qr, qg, qb], score });
		}
	}

	const candidates = [...bucket.values()].sort((a, b) => b.score - a.score);
	const picked: Rgb[] = [];

	for (const c of candidates) {
		if (picked.every((p) => colorDistance(p, c.rgb) > 32)) {
			picked.push(c.rgb);
			if (picked.length >= count) break;
		}
	}

	for (const c of candidates) {
		if (picked.length >= count) break;
		if (picked.some((p) => colorDistance(p, c.rgb) <= 32)) continue;
		picked.push(c.rgb);
	}

	while (picked.length < count) {
		picked.push(FALLBACK[picked.length] ?? FALLBACK[FALLBACK.length - 1]);
	}

	return picked.slice(0, count).map(rgbToHex);
}

function whenImageReady(img: HTMLImageElement): Promise<void> {
	if (img.complete && img.naturalWidth > 0) {
		return Promise.resolve();
	}
	return new Promise((resolve, reject) => {
		img.addEventListener('load', () => resolve(), { once: true });
		img.addEventListener('error', () => reject(new Error('Image failed to load')), {
			once: true,
		});
	});
}

function getTrackedImages(): HTMLImageElement[] {
	return [...document.querySelectorAll<HTMLImageElement>('img[data-photo-palette-source]')];
}

function pickDominantImage(): HTMLImageElement | null {
	const images = getTrackedImages();
	if (images.length === 0) {
		return (
			document.querySelector<HTMLImageElement>('main img[src]') ??
			document.querySelector<HTMLImageElement>('.hero__bg img')
		);
	}

	const viewportCenter = window.innerHeight / 2;
	let best: { img: HTMLImageElement; score: number } | null = null;

	for (const img of images) {
		const rect = img.getBoundingClientRect();
		if (rect.width === 0 || rect.height === 0) continue;

		const visibleTop = Math.max(0, rect.top);
		const visibleBottom = Math.min(window.innerHeight, rect.bottom);
		const visibleHeight = Math.max(0, visibleBottom - visibleTop);
		if (visibleHeight <= 0) continue;

		const visibleRatio = visibleHeight / rect.height;
		const imgCenter = (rect.top + rect.bottom) / 2;
		const centerWeight = 1 - Math.min(1, Math.abs(imgCenter - viewportCenter) / window.innerHeight);
		const areaWeight = Math.min(1, (rect.width * visibleHeight) / (window.innerWidth * window.innerHeight));
		const score = visibleRatio * 1.4 + centerWeight * 0.9 + areaWeight * 0.5;

		if (!best || score > best.score) {
			best = { img, score };
		}
	}

	return best?.img ?? images[0];
}

export function initPhotoPalette(root: HTMLElement | null): void {
	if (!root) return;

	const swatches = root.querySelectorAll<HTMLElement>('.photo-palette__swatch');
	if (swatches.length === 0) return;

	const setColors = (hexes: string[]) => {
		hexes.forEach((hex, i) => {
			const el = swatches[i];
			if (el) el.style.backgroundColor = hex;
		});
	};

	let activeKey = '';
	let updateQueued = false;

	const applyFromImage = async (img: HTMLImageElement | null) => {
		if (!img) {
			activeKey = '';
			setColors(FALLBACK.map(rgbToHex));
			return;
		}

		const key = img.currentSrc || img.src;
		if (key === activeKey) return;

		try {
			await whenImageReady(img);
			const nextKey = img.currentSrc || img.src;
			if (nextKey === activeKey) return;
			activeKey = nextKey;
			setColors(extractVibrantPalette(img));
		} catch {
			activeKey = '';
			setColors(FALLBACK.map(rgbToHex));
		}
	};

	const updateFromViewport = () => {
		updateQueued = false;
		void applyFromImage(pickDominantImage());
	};

	const queueUpdate = () => {
		if (updateQueued) return;
		updateQueued = true;
		requestAnimationFrame(updateFromViewport);
	};

	const observer = new IntersectionObserver(() => queueUpdate(), {
		threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
	});

	const observeAll = () => {
		for (const img of getTrackedImages()) {
			observer.observe(img);
		}
	};

	observeAll();
	queueUpdate();

	window.addEventListener('scroll', queueUpdate, { passive: true });
	window.addEventListener('resize', queueUpdate, { passive: true });

	document.addEventListener(
		'load',
		(event) => {
			const target = event.target;
			if (target instanceof HTMLImageElement && target.matches('[data-photo-palette-source]')) {
				observer.observe(target);
				queueUpdate();
			}
		},
		true,
	);
}

/** @deprecated use initPhotoPalette */
export async function applyPhotoPalette(root: HTMLElement | null): Promise<void> {
	initPhotoPalette(root);
}
