import { config as baseConfig } from './wdio.conf.js';

const config = {
    ...baseConfig,
    capabilities: [{
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: []
        }
    }],
    exclude: [
        './test/specs/TC6_Footer_links.js'
    ]
};

export { config };
