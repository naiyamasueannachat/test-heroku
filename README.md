# TestHeroku

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## ติดตั้งขึ้น heroku  
## ทำการ สร้างโปรเจค
  ```json
  ng new ชื่อ
  ng g c ชื่อ
  ```

## ทำการสร้าง repository ใน github
```json
เข้า https://github.com
+ ด้านบนขวา new repository

กลับมาที่ vs code
git remote add origin https://github.com/naiyamasueannachat/test-heroku.git
git push -u origin master
```

## ทำการสร้าง app ใน heroku
```json
เข้า https://dashboard.heroku.com/apps
+ ด้านบนขวา new => create new app

เพิ่ม App name => creat app => add githup ใน repo ที่เราสร้างไว้ก่อนหน้า

```

## package.json
```json
ศึกษาเพื่มเติม

https://medium.com/m/signin
https://medium.com/@hellotunmbi/how-to-deploy-angular-application-to-heroku-1d56e09c5147

```
``` json

เพิ่ม
{
==>     "name": "test-heroku",
        "version": "0.0.0",
        "scripts": {
            "ng": "ng",
==>     "start": "node server.js",
        "build": "ng build",
        "test": "ng test",
        "lint": "ng lint",
        "e2e": "ng e2e",
==>     "postinstall": "ng build --aot --prod"
        },
        "private": true,
        "dependencies": {
            "@angular/animations": "~7.2.0",
==>         "@angular/cli": "~7.2.2",
            "@angular/common": "~7.2.0",
            "@angular/compiler": "~7.2.0",
==>         "@angular/compiler-cli": "~7.2.0",
            "@angular/core": "~7.2.0",
            "@angular/forms": "~7.2.0",
            "@angular/platform-browser": "~7.2.0",
            "@angular/platform-browser-dynamic": "~7.2.0",
            "@angular/router": "~7.2.0",
            "core-js": "^2.5.4",
==>         "express": "^4.16.4",
            "rxjs": "~6.3.3",
            "tslib": "^1.9.0",
            "zone.js": "~0.8.26"
        },
        "devDependencies": {
            "@angular-devkit/build-angular": "~0.12.0",
            "@angular/cli": "~7.2.2",
==>         "@angular/compiler-cli": "~7.2.0",
            "@angular/language-service": "~7.2.0",
            "@types/node": "~8.9.4",
            "@types/jasmine": "~2.8.8",
            "@types/jasminewd2": "~2.0.3",
            "codelyzer": "~4.5.0",
            "jasmine-core": "~2.99.1",
            "jasmine-spec-reporter": "~4.2.1",
            "karma": "~3.1.1",
            "karma-chrome-launcher": "~2.2.0",
            "karma-coverage-istanbul-reporter": "~2.0.1",
            "karma-jasmine": "~1.1.2",
            "karma-jasmine-html-reporter": "^0.2.2",
            "protractor": "~5.4.0",
            "ts-node": "~7.0.0",
            "tslint": "~5.11.0",
==>         "typescript": "~3.2.2"
        },
==>    "engines": {
==>        "node": "~8.12.0",  //check node -v
==>        "npm": "~6.4.1" //check npm -v
==>    }
        }

  ```

  ## สร้าง server.js
  ```json
  // const express = require('express');
// const app = express();
// app.use(express.static(__dirname + '/dist'));
// app.listem(process.env.PORT || 8080);


//Install express server
const express = require('express');
const path = require('path');
 
const app = express();
 
// Serve only the static files form the dist directory
// Replace the '/dist/my-profile'
app.use(express.static(__dirname + '/dist/test-heroku'));
 
app.get('*', function(req,res) {
  // Replace the '/dist/my-profile/index.html'
  res.sendFile(path.join(__dirname + '/dist/test-heroku/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
  ```

  ## ทำการ install
  ```json
  ลบ node_module
  
  npm i express --save
  npm i --save
  ```