const path = require('path');

exports.config = {

  directConnect: true,

  specs: [
    './../features/*.feature'
  ],
  // capabilities:{
  //   browserName: 'chrome'
  // },

  multiCapabilities: [{
    browserName: 'chrome',
    shardTestFiles: false,
    maxInstances: 2,
    chromeOptions: {
        args: ['disable-infobars']
    }
}
// ,
//  {
//    browserName: 'chrome',
//    shardTestFiles: true,
//    maxInstances: 2,
//    chromeOptions: {
//        mobileEmulation: {
//          deviceName: 'Nexus 5'
//        },
//        args: ['disable-infobars']
//    }
//  }
],

  maxSessions: 5,

  onPrepare: function () {
    browser.ignoreSynchronization = true

  },

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    require: '../step_definitions/*.steps.js',
    tags: '@search',
    format: 'json:.tmp/results.json',
    strict:true
  },
  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options:{
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
        pageFooter:"<div></div>",
        pageTitle:"opel test results",
        reportPath:"cucumber/"
    }
}]
}
