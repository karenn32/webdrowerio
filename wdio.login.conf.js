import { config as baseConfig } from './wdio.conf.js';

const config = {
    ...baseConfig,
    specs: ['./test/specs/TC1_Login_valid_user.js']
};

export { config };
