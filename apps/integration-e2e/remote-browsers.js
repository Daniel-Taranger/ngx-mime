exports.customDesktopLaunchers = [
  {
    browserName: 'chrome',
    version: 'latest'
  },
  {
    browserName: 'firefox',
    version: '62.0'
  },
  {
    browserName: 'MicrosoftEdge',
    version: '17'
  }
  // {
  //   browserName: "internet explorer",
  //   platform: "Windows 10",
  //   version: "latest"
  // },
  // {
  //   browserName: "safari",
  //   platform: "macOS 10.12",
  //   version: "10.0"
  // }
];
exports.androidLaunchers = [
  {
    browserName: 'Chrome',
    deviceName: 'Android Emulator',
    platformVersion: '6.0',
    platformName: 'Android'
  }
];
exports.iphoneLaunchers = [
  {
    browserName: 'Safari',
    deviceName: 'iPhone Simulator',
    platformVersion: '10.3',
    platformName: 'iOS'
  }
];
