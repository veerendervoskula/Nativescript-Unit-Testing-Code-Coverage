module.exports = function (config) {
  config.set({
    browserNoActivityTimeout: 40000,
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/tests/test-config.js',
      'app/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      "**/*.module.js",
      "**/*.routing.js",
      "**/index.js",
      "app/main.aot.js"
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "app/**/!(*spec).js": ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],

    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: 'neo-native',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'cobertura', subdir: '.' },
        { type: 'html', subdir: '.' },
      ],
      //skipFilesWithNoCoverage: true,
      //combineBrowserReports: true,
      instrumenterOptions: { istanbul: { noCompact: true } },
      includeAllSources: true
    },
    // coverageIstanbulReporter: {
    //   reports: ['html', 'lcovonly', 'text-summary'],
    //   fixWebpackSourcePaths: true,
    //  // skipFilesWithNoCoverage: true,
    //   combineBrowserReports: true,
    //    includeAllSources: true
    // },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [],

    customLaunchers: {
      android: {
        base: 'NS',
        platform: 'android'
      },
      ios: {
        base: 'NS',
        platform: 'ios'
      },
      ios_simulator: {
        base: 'NS',
        platform: 'ios',
        arguments: ['--emulator']
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
