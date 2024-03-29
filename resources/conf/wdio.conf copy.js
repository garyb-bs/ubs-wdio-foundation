

exports.config = {
  specs: [],

  logLevel: "warn",

  coloredLogs: true,

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 240000,

  connectionRetryCount: 3,

  framework: "mocha",
  reporters: [["allure", { outputDir: "allure-results" }]],

  mochaOpts: {
    ui: "bdd",
    timeout: 240000,
  },
  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (error) {
      await driver.takeScreenshot();
    }
  },
};
