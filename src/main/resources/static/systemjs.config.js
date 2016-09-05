(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    'rxjs':                       'webjars/rxjs/5.0.0-beta.6',
    'angular2-in-memory-web-api': 'webjars/angular2-in-memory-web-api/0.0.15',
    '@angular/common':			  'webjars/angular__common/2.0.0-rc.5',
    '@angular/compiler':		   'webjars/angular__compiler/2.0.0-rc.5',
    '@angular/forms':			 'webjars/angular__forms/0.3.0',
    '@angular/core':			 'webjars/angular__core/2.0.0-rc.5',
    '@angular/http': 			'webjars/angular__http/2.0.0-rc.5',
    '@angular/platform-browser': 'webjars/angular__platform-browser/2.0.0-rc.5',
    '@angular/platform-browser-dynamic': 'webjars/angular__platform-browser-dynamic/2.0.0-rc.5',
    '@angular/router': 'webjars/angular__router/3.0.0-rc.1',
    '@angular/router-deprecated': 'webjars/router-deprecated/2.0.0-rc.2'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
  };
  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
  ];
  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });
  var config = {
    map: map,
    packages: packages
  }
  System.config(config);
})(this);
