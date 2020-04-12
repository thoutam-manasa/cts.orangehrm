$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("assignleave.feature");
formatter.feature({
  "line": 2,
  "name": "To assign leave to an employee",
  "description": "",
  "id": "to-assign-leave-to-an-employee",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@leave"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "check the user details with valid credentials and Invalid credentials",
  "description": "",
  "id": "to-assign-leave-to-an-employee;check-the-user-details-with-valid-credentials-and-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid \"\u003cusernameNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "In dashboard assign leave is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter valid Employee Name",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "select leave type",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click from calender",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter from date",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click to calender",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter to date",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select Partial days",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "clicking the Assign button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "leave is assigned to employee",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "to-assign-leave-to-an-employee;check-the-user-details-with-valid-credentials-and-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "usernameNumber"
      ],
      "line": 20,
      "id": "to-assign-leave-to-an-employee;check-the-user-details-with-valid-credentials-and-invalid-credentials;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 21,
      "id": "to-assign-leave-to-an-employee;check-the-user-details-with-valid-credentials-and-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "check the user details with valid credentials and Invalid credentials",
  "description": "",
  "id": "to-assign-leave-to-an-employee;check-the-user-details-with-valid-credentials-and-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@leave"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "In dashboard assign leave is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter valid Employee Name",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "select leave type",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click from calender",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter from date",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click to calender",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter to date",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select Partial days",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "clicking the Assign button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "leave is assigned to employee",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangehrmTest.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 9430740157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "OrangehrmTest.i_enter_valid_and_valid(String)"
});
formatter.result({
  "duration": 752749373,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTest.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 4878036045,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTest.in_dashboard_assign_leave_is_clicked()"
});
formatter.result({
  "duration": 2633708720,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTest.i_enter_valid_Employee_Name()"
});
formatter.result({
  "duration": 1049679790,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTest.select_leave_type()"
});
formatter.result({
  "duration": 508068824,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTest.i_click_from_calender()"
});
formatter.result({
  "duration": 468776203,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTest.i_enter_from_date()"
});
formatter.result({
  "duration": 295104112,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTest.i_click_to_calender()"
});
formatter.result({
  "duration": 277469116,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTest.i_enter_to_date()"
});
formatter.result({
  "duration": 256115252,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTest.i_select_Partial_days()"
});
formatter.result({
  "duration": 348591893,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTest.clicking_the_Assign_button()"
});
formatter.result({
  "duration": 230357072,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTest.leave_is_assigned_to_employee()"
});
formatter.result({
  "duration": 6109564304,
  "status": "passed"
});
});