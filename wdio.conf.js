export const config = {
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    reporters: ['allure'],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
};
