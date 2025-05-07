Feature: Password reset flow

  Scenario: Submit email reset
    Given I am on the password recovery page
    When I submit a valid email for password recovery
    Then I should see a confirmation message that an email has been sent to the provided address

  Scenario: Recover password without email
    Given I am on the password recovery page
    When I submit the form without entering an email
    Then I should see a validation message asking to fill in the email field
