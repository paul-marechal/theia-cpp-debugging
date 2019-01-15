const cp = require('child_process')

exports.exec = async function (command, options) {
    return new Promise((resolve, reject) => {
        const subprocess = cp.spawn(command, {
            stdio: "inherit",
            shell: true,
            ...options,
        })
        subprocess.once('exit', code => code === 0 ? resolve() : reject())
        subprocess.once('error', error => reject(error))
    })
}

exports.execAll = async function (commands, options) {
    for (const command of commands) {
        await exports.exec(command, options)
    }
}
