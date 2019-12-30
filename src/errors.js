const cc = require('./consoleConfig')

module.exports = { 
    GetInstanceOfError (id) {
        return new Error(`${cc.fgYellow}getInstanceOf(${cc.fgCyan}"${id}"${cc.fgYellow});${cc.reset}\n` +
        `${cc.fgRed}${id} are not found! Please make sure you set this parameter first.${cc.reset}`);
    }
}
