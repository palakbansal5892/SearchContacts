//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'libs/angular.min.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
  
      'libs/angular-animate.min.js',
      'libs/angular-aria.min.js',
      'libs/angular-messages.min.js',
      'libs/angular-material.min.js',
      'app.js',
      'components/**/*.test.js',
      'components/**/*.js'
    ],

    
    // coverage reporter generates the coverage
    reporters: ['progress', 'coverage'],

    preprocessors: {
      'components/**/*.js': ['coverage']
    },

    coverageReporter: {
      type : 'html',
      dir : 'test/coverage/'
    },

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
