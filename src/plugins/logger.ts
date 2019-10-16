const isProduction = process.env.NODE_ENV === 'production';

export const options = {
    isEnabled: true,
    // logLevel : isProduction ? 'error' : 'debug',
    logLevel: process.env.VUE_APP_LOGGING_LEVEL,
    stringifyArguments : false,
    showLogLevel : true,
    showMethodName : true,
    separator: '|',
    showConsoleColors: true,
};


