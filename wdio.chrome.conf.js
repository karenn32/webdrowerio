import { config as baseConfig } from './wdio.conf.js'; 

const config = {
    ...baseConfig,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--disable-default-apps',
                '--no-default-browser-check',
                '--disable-popup-blocking',
                '--disable-infobars',
                '--disable-search-engine-choice-screen'
            ]
        }
    }]
};

export { config };
