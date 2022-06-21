exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  updateJob: false,
  specs: [
    './tests/specs/utils/doSearch.ts'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    project: "First Webdriverio Android Project",
    build: 'Webdriverio Android Parallel',
    name: 'parallel_test',
    app: process.env.BROWSERSTACK_APP_ID || 'UBS_Neo_App',
    'browserstack.debug': true
  },

  capabilities: [{
    device: 'Samsung Galaxy S22 Ultra',
    os_version: "12.0"
  }, {
    device: 'Samsung Galaxy S21',
    os_version: "12.0"
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});