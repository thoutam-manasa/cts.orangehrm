
@admin
Feature: check the user details

  Scenario Outline: check the user details with valid credentials and Invalid credentials
    Given Open chrome and start application
    When I enter valid "<usernameNumber>" 
    When user should be able to login
    When admin button is clicked
    When I enter valid username
    When clicking the Search button
    Then user details displayed
Then application should be closed
     Examples:
     |usernameNumber|
     |1| 
     