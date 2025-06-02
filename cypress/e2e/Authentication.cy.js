import Login from "../POM/Login";

describe("Authentication",()=>{
    
    //creating object of the class Login
    const ln = new Login();

    //will visit the site before every testcase
    beforeEach("",()=>{
        cy.visit('/');
    })

    it("Login with valid standard user",()=>{
        ln.enterUsername("standard_user"); //entering username
        ln.enterPassword("secret_sauce"); //entering password
        ln.clickLoginButton(); //clicking login button
        cy.url().should("eq","https://www.saucedemo.com/inventory.html"); //varifying successful login

    })

    it("Login with locked out user",()=>{
        ln.enterUsername("locked_out_user"); //entering username
        ln.enterPassword("secret_sauce"); //entering password
        ln.clickLoginButton(); //clicking login button
        cy.get(".error-message-container.error").
        should("have.text","Epic sadface: Sorry, this user has been locked out.");//verifying error message
    })

    it("Login with invalid username",()=>{
        ln.enterUsername("invalid"); //entering username
        ln.enterPassword("secret_sauce"); //entering password
        ln.clickLoginButton(); //clicking login button
        cy.get(".error-message-container.error").
        should("have.text","Epic sadface: Username and password do not match any user in this service");//verifying error message
    })

    it("Login with invalid password",()=>{
        ln.enterUsername("standard_user"); //entering username
        ln.enterPassword("invalid"); //entering password
        ln.clickLoginButton(); //clicking login button
        cy.get(".error-message-container.error").
        should("have.text","Epic sadface: Username and password do not match any user in this service");//verifying error message
    })

    it("Login with empty username",()=>{
        ln.enterEmptyUsername(); //entering username
        ln.enterPassword("secret_sauce"); //entering password
        ln.clickLoginButton(); //clicking login button
        cy.get(".error-message-container.error").
        should("have.text","Epic sadface: Username is required");//verifying error message
    })

    it.only("Login with empty password",()=>{
        ln.enterUsername("standard_user"); //entering username
        ln.enterEmptyPassword(); //entering password
        ln.clickLoginButton(); //clicking login button
        cy.get(".error-message-container.error").
        should("have.text","Epic sadface: Password is required");//verifying error message
    })
})