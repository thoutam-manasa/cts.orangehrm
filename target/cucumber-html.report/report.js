$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("assignleave.feature");
formatter.feature({
  "line": 3,
  "name": "check the user details",
  "description": "",
  "id": "check-the-user-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@leave"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "check the user details with valid credentials and Invalid credentials",
  "description": "",
  "id": "check-the-user-details;check-the-user-details-with-valid-credentials-and-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter valid \"\u003cusernameNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should be able to login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "In dashboard assign leave is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter valid Employee Name",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "select leave type",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter from date",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter to date",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I select Partial days",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "clicking the Assign button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "leave is assigned to employee",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "check-the-user-details;check-the-user-details-with-valid-credentials-and-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "usernameNumber"
      ],
      "line": 19,
      "id": "check-the-user-details;check-the-user-details-with-valid-credentials-and-invalid-credentials;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 20,
      "id": "check-the-user-details;check-the-user-details-with-valid-credentials-and-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "check the user details with valid credentials and Invalid credentials",
  "description": "",
  "id": "check-the-user-details;check-the-user-details-with-valid-credentials-and-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@leave"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter valid \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should be able to login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "In dashboard assign leave is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter valid Employee Name",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "select leave type",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter from date",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter to date",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I select Partial days",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "clicking the Assign button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "leave is assigned to employee",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidUsernameAndPassword.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 45550108837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "ValidUsernameAndPassword.i_enter_valid_and_valid(String)"
});
formatter.result({
  "duration": 11064546067,
  "status": "passed"
});
formatter.match({
  "location": "ValidUsernameAndPassword.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 46420235126,
  "status": "passed"
});
formatter.match({
  "location": "ValidUsernameAndPassword.in_dashboard_assign_leave_is_clicked()"
});
formatter.result({
  "duration": 18988968809,
  "status": "passed"
});
formatter.match({
  "location": "ValidUsernameAndPassword.i_enter_valid_Employee_Name()"
});
formatter.result({
  "duration": 10194578427,
  "status": "passed"
});
formatter.match({
  "location": "ValidUsernameAndPassword.select_leave_type()"
});
formatter.result({
  "duration": 3678968599,
  "status": "passed"
});
formatter.match({
  "location": "ValidUsernameAndPassword.i_enter_from_date()"
});
formatter.result({
  "duration": 4900404320,
  "status": "passed"
});
formatter.match({
  "location": "ValidUsernameAndPassword.i_enter_to_date()"
});
formatter.result({
  "duration": 4444050105,
  "status": "passed"
});
formatter.match({
  "location": "ValidUsernameAndPassword.i_select_Partial_days()"
});
formatter.result({
  "duration": 3861331572,
  "status": "passed"
});
formatter.match({
  "location": "ValidUsernameAndPassword.clicking_the_Assign_button()"
});
formatter.result({
  "duration": 1737332049,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ValidUsernameAndPassword.application_should_be_closed()"
});
formatter.result({
  "status": "skipped"
});
});