import Login from "../POM/login.js";

/// <reference types="cypress" />

describe("Session management",()=>{
    
    const ln = new Login();

    beforeEach(()=>{
        cy.visit("/");
        ln.enterUsername("standard_user");
        ln.enterPassword("secret_sauce");
        ln.clickLoginButton();
    })

    it("Logout from burger menu",()=>{

        //add item to cart
        cy.get("#add-to-cart-sauce-labs-bike-light").click();

        //verifying item added to cart
        cy.get(".shopping_cart_badge").should("contain","1");

        //verifying burger menu button is visible and click
        cy.get("#react-burger-menu-btn").should("be.visible").click();

        //click logout 
        cy.get("#logout_sidebar_link").click();

        //verifying redirected to login page
        cy.url().should("eq","https://www.saucedemo.com/");

        //visit inventory page
        cy.window().then((win) => {
            win.location.href = '/inventory.html';
        });

        //verifying session cleared
        cy.url().should("eq","https://www.saucedemo.com/");
        cy.get(".error-message-container").
        should("contain","Epic sadface: You can only access '/inventory.html' when you are logged in");
    })

    it("Login again after logout",()=>{

        //add item to cart
        cy.get("#add-to-cart-sauce-labs-bike-light").click();

        //verifying item added to cart
        cy.get(".shopping_cart_badge").should("contain","1");

        //verifying burger menu button is visible and click
        cy.get("#react-burger-menu-btn").should("be.visible").click();

        //click logout 
        cy.get("#logout_sidebar_link").click();

        //verifying redirected to login page
        cy.url().should("eq","https://www.saucedemo.com/");

        //visit inventory page
        cy.window().then((win) => {
            win.location.href = '/inventory.html';
        });

        //verifying session cleared
        cy.url().should("eq","https://www.saucedemo.com/");
        cy.get(".error-message-container").
        should("contain","Epic sadface: You can only access '/inventory.html' when you are logged in");

        //Login
        ln.enterUsername("standard_user");
        ln.enterPassword("secret_sauce");
        ln.clickLoginButton();

        //fresh session(login successful)
        cy.url().should("eq","https://www.saucedemo.com/inventory.html");

    })

    it("Use browser back after logout",()=>{

        //add item to cart
        cy.get("#add-to-cart-sauce-labs-bike-light").click();

        //verifying item added to cart
        cy.get(".shopping_cart_badge").should("contain","1");

        //verifying burger menu button is visible and click
        cy.get("#react-burger-menu-btn").should("be.visible").click();

        //click logout 
        cy.get("#logout_sidebar_link").click();

        //browser back
        cy.go("back");

        //should redirect to login
        cy.url().should("eq","https://www.saucedemo.com/");
        cy.get(".error-message-container").
        should("contain","Epic sadface: You can only access '/inventory.html' when you are logged in");

    })
})