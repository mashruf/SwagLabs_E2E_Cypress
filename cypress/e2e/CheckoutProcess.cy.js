import Login from "../POM/login.js";

/// <reference types="cypress" />

describe("Checkout process",()=>{

    const ln = new Login();

    beforeEach(()=>{
        cy.visit("/");
        ln.enterUsername("standard_user");
        ln.enterPassword("secret_sauce");
        ln.clickLoginButton();
    })

    it("Proceed to checkout",()=>{
        
        //adding product to cart
        cy.get("#add-to-cart-sauce-labs-bike-light").click();
        cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
        cy.get("#add-to-cart-sauce-labs-onesie").click();

         //visiting the cart
        cy.get(".shopping_cart_badge").click();

        //verifying cart url
        cy.url().should("eq", "https://www.saucedemo.com/cart.html");

        //verifying multiple products added to cart
        cy.get(".cart_item").should("have.length", 3);
        cy.get(".cart_item").each((item) => {
            cy.wrap(item).within(() => {

                cy.get(".cart_quantity").should("be.visible");
                cy.get(".inventory_item_name").should("be.visible");
                cy.get(".inventory_item_desc").should("be.visible");
                cy.get(".inventory_item_price").should("be.visible");
            
            })
        })

        //verifying checkout option is visible 
        cy.get("#checkout").should("be.visible").click();

        //verifying checkout page
        cy.url().should("eq","https://www.saucedemo.com/checkout-step-one.html");
        cy.get(".title").should("have.text","Checkout: Your Information");
        
    })

    it("Submit valid checkout info",()=>{

        //adding product to cart
        cy.get("#add-to-cart-sauce-labs-bike-light").click();
        cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
        cy.get("#add-to-cart-sauce-labs-onesie").click();

         //visiting the cart
        cy.get(".shopping_cart_badge").click();

        //verifying cart url
        cy.url().should("eq", "https://www.saucedemo.com/cart.html");

        //verifying multiple products added to cart
        cy.get(".cart_item").should("have.length", 3);
        cy.get(".cart_item").each((item) => {
            cy.wrap(item).within(() => {

                cy.get(".cart_quantity").should("be.visible");
                cy.get(".inventory_item_name").should("be.visible");
                cy.get(".inventory_item_desc").should("be.visible");
                cy.get(".inventory_item_price").should("be.visible");
            
            })
        })

        //verifying checkout option is visible 
        cy.get("#checkout").should("be.visible").click();

        //verifying checkout page
        cy.url().should("eq","https://www.saucedemo.com/checkout-step-one.html");
        cy.get(".title").should("have.text","Checkout: Your Information");

        //entering user information and verifying
        cy.get("#first-name").type("Mashruf").should("have.value","Mashruf");
        cy.get("#last-name").type("Mahabub").should("have.value","Mahabub");
        cy.get("#postal-code").type("1234").should("have.value","1234");

        //verifying continue button is visible and clicking
        cy.get("#continue").should("be.visible").click();

        //verifying overview page
        cy.url().should("eq","https://www.saucedemo.com/checkout-step-two.html");
        cy.get(".title").should("have.text","Checkout: Overview");
    })

    it("Complete order",()=>{
        let totalPrice = 0;
        let priceArr = [];
        let totalPriceWithTax;

        //adding product to cart
        cy.get("#add-to-cart-sauce-labs-bike-light").click();
        cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
        cy.get("#add-to-cart-sauce-labs-onesie").click();

         //visiting the cart
        cy.get(".shopping_cart_badge").click();

        //verifying cart url
        cy.url().should("eq", "https://www.saucedemo.com/cart.html");

        //verifying multiple products added to cart
        cy.get(".cart_item").should("have.length", 3);
        cy.get(".cart_item").each((item) => {
            cy.wrap(item).within(() => {

                cy.get(".cart_quantity").should("be.visible");
                cy.get(".inventory_item_name").should("be.visible");
                cy.get(".inventory_item_desc").should("be.visible");
                cy.get(".inventory_item_price").should("be.visible");
            
            })
        })

        //verifying checkout option is visible 
        cy.get("#checkout").should("be.visible").click();

        //verifying checkout page
        cy.url().should("eq","https://www.saucedemo.com/checkout-step-one.html");
        cy.get(".title").should("have.text","Checkout: Your Information");

        //entering user information and verifying
        cy.get("#first-name").type("Mashruf").should("have.value","Mashruf");
        cy.get("#last-name").type("Mahabub").should("have.value","Mahabub");
        cy.get("#postal-code").type("1234").should("have.value","1234");

        //verifying continue button is visible and clicking
        cy.get("#continue").should("be.visible").click();

        //verifying overview page
        cy.url().should("eq","https://www.saucedemo.com/checkout-step-two.html");
        cy.get(".title").should("have.text","Checkout: Overview");

         //verifying summary information
        cy.contains(".summary_info_label","Payment Information:").should("be.visible");
        cy.contains(".summary_info_label","Shipping Information:").should("be.visible");

        //verifying overview page showing all added product correctly
        cy.get(".cart_item").should("have.length", 3);
        cy.get(".cart_item").each((item) => {
            cy.wrap(item).within(() => {
                cy.get(".cart_quantity").should("be.visible");
                cy.get(".inventory_item_name").should("be.visible");
                cy.get(".inventory_item_desc").should("be.visible");
                cy.get(".inventory_item_price").then((price)=>{
                    cy.wrap(price).should("be.visible");
                    let priceText = price.text();
                    priceText = priceText.split("$");
                    priceArr.push(parseFloat(priceText[1]));
                })
            })
        }).then(()=>{
            cy.log(priceArr);
            for(let i of priceArr){
                totalPrice = totalPrice + i;
            }
            cy.log(totalPrice);
            let tax = 0.08 * totalPrice;
            totalPriceWithTax = "Total: $"+(totalPrice + tax).toFixed(2);
            cy.log(totalPriceWithTax);

            //verifying price is correct
            cy.get(".summary_total_label").should("have.text",totalPriceWithTax);
        })

        //verifying finish button is visible and working
        cy.get("#finish").should("be.visible").click();

        //verifying order completed
        cy.url().should("eq","https://www.saucedemo.com/checkout-complete.html");
        cy.get(".complete-header").should("contain","Thank you for your order!");
    })

    it("Submit checkout form with empty fields",()=>{
        
        //visiting checkout form
        cy.window().then((win) => {
            win.location.href = '/checkout-step-one.html';
        });
        
        //verify first name is empty
        cy.get("#first-name").should("be.empty");
        
        //verify last name is empty
        cy.get("#last-name").should("be.empty");
        
        //verify postal-code is empty
        cy.get("#postal-code").should("be.empty");
        
        //verify continue is visible and clicking
        cy.get("#continue").should("be.visible").click();

        //verifying error message
        cy.get(".error-message-container").should("have.text","Error: First Name is required");

    })

})