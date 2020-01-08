$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BackgroundThird.feature");
formatter.feature({
  "line": 2,
  "name": "Test Background Feature",
  "description": "Description: The purpose of this feature is to test the Background keyword",
  "id": "test-background-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.before({
  "duration": 185901,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User is Logged In",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is at login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters login name as \"mngr222872\" and password as \"apamyhy\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be allowed to login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginGlue.user_is_at_login_page()"
});
formatter.result({
  "duration": 25605610800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr222872",
      "offset": 27
    },
    {
      "val": "apamyhy",
      "offset": 56
    }
  ],
  "location": "LoginGlue.user_enters_login_name_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 30049036301,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027uid\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027NBLAP247\u0027, ip: \u0027192.168.43.72\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_232\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\seshuk\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:53667}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a26e984ff5a6ad8b105fcf1f996edbc5\n*** Element info: {Using\u003dname, value\u003duid}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:400)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.unimoni.cucumber.glues.LoginGlue.user_enters_login_name_as_and_password_as(LoginGlue.java:32)\r\n\tat ✽.When User enters login name as \"mngr222872\" and password as \"apamyhy\"(BackgroundThird.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginGlue.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginGlue.user_should_be_allowed_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "User is able to click on New Customer link",
  "description": "",
  "id": "test-background-feature;user-is-able-to-click-on-new-customer-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@NewCustomer"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User click on New customer link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User should see the new customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundGlue.user_is_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BackgroundGlue.user_click_on_New_customer_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BackgroundGlue.user_should_see_the_new_customer_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 46900,
  "status": "passed"
});
formatter.before({
  "duration": 86400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User is Logged In",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is at login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters login name as \"mngr222872\" and password as \"apamyhy\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be allowed to login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginGlue.user_is_at_login_page()"
});
formatter.result({
  "duration": 25838965700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr222872",
      "offset": 27
    },
    {
      "val": "apamyhy",
      "offset": 56
    }
  ],
  "location": "LoginGlue.user_enters_login_name_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 30047694701,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027uid\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027NBLAP247\u0027, ip: \u0027192.168.43.72\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_232\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\seshuk\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:53776}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: cd2e2ff0ad659df4873155f7b5e038f5\n*** Element info: {Using\u003dname, value\u003duid}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:400)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.unimoni.cucumber.glues.LoginGlue.user_enters_login_name_as_and_password_as(LoginGlue.java:32)\r\n\tat ✽.When User enters login name as \"mngr222872\" and password as \"apamyhy\"(BackgroundThird.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginGlue.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginGlue.user_should_be_allowed_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "User is able to click on Deposit link",
  "description": "",
  "id": "test-background-feature;user-is-able-to-click-on-deposit-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Deposit"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user is in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User click on Deposit link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User should see the deposit page",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundGlue.user_is_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 53900,
  "status": "passed"
});
formatter.uri("DatasetsFourth.feature");
formatter.feature({
  "line": 2,
  "name": "Feature to explain data tables",
  "description": "I want to use this template for my feature with data tables",
  "id": "feature-to-explain-data-tables",
  "keyword": "Feature"
});
formatter.before({
  "duration": 41600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Positive login scenario with data table",
  "description": "",
  "id": "feature-to-explain-data-tables;positive-login-scenario-with-data-table",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is at login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters login name and password as",
  "rows": [
    {
      "cells": [
        "mngr222872",
        "apamyhy"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be allowed to login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user should be in home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginGlue.user_is_at_login_page()"
});
formatter.result({
  "duration": 25006487001,
  "status": "passed"
});
formatter.match({
  "location": "LoginGlue.user_enters_login_name_and_password_as(DataTable)"
});
formatter.result({
  "duration": 30060091901,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027uid\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027NBLAP247\u0027, ip: \u0027192.168.43.72\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_232\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\seshuk\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:53951}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b0d1bff173c84c72a076fcad35e3844b\n*** Element info: {Using\u003dname, value\u003duid}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:400)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.unimoni.cucumber.glues.LoginGlue.user_enters_login_name_and_password_as(LoginGlue.java:69)\r\n\tat ✽.When User enters login name and password as(DatasetsFourth.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginGlue.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginGlue.user_should_be_allowed_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginGlue.user_should_be_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 73500,
  "status": "passed"
});
formatter.uri("LoginFirst.feature");
formatter.feature({
  "line": 2,
  "name": "Login feautre",
  "description": "The online demo banking site - we want to cover login scenarios",
  "id": "login-feautre",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 80099,
  "status": "passed"
});
formatter.before({
  "duration": 64299,
  "status": "passed"
});
formatter.before({
  "duration": 124800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Positive login scenario",
  "description": "",
  "id": "login-feautre;positive-login-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is at login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters login name as \"mngr222872\" and password as \"apamyhy\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be allowed to login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user should be in home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginGlue.user_is_at_login_page()"
});
formatter.result({
  "duration": 24979270301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr222872",
      "offset": 27
    },
    {
      "val": "apamyhy",
      "offset": 56
    }
  ],
  "location": "LoginGlue.user_enters_login_name_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 15134155100,
  "error_message": "java.lang.NullPointerException\r\n\tat com.unimoni.cucumber.glues.LoginGlue.user_enters_login_name_as_and_password_as(LoginGlue.java:32)\r\n\tat ✽.When User enters login name as \"mngr222872\" and password as \"apamyhy\"(LoginFirst.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginGlue.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginGlue.user_should_be_allowed_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginGlue.user_should_be_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 91800,
  "status": "passed"
});
formatter.after({
  "duration": 48500,
  "status": "passed"
});
formatter.before({
  "duration": 86500,
  "status": "passed"
});
formatter.before({
  "duration": 87301,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Negative login scenario",
  "description": "",
  "id": "login-feautre;negative-login-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is at login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User enters login name as \"mngr\" and password as \"ap\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user should not be allowed to login",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user should not see home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginGlue.user_is_at_login_page()"
});
formatter.result({
  "duration": 24608221101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr",
      "offset": 27
    },
    {
      "val": "ap",
      "offset": 50
    }
  ],
  "location": "LoginGlue.user_enters_login_name_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 30058724801,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027uid\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027NBLAP247\u0027, ip: \u0027192.168.43.72\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_232\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\seshuk\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:54218}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 75953bdd2a10fd8673b79f91ce3ccc6f\n*** Element info: {Using\u003dname, value\u003duid}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:400)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.unimoni.cucumber.glues.LoginGlue.user_enters_login_name_as_and_password_as(LoginGlue.java:32)\r\n\tat ✽.When User enters login name as \"mngr\" and password as \"ap\"(LoginFirst.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginGlue.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginGlue.user_should_not_be_allowed_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginGlue.user_should_not_see_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 47000,
  "status": "passed"
});
formatter.after({
  "duration": 24500,
  "status": "passed"
});
formatter.uri("ObjectsFifth.feature");
formatter.feature({
  "line": 2,
  "name": "Feature to explain the objects as data tables",
  "description": "I want to use this template for my feature with objects",
  "id": "feature-to-explain-the-objects-as-data-tables",
  "keyword": "Feature"
});
formatter.before({
  "duration": 35299,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Negative login scenario",
  "description": "",
  "id": "feature-to-explain-the-objects-as-data-tables;negative-login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is at login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters already registered login details",
  "rows": [
    {
      "cells": [
        "id",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "abc@gmail.com",
        "1234a"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user should not be allowed to login",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user should not see home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginGlue.user_is_at_login_page()"
});
formatter.result({
  "duration": 24461489900,
  "status": "passed"
});
formatter.match({
  "location": "LoginGlue.user_enters_already_registered_login_details(SignIn\u003e)"
});
formatter.result({
  "duration": 4821521500,
  "error_message": "java.lang.NullPointerException\r\n\tat com.unimoni.cucumber.glues.LoginGlue.user_enters_already_registered_login_details(LoginGlue.java:76)\r\n\tat ✽.When User enters already registered login details(ObjectsFifth.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginGlue.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginGlue.user_should_not_be_allowed_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginGlue.user_should_not_see_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 90800,
  "status": "passed"
});
formatter.uri("OutlineSecond.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature with scenario outline examples",
  "description": "I want to use this template for my login feature with scenario outline",
  "id": "login-feature-with-scenario-outline-examples",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Negative Login scenarios with different data sets",
  "description": "",
  "id": "login-feature-with-scenario-outline-examples;negative-login-scenarios-with-different-data-sets",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is at login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters login name as \"\u003cname\u003e\" and password as \"\u003cpwd\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should not be allowed to login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user should not see home page",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-feature-with-scenario-outline-examples;negative-login-scenarios-with-different-data-sets;",
  "rows": [
    {
      "cells": [
        "name",
        "pwd"
      ],
      "line": 12,
      "id": "login-feature-with-scenario-outline-examples;negative-login-scenarios-with-different-data-sets;;1"
    },
    {
      "cells": [
        "name1",
        "pws1"
      ],
      "line": 13,
      "id": "login-feature-with-scenario-outline-examples;negative-login-scenarios-with-different-data-sets;;2"
    },
    {
      "cells": [
        "name2",
        "pws2"
      ],
      "line": 14,
      "id": "login-feature-with-scenario-outline-examples;negative-login-scenarios-with-different-data-sets;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 86301,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Negative Login scenarios with different data sets",
  "description": "",
  "id": "login-feature-with-scenario-outline-examples;negative-login-scenarios-with-different-data-sets;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is at login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters login name as \"name1\" and password as \"pws1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should not be allowed to login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user should not see home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginGlue.user_is_at_login_page()"
});
formatter.result({
  "duration": 24487912300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name1",
      "offset": 27
    },
    {
      "val": "pws1",
      "offset": 51
    }
  ],
  "location": "LoginGlue.user_enters_login_name_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 1972817400,
  "error_message": "java.lang.NullPointerException\r\n\tat com.unimoni.cucumber.glues.LoginGlue.user_enters_login_name_as_and_password_as(LoginGlue.java:32)\r\n\tat ✽.When User enters login name as \"name1\" and password as \"pws1\"(OutlineSecond.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginGlue.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginGlue.user_should_not_be_allowed_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginGlue.user_should_not_see_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 87900,
  "status": "passed"
});
formatter.before({
  "duration": 107300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Negative Login scenarios with different data sets",
  "description": "",
  "id": "login-feature-with-scenario-outline-examples;negative-login-scenarios-with-different-data-sets;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is at login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters login name as \"name2\" and password as \"pws2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should not be allowed to login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user should not see home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginGlue.user_is_at_login_page()"
});
formatter.result({
  "duration": 24555383699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name2",
      "offset": 27
    },
    {
      "val": "pws2",
      "offset": 51
    }
  ],
  "location": "LoginGlue.user_enters_login_name_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 3763551100,
  "error_message": "java.lang.NullPointerException\r\n\tat com.unimoni.cucumber.glues.LoginGlue.user_enters_login_name_as_and_password_as(LoginGlue.java:32)\r\n\tat ✽.When User enters login name as \"name2\" and password as \"pws2\"(OutlineSecond.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginGlue.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginGlue.user_should_not_be_allowed_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginGlue.user_should_not_see_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 138200,
  "status": "passed"
});
});