import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const icons = path.join(root, 'public', 'icons');
const light = fs.readFileSync(path.join(icons, 'favicon-32-light.png')).toString('base64');
const dark = fs.readFileSync(path.join(icons, 'favicon-32-dark.png')).toString('base64');

const singleSvg = (b64) =>
	`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><image width="32" height="32" href="data:image/png;base64,${b64}"/></svg>\n`;

fs.writeFileSync(path.join(root, 'public', 'favicon-light.svg'), singleSvg(light));
fs.writeFileSync(path.join(root, 'public', 'favicon-dark.svg'), singleSvg(dark));

/** Legacy default for /favicon.svg (system theme). */
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
<style>.a{display:block}.b{display:none}@media (prefers-color-scheme:light){.a{display:none}.b{display:block}}</style>
<image class="a" width="32" height="32" href="data:image/png;base64,${light}"/>
<image class="b" width="32" height="32" href="data:image/png;base64,${dark}"/>
</svg>
`;

fs.writeFileSync(path.join(root, 'public', 'favicon.svg'), svg);
