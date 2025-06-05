import Login from "../POM/login.js";

/// <reference types="cypress" />

describe("UI and responsiveness",()=>{
    
    const ln = new Login();


    it("Responsive in mobile and potrait",()=>{
        
        cy.viewport('iphone-6','portrait');
        cy.visit("/");
        cy.wait(3000);

        //visibility in login page
        cy.get("#user-name").should("be.visible");//username field
        cy.get("#password").should("be.visible");//password field
        cy.get("#login-button").should("be.visible");//login button

        //login
        ln.enterUsername("standard_user");
        ln.enterPassword("secret_sauce");
        ln.clickLoginButton();

        cy.wait(3000);

        //verifying successful login
        cy.url().should("eq","https://www.saucedemo.com/inventory.html");

        //item number
        cy.get(".inventory_item").should("have.length.gte",1);

        //visibity in inventory page
        cy.get(".bm-burger-button").should("be.visible").click();
        cy.get(".bm-menu").should("be.visible");
        cy.get("#react-burger-cross-btn").should("be.visible").click();
        cy.get(".shopping_cart_link").should("be.visible");
        cy.get(".product_sort_container").should("be.visible");

        //scroll
        cy.get(".footer").scrollIntoView({duration:1500});
        cy.get(".footer").should("be.visible");//footer
        cy.get(".header_container").scrollIntoView({duration:1500});
        cy.get(".header_container").should("be.visible");//header

    })

    it("Responsive in mobile and landscape",()=>{
        
        cy.viewport('iphone-6','landscape');
        cy.visit("/");
        cy.wait(3000);

        //visibility in login page
        cy.get("#user-name").should("be.visible");//username field
        cy.get("#password").should("be.visible");//password field
        cy.get("#login-button").should("be.visible");//login button

        //login
        ln.enterUsername("standard_user");
        ln.enterPassword("secret_sauce");
        ln.clickLoginButton();

        cy.wait(3000);

        //verifying successful login
        cy.url().should("eq","https://www.saucedemo.com/inventory.html");

        //item number
        cy.get(".inventory_item").should("have.length.gte",1);

        //visibity in inventory page
        cy.get(".bm-burger-button").should("be.visible").click();
        cy.get(".bm-menu").should("be.visible");
        cy.get("#react-burger-cross-btn").should("be.visible").click();
        cy.get(".shopping_cart_link").should("be.visible");
        cy.get(".product_sort_container").should("be.visible");

        //scroll
        cy.get(".footer").scrollIntoView({duration:1500});
        cy.get(".footer").should("be.visible");//footer
        cy.get(".header_container").scrollIntoView({duration:1500});
        cy.get(".header_container").should("be.visible");//header



    })

    it("Responsive in tab and portrait",()=>{
        
        cy.viewport('ipad-2','portrait');
        cy.visit("/");
        cy.wait(3000);

        //visibility in login page
        cy.get("#user-name").should("be.visible");//username field
        cy.get("#password").should("be.visible");//password field
        cy.get("#login-button").should("be.visible");//login button

        //login
        ln.enterUsername("standard_user");
        ln.enterPassword("secret_sauce");
        ln.clickLoginButton();

        cy.wait(3000);

        //verifying successful login
        cy.url().should("eq","https://www.saucedemo.com/inventory.html");

        //item number
        cy.get(".inventory_item").should("have.length.gte",1);

        //visibity in inventory page
        cy.get(".bm-burger-button").should("be.visible").click();
        cy.get(".bm-menu").should("be.visible");
        cy.get("#react-burger-cross-btn").should("be.visible").click();
        cy.get(".shopping_cart_link").should("be.visible");
        cy.get(".product_sort_container").should("be.visible");

        //scroll
        cy.get(".footer").scrollIntoView({duration:1500});
        cy.get(".footer").should("be.visible");//footer
        cy.get(".header_container").scrollIntoView({duration:1500});
        cy.get(".header_container").should("be.visible");//header



    })

    it("Responsive in tab and landscape",()=>{
        
        cy.viewport('ipad-2','landscape');
        cy.visit("/");
        cy.wait(3000);

        //visibility in login page
        cy.get("#user-name").should("be.visible");//username field
        cy.get("#password").should("be.visible");//password field
        cy.get("#login-button").should("be.visible");//login button

        //login
        ln.enterUsername("standard_user");
        ln.enterPassword("secret_sauce");
        ln.clickLoginButton();

        cy.wait(3000);

        //verifying successful login
        cy.url().should("eq","https://www.saucedemo.com/inventory.html");

        //item number
        cy.get(".inventory_item").should("have.length.gte",1);

        //visibity in inventory page
        cy.get(".bm-burger-button").should("be.visible").click();
        cy.get(".bm-menu").should("be.visible");
        cy.get("#react-burger-cross-btn").should("be.visible").click();
        cy.get(".shopping_cart_link").should("be.visible");
        cy.get(".product_sort_container").should("be.visible");

        //scroll
        cy.get(".footer").scrollIntoView({duration:1500});
        cy.get(".footer").should("be.visible");//footer
        cy.get(".header_container").scrollIntoView({duration:1500});
        cy.get(".header_container").should("be.visible");//header



    })

    it("Responsive in pc",()=>{
        
        cy.viewport('macbook-15');
        cy.visit("/");
        cy.wait(3000);

        //visibility in login page
        cy.get("#user-name").should("be.visible");//username field
        cy.get("#password").should("be.visible");//password field
        cy.get("#login-button").should("be.visible");//login button

        //login
        ln.enterUsername("standard_user");
        ln.enterPassword("secret_sauce");
        ln.clickLoginButton();

        cy.wait(3000);

        //verifying successful login
        cy.url().should("eq","https://www.saucedemo.com/inventory.html");

        //item number
        cy.get(".inventory_item").should("have.length.gte",1);

        //visibity in inventory page
        cy.get(".bm-burger-button").should("be.visible").click();
        cy.get(".bm-menu").should("be.visible");
        cy.get("#react-burger-cross-btn").should("be.visible").click();
        cy.get(".shopping_cart_link").should("be.visible");
        cy.get(".product_sort_container").should("be.visible");

        //scroll
        cy.get(".footer").scrollIntoView({duration:1500});
        cy.get(".footer").should("be.visible");//footer
        cy.get(".header_container").scrollIntoView({duration:1500});
        cy.get(".header_container").should("be.visible");//header



    })

})