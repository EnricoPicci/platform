/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.js',
      'es6-shim/es6-shim.js',
      'reflect-metadata/*.js',
      'rxjs/**/*.js',
      '@angular/**/*.js',
      '@angular2-material/**/*.js',
      'ng2-bootstrap/**/*.js',
      'moment/**/*.js',
      'primeui/**/*.*',
      'primeng/**/*.js',
      //'dragula/**/*.*',
      //'ng2-dragula/**/*.js,'
      'chart.js/dist/Chart.js',
      'chartjs-color/dist/color.js',
      'chartjs-color-string/*.js',
      'ng2-charts/components/charts/charts.js',
      //'ng2-charts/bundles/ng2-charts.js',
      'ng2-charts/ng2-charts.js',
    ]
  });
};
