Feature: Login

    app Authentification

    Background:
        Given I open the "login" page


    Scenario: valid credentials
        Then I type my "email"
        Then I type my "password"
        Then I click the "login" button
        Then "home" page opens

    @focus
    Scenario: blank email and blank password
        Then I click the "login" button
        Then Error "enter email" shows

    Scenario: blank email
        Then I type my "password"
        Then I click the "login" button
        Then Error "enter email" shows

    Scenario: blank password
        Then I type my "email"
        Then I click the "login" button
        Then Error "enter password" shows

    @ignore
    Scenario: wrong email format

    @ignore
    Scenario: wrong password min length
