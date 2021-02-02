const appRoot = require('app-root-path');
const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');

// { emerg: 0, alert: 1, crit: 2, error: 3, warning: 4, notice: 5, info: 6, debug: 7 }

const {combine, timestamp, label, printf} = winston.format;
const myFormat = printf(({level, message, label, timestamp}) => {
  return '[' + timestamp + '] - ' + level.toUpperCase().padEnd(7, ' ') + ': ' + message;
});

var moment = require('moment');
function timeStampFormat() {
  return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ'); // '2018-01-01 12:12:12.500 +0900'
};

const options = {
  transports: [
    new (winstonDaily)({                          // 로그 파일 설정
      name: 'info-file',
      filename: './logs/app_%DATE%.log',          // 파일 이름 (아래 설정한 날짜 형식이 %DATE% 위치에 들어간다)
      datePattern: 'YYYY-MM-DD',                  // 날짜 형식 (대문자여야 적용된다.)
      colorize: false,
      maxsize: 50000000,                          // 로그 파일 하나의 용량 제한
      maxFiles: 1000,                             // 로그 파일 개수 제한
      level: 'info', // info이상 파일 출력         // 로그 레벨 지정
      showLevel: true,
      json: false,
      timestamp: timeStampFormat,                 // 저장될 시간 형식
      format: combine(
        timestamp(),
        myFormat
      )
    }),
    new (winston.transports.Console)({            // 콘솔 출력
      name: 'debug-console',
      colorize: true,
      level: 'debug', // debug이상 콘솔 출력
      showLevel: true,
      json: false,
      timestamp: timeStampFormat,
      format: combine(
        timestamp(),
        myFormat
      )
    })     
  ],
  exceptionHandlers: [                             // uncaughtException 발생시 처리
    new (winstonDaily)({
      name: 'exception-file',
      filename: './logs/exception_%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      colorize: false,
      maxsize: 50000000,
      maxFiles: 1000,
      level: 'error',
      showLevel: true,
      json: false,
      timestamp: timeStampFormat,
      format: combine(
        timestamp(),
        myFormat
      )
    }),
    new (winston.transports.Console)({
      name: 'exception-console',
      colorize: true,
      level: 'debug',
      showLevel: true,
      json: false,
      timestamp: timeStampFormat,
      format: combine(
        timestamp(),
        myFormat
      )
    })     
  ]
};
 
let logger = new winston.createLogger(options);

function logBuilder(traces) {
  try {
    let caller_line = traces.split('\n')[2];
    let caller_script = undefined;
    if(caller_line.includes('\\')) {
      caller_script = caller_line.split('\\').pop();
    } else if (caller_line.includes('/')) {
      caller_script = caller_line.split('/').pop();
    } else {
      throw new Error();
    }
    
    caller_script = '(' + caller_script;
    if(caller_script.slice(-1) != ')') {
      caller_script = caller_script + ')';
    }

    return caller_script;

  } catch {
    return '';
  }
}

logger.logs = function(level, message) {
  var eee = new Error;
  return logger.log(level, message.padEnd(90, ' ') + logBuilder(eee.stack));
};
 
module.exports = logger;
