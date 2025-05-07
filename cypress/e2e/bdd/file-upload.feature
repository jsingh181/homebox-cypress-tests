Feature: File upload functionality

  Scenario: Uploading a valid file
    Given I am on the file upload page
    When I select a file to upload
    And I submit the file
    Then I should see the uploaded file name in the confirmation
