class Login{
    enterUsername(username){
        cy.get("#user-name").type(username);
    }

    enterEmptyUsername(){
        cy.get("#user-name").clear();
    }

    enterPassword(password){
        cy.get("#password").type(password);
    }

    enterEmptyPassword(){
        cy.get("#password").clear();
    }



    clickLoginButton(){
        cy.get("#login-button").click();
    }


}

export default Login;