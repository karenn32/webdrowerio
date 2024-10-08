import { config as baseConfig } from './wdio.conf.js';

const config = {
    ...baseConfig,
    specs: [
        './test/specs/*.js'
    ],
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--disable-default-apps',
                '--no-default-browser-check',
                '--disable-popup-blocking',
                '--disable-infobars',
                '--disable-search-engine-choice-screen',
                '--headless',
                '--window-size=1440,735'
            ]
        }
    }]
};

export { config };
