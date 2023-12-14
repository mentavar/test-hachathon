/// <reference types="Cypress" />

describe('Add A New Contact', function()
{

   
    before(function() {
        cy.request('DELETE', 'http://localhost:7001//api/v1/contacts/delete')
    })

    it('Adding a new Contact with success', function() {

        cy.visit('http://localhost:7001/#/contact');
        cy.get("#newContact").click();
        cy.get("input[name='name']").type("testUser");
        cy.get("input[name='email']").type("testUser@netcompany.com");
        cy.get("input[name='phone']").type("2103252114");
        cy.get(".btn").click()
        cy.get('h3').should('have.text', 'Contact List')
        cy.get('table').contains('td', 'testUser@netcompany.com').should('be.visible');
        
    })

    
    it('Adding a Contact that already exists', function() {

        cy.visit('http://localhost:7001/#/contact');
        cy.get("#newContact").click();
        cy.get("input[name='name']").type("testUser");
        cy.get("input[name='email']").type("testUser@netcompany.com");
        cy.get("input[name='phone']").type("2103252114");
        cy.get(".btn").click()
        cy.get('h3').should('have.text', 'Add New Contact')
        cy.get('body').contains('div', 'Email already exists').should('be.visible');
    })

})