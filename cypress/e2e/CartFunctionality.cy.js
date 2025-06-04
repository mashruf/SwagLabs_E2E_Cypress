import Login from "../POM/login";

describe("Cart functionality", () => {

    const ln = new Login();

    beforeEach(() => {
        cy.visit("/");
        ln.enterUsername("standard_user");
        ln.enterPassword("secret_sauce");
        ln.clickLoginButton();

    })
    it("Add one product to cart", () => {

        //adding product to cart
        cy.get("#add-to-cart-sauce-labs-bike-light").click();

        //visiting the cart
        cy.get(".shopping_cart_badge").click();

        //verifying cart url
        cy.url().should("eq", "https://www.saucedemo.com/cart.html");

        //item should be visible in cart 
        cy.get(".cart_item").should("be.visible");

        //verifying the quantity
        cy.get(".cart_quantity").should("contain", 1);

        //verifying the visibility of item name
        cy.get(".inventory_item_name").should("be.visible");

        //verifying the visibility of item description
        cy.get(".inventory_item_desc").should("be.visible");

        //verifying the visibility of item price
        cy.get(".inventory_item_price").should("be.visible");


    })

    it("Add multiple products to cart", () => {

        //adding multiple product to cart
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

    })

    it.only("Remove product from inventory view",()=>{

        //verifying user is on inventory page
        cy.url().should("eq","https://www.saucedemo.com/inventory.html");

        //Adding product to cart
        cy.get("#add-to-cart-sauce-labs-bike-light").click();
        
        //Verifying product is added and removed afterward
        cy.get("#remove-sauce-labs-bike-light").should("contain","Remove").click();

        //verifying product is removed
        cy.get("#add-to-cart-sauce-labs-backpack").should("contain","Add to cart");

    })

    it.only("Remove product from cart page",()=>{
        
        //Adding product to cart
        cy.get("#add-to-cart-sauce-labs-bike-light").click();

        //Verifying product is added to cart
        cy.get("#remove-sauce-labs-bike-light").should("contain","Remove");

        //visit cart
        cy.get(".shopping_cart_link").click();

        //verifying user is on cart
        cy.url().should("eq","https://www.saucedemo.com/cart.html");

        //verifying item in the card is visible
        cy.get(".cart_item").should("be.visible");

        //remove item from cart
        cy.get("#remove-sauce-labs-bike-light").click();

        //verifying item in the card does not exist
        cy.get(".cart_item").should("not.exist");
    })
})