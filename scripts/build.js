const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const DIST_DIR = path.resolve(__dirname, '..', 'dist');

function cleanDist() {
    if (fs.existsSync(DIST_DIR)) {
        fs.rmSync(DIST_DIR, { recursive: true, force: true });
        console.log('[clean] Removed dist directory.');
    }
}

function build() {
    console.log('[build] Building TypeScript...');
    execSync('tsc --project tsconfig.json --declaration', { stdio: 'inherit' });

    console.log('[build] Packaging with SvelteKit...');
    execSync('pnpm svelte-package', { stdio: 'inherit' });

    console.log('[build] Build completed.');
}

cleanDist();
build();
