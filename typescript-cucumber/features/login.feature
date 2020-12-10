#Author - Deepali

Feature: To test Login functionality

Scenario Outline: Check login is successful for valid credentials
Given user is on login page
When user enters "<username>" and "<password>"
Then the user should be able to login

Examples:
    | username | password |
    | Yogesh  |  |

