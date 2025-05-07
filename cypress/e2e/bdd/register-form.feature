Feature: User Registration

  Scenario: Successful registration with valid data
    Given I am on the registration page
    When I enter valid registration details
    And I submit the registration form
    Then I should see a confirmation that the account was created

  Scenario: Registration fails with invalid email format
    Given I am on the registration page
    When I enter an invalid email format
    And I submit the registration form
    Then I should see an invalid email error message
