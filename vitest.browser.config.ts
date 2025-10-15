import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
    plugins: [svelte()],
    test: {
        browser: {
            enabled: true,
            provider: 'playwright',
            // https://vitest.dev/guide/browser/playwright
            instances: [{ browser: 'chromium' }],
        },
    },
    resolve: {
        alias: {
            $lib: path.resolve('./src/lib'),
        },
    },
});
