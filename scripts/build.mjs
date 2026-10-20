// Copies the static site into dist/ for deployment.
// index.html loads Three.js from ./node_modules via its import map, so the
// exact Three.js files it needs are copied into dist/node_modules as well.
import { cpSync, mkdirSync, rmSync } from "node:fs";

const out = "dist";
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

for (const file of ["index.html", "patrick-cutout.png"]) {
  cpSync(file, `${out}/${file}`);
}

const three = "node_modules/three";
cpSync(`${three}/build`, `${out}/${three}/build`, { recursive: true });
cpSync(
  `${three}/examples/jsm/environments`,
  `${out}/${three}/examples/jsm/environments`,
  { recursive: true }
);

console.log("Built static site into dist/");
