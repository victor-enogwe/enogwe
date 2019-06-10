
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
const path = require('path')

const files = ['./lib', './assets', '*.php', './style.css'];

const defaults = {
    files,
    watchEvents: ["change", "add"],
    "watch": false,
    "single": false,
    "watchOptions": {
        "ignoreInitial": true
    },
    "server": false,
    "port": 3000,
    "middleware": false,
    "serveStatic": [],
    "ghostMode": {
        "clicks": true,
        "scroll": true,
        "location": true,
        "forms": {
            "submit": true,
            "inputs": true,
            "toggles": true
        }
    },
    "logLevel": "info",
    "logPrefix": "Browsersync",
    "logConnections": false,
    "logFileChanges": true,
    "logSnippet": true,
    "rewriteRules": [],
    "open": false,
    "browser": "default",
    "cors": false,
    "xip": false,
    "hostnameSuffix": false,
    "reloadOnRestart": false,
    "notify": true,
    "scrollProportionally": true,
    "scrollThrottle": 0,
    "scrollRestoreTechnique": "window.name",
    "scrollElements": [],
    "scrollElementMapping": [],
    "reloadDelay": 0,
    "reloadDebounce": 500,
    "reloadThrottle": 0,
    "plugins": [],
    "injectChanges": true,
    "startPath": null,
    "minify": true,
    "host": null,
    "localOnly": false,
    "codeSync": true,
    "timestamps": true,
    "clientEvents": [
        "scroll",
        "scroll:element",
        "input:text",
        "input:toggles",
        "form:submit",
        "form:reset",
        "click"
    ],
    "socket": {
        "socketIoOptions": {
            "log": false
        },
        "socketIoClientConfig": {
            "reconnectionAttempts": 50
        },
        "path": "/browser-sync/socket.io",
        "clientPath": "/browser-sync",
        "namespace": "/browser-sync",
        "clients": {
            "heartbeatTimeout": 5000
        }
    },
    "tagNames": {
        "less": "link",
        "scss": "link",
        "css": "link",
        "jpg": "img",
        "jpeg": "img",
        "png": "img",
        "svg": "img",
        "gif": "img",
        "js": "script"
    },
    "injectNotification": false
};

const app = {
    ...defaults,
    ui: { port: 3001 },
    proxy: 'localhost:8080',
}

const coverageJs = {
    ...defaults,
    ui: { port: 7001 },
    port: 7000,
    files: ["coverage/js/lcov-report/index.html"],
    server: {
      baseDir: path.resolve(__dirname, 'coverage/js/lcov-report/'),
      index: 'index.html',
    }
}

const coveragePhp = {
    ...defaults,
    ui: { port: 8001 },
    port: 8000,
    files: ["coverage/php/index.html"],
    server: {
      baseDir: path.resolve(__dirname, 'coverage/php/'),
      index: 'index.html',
    }
}

module.exports = {
    app,
    coverageJs,
    coveragePhp
}
