const common = require('./common');

async function main() {
    console.log('theia-cpp-debugging')
    await common.exec('git status --short')
    await common.exec('git submodule foreach git status --short')
}

main()
