import Login from "../POM/login.js";

describe("Inventory and product listing", () => {
    //creating object of class Login
    const ln = new Login();

    //will be performed before every test case
    beforeEach(() => {
        cy.visit("/");//visit website
        ln.enterUsername("standard_user");//enter username
        ln.enterPassword("secret_sauce");//enter password
        ln.clickLoginButton();//click login button
    })

    it("View product list", () => {
        //validating number of item
        cy.get(".inventory_item").should("have.length", 6);

        //validating names are visible
        cy.get(".inventory_item_name").each((name) => {
            cy.wrap(name).should("be.visible");
        })

        //validating prices are visible
        cy.get(".inventory_item_price").each((price) => {
            cy.wrap(price).should("be.visible");
        })

        //validating images are visible
        cy.get(".inventory_list>.inventory_item>.inventory_item_img").each((img) => {
            cy.wrap(img).should("be.visible");
        })
    })

    it("Sort products alphabetically", () => {

        //Name (A to Z)
        let arr = [];
        cy.get(".product_sort_container").select("Name (A to Z)");
        cy.get(".inventory_item_name").each((name) => {
            let nameOfProduct = name.text();
            arr.push(nameOfProduct);

        }).then(() => {
            let originalList = [...arr].join(",");
            let ascendingList = [...arr].sort().join(",");
            expect(ascendingList).to.deep.equal(originalList);//Validating name A to Z
            arr.length = 0;
        })

        //Name (Z to A)
        cy.get(".product_sort_container").select("Name (Z to A)");
        cy.get(".inventory_item_name").each((name) => {
            let nameOfProduct = name.text();
            arr.push(nameOfProduct);

        }).then(() => {
            let originalList = [...arr].join(",");
            let descendingList = [...arr].sort().reverse().join(",");
            expect(descendingList).to.deep.equal(originalList);//Validating name Z to A
            arr.length = 0;
        })

        //Price (low to high)
        cy.get(".product_sort_container").select("Price (low to high)");
        cy.get(".inventory_item_price").each((price) => {
            let nameOfProduct = price.text();
            nameOfProduct = nameOfProduct.split("$");
            arr.push(parseFloat(nameOfProduct[1]));

        }).then(() => {
            let originalList = [...arr].join(",");
            let ascendingList = [...arr].sort((a, b) => a - b).join(",");
            expect(ascendingList).to.deep.equal(originalList);//Validating price low to high
            arr.length = 0;
        })

        //Price (high to low)
        cy.get(".product_sort_container").select("Price (high to low)");
        cy.get(".inventory_item_price").each((price) => {
            let nameOfProduct = price.text();
            nameOfProduct = nameOfProduct.split("$");
            arr.push(parseFloat(nameOfProduct[1]));

        }).then(() => {
            let originalList = [...arr].join(",");
            let descendingList = [...arr].sort((a, b) => b - a).join(",");
            expect(descendingList).to.deep.equal(originalList);//Validating price high to low
            arr.length = 0;
        })
    })

    it("View product details page", () => {

        //Sauce Labs Backpack
        cy.contains("a", "Sauce Labs Backpack").click();
        //verify details of description
        cy.get(".inventory_details_desc_container").
            should("contain", "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.")
        //verify image
        cy.get("img[alt='Sauce Labs Backpack']").should("have.attr", "src").
            and("include", "/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg");
        //verify price
        cy.get(".inventory_details_price").should("contain", "$29.99");


        cy.go("back");

        //Sauce Labs Bike Light
        cy.contains("a", "Sauce Labs Bike Light").click();
        //verify details of description
        cy.get(".inventory_details_desc_container").
            should("contain", "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.")
        //verify image
        cy.get("img[alt='Sauce Labs Bike Light']").should("have.attr", "src").
            and("include", "/static/media/bike-light-1200x1500.37c843b0.jpg");
        //verify price
        cy.get(".inventory_details_price").should("contain", "$9.99");

        cy.go("back");

        //Sauce Labs Bolt T-Shirt
        cy.contains("a", "Sauce Labs Bolt T-Shirt").click();
        //verify details of description
        cy.get(".inventory_details_desc_container").
            should("contain", "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.")
        //verify image
        cy.get("img[alt='Sauce Labs Bolt T-Shirt']").should("have.attr", "src").
            and("include", "/static/media/bolt-shirt-1200x1500.c2599ac5.jpg");
        //verify price
        cy.get(".inventory_details_price").should("contain", "$15.99");

        cy.go("back");

        //Sauce Labs Fleece Jacket
        cy.contains("a", "Sauce Labs Fleece Jacket").click();
        //verify details of description
        cy.get(".inventory_details_desc_container").
            should("contain", "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.")
        //verify image
        cy.get("img[alt='Sauce Labs Fleece Jacket']").should("have.attr", "src").
            and("include", "/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg");
        //verify price
        cy.get(".inventory_details_price").should("contain", "$49.99");

        cy.go("back");

        //Sauce Labs Onesie
        cy.contains("a", "Sauce Labs Onesie").click();
        //verify details of description
        cy.get(".inventory_details_desc_container").
            should("contain", "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.")
        //verify image
        cy.get("img[alt='Sauce Labs Onesie']").should("have.attr", "src").
            and("include", "/static/media/red-onesie-1200x1500.2ec615b2.jpg");
        //verify price
        cy.get(".inventory_details_price").should("contain", "$7.99");

        cy.go("back");

        //Test.allTheThings() T-Shirt (Red)
        cy.contains("a", "Test.allTheThings() T-Shirt (Red)").click();
        //verify details of description
        cy.get(".inventory_details_desc_container").
            should("contain", "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.")
        //verify image
        cy.get("img[alt='Test.allTheThings() T-Shirt (Red)']").should("have.attr", "src").
            and("include", "/static/media/red-tatt-1200x1500.30dadef4.jpg");
        //verify price
        cy.get(".inventory_details_price").should("contain", "$15.99");
    })

    it("Visit product detail page with invalid product ID", () => {
        // Instead of cy.visit (which resets sessionStorage), use JS redirect
        cy.window().then((win) => {
            win.location.href = '/inventory-item.html?id=10';
        });
        //verifying url
        cy.url().should("eq", "https://www.saucedemo.com/inventory-item.html?id=10");
        //verifying not found message
        cy.get(".inventory_details_desc_container").should("contain", "ITEM NOT FOUND");

    })
})