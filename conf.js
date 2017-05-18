"use strict";


var samsung51 = {
    browserName: 'chrome',
    platformName: 'Android',
    platformVersion: '5.1',
    deviceName: "TA34800HTU"
};

var samsungS7 = {
    browserName: 'chrome',
    platformName: 'Android',
    platformVersion: '6.0',
    deviceName: "0b150200e75b11a9"
};

var ios102Sim = {
  platformName: 'ios',
  platformVersion: '10.2',
  browserName: 'Safari',
  deviceName: 'iPhone 6s'
  // udid: '2703D25B-AE10-43DA-B680-B56F53996433',
  // automationName: "XCUITest"
};

var ios93Sim = {
    platformName: 'ios',
    platformVersion: '9.3',
    browserName: 'Safari',
    deviceName: 'iPhone 5s',
    automationName: "XCUITest"
};

var android51Sim = {
    browserName: 'browser',
    platformName: 'Android',
    platformVersion: '5.1',
    deviceName: "Nexus_4"
};

// to run in different devcies we need to change value for capabilities
exports.config = {
  seleniumAddress: 'http://localhost:4723/wd/hub',

  specs: ['example_spec.js'],

  capabilities: android51Sim,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000
    }
};




