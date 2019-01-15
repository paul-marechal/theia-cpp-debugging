const common = require('./common');

const target = process.argv[2];
if (!target) {
    throw new Error('target not specified')
}

async function main() {
    await common.exec(`yarn start ${process.argv.slice(3).join(' ')}`,
        { cwd: `theia-cpp-extension/${target}-app` })
}

main()
