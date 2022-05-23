Feature('login');

Scenario('User should be able to login', ({ I }) => {

    I.amOnPage('https://www.saucedemo.com/')    // User is on landing page
    I.fillField('#user-name', 'standard_user')
    I.fillField('#password', 'secret_sauce')
    I.click('#login-button')                    // user login and view inventory page
    I.wait(3)
    I.click('#add-to-cart-sauce-labs-backpack')
    I.click('.shopping_cart_link')
    I.click('#checkout')                        // user add item to basket and check out
    I.fillField('#first-name', 'Joe')
    I.fillField('#last-name', 'Test')
    I.fillField('#postal-code', 'LS12 2EY')     // user complete payment details
    I.click('#continue')
    I.click('#finish')
    I.see('THANK YOU FOR YOUR ORDER') // order is successful and thank you message is disolayed

});
