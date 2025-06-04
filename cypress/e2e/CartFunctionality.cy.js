import Login from "../POM/login";

describe("Cart functionality",()=>{
    
    const ln = new Login();
    
    beforeEach(()=>{
        cy.visit("/");
        ln.enterUsername("standard_user");
        ln.enterPassword("secret_sauce");
        ln.clickLoginButton();

    })
    it("Add one product to cart",()=>{

        //adding product to cart
        cy.get("#add-to-cart-sauce-labs-bike-light").click();
        //visiting the cart
        cy.get(".shopping_cart_badge").click();
        //verifying cart url
        cy.url().should("eq","https://www.saucedemo.com/cart.html");
        //item should be visible in cart 
        cy.get(".cart_item").should("be.visible");
        //verifying the quantity
        cy.get(".cart_quantity").should("contain",1);
        //verifying the description of the item in the cart
        cy.contains(".cart_item_label","Sauce Labs Bike Light").should("be.visible");
  
    })
})