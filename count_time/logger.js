
const log4js = require('log4js');
log4js.configure({
    appenders: {
        ruleConsole: {type: 'console'},
        ruleFile: {
            type: 'dateFile',
            filename: 'logs/access.log',
            pattern: 'yyyy-MM-dd.log',
            maxLogSize: 10 * 1000 * 1000,
            numBackups: 3,
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: {appenders: ['ruleConsole', 'ruleFile'], level: log4js.levels.ALL}
    }
});

exports.setLogLevel = function(level){
    log4js.setGlobalLogLevel(level || log4js.levels.ALL);
};

exports.getLogger = function(file){
    return log4js.getLogger(file || "dateFileLog");
};