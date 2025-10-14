const { execSync } = require('node:child_process');

function run(command, desc) {
    try {
        console.log(`[release] ${desc}...`);
        execSync(command, { stdio: 'inherit' });
    } catch (err) {
        console.error(`[release] Failed: ${desc}`);
        process.exit(1);
    }
}

run('pnpm run lint', 'Linting');
run('pnpm run check', 'Type-checking');
run('pnpm run test', 'Testing');
run('pnpm run build', 'Building package');

run('pnpm changeset publish', 'Publishing via Changeset');

console.log('[release] Release complete!');
