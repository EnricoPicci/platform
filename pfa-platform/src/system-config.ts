/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material':         'vendor/@angular2-material',
  'ng2-bootstrap':              'vendor/ng2-bootstrap',
  'moment':                     'vendor/moment',
  'primeui':                    'vendor/primeui',
  'primeng':                    'vendor/primeng',
  //'dragula':                    'vendor/dragula/dist/dragula.js',
  //'ng2-dragula':                'vendor/ng2-dragula',
  //'ng2-charts':                 'vendor/ng2-charts/bundles', 
  'ng2-charts':                 'vendor/ng2-charts', 
};

/** User packages configuration. */
const packages: any = {
  '@angular2-material/core': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'core.js'
  },
  '@angular2-material/sidenav': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'sidenav.js'
  },
  '@angular2-material/toolbar': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'toolbar.js'
  },
  '@angular2-material/button': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'button.js'
  },
  '@angular2-material/input': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'input.js'
  },
  '@angular2-material/icon': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'icon.js'
  },
  'ng2-bootstrap': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'ng2-bootstrap.js'
  },
  'moment': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'moment.js'
  },
  'primeui': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'primeui.js'
  },
  'primeng': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'primeng.js'
  },
  //'dragula': { defaultExtension: 'js' },
  //'ng2-dragula': {defaultExtension: 'js' },
  'ng2-charts': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'ng2-charts.js'
  },
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/router-deprecated',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/util',
  'app/util-components',
  'app/pfa-model',
  'app/pfa-shared-components',
  //'app/pfa-party',
  'app/+pfa-profile',
  'app/+pfa-profile-choose-similar',
  'app/pfa-backend-rest-server',
  'app/+pfa-inv-planning',
  'app/+pfa-profile-report',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });

