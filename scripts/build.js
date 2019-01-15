const common = require('./common')

async function main() {
    await common.exec('yarn && yarn build', { cwd: 'cdt-gdb-adapter' })
    await common.exec('yarn && yarn build', { cwd: 'cdt-gdb-vscode' })
    await common.exec('yarn', { cwd: 'theia' })
    await common.exec('yarn', { cwd: 'theia-cpp-extension' })
}

main()
