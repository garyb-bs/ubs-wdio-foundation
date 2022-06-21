import { config } from '../../wdio.shared.conf';

// ============
// Specs
// ============
config.specs = [
    //'./tests/specs/android/*.ts',
     './tests/specs/utils/doSearch.ts'
];
config.exclude = [
    // Exclude this one because the test can only be executed on emulators/simulators
    './tests/specs/android/test2.js',
    './tests/specs/android/test6.js'
];

// =============================
// Browserstack specific config
// =============================
// User configuration
config.user = process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME';
config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY';
// Use browserstack service
config.services = ['browserstack'];

// ============
// Capabilities
// ============

config.capabilities = [
    {
        "appium:app": process.env.BROWSERSTACK_ANDROID_APP_ID || 'UBS_Neo_App',
        "appium:deviceName": "Samsung Galaxy S22 Ultra",
        "platformName": "android",

        // Set your BrowserStack config
        "bstack:options": { 
            debug: true,

            // Set other BrowserStack capabilities
            projectName: 'ubs-app-foundation-test-2',
            buildName: 'android-2',
            sessionName: 'fx-app-tests-test-2',
            appiumVersion : "1.22.0",
            realMobile: true
        }
    }
];

exports.config = config;