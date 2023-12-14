/// <reference types="Cypress" />

import ListContacts from '../pageObject/ListContacts';
import AddNewContact from '../pageObject/AddNewContact';

describe('Add A New Contact', function()
{

    before(function() {
        cy.request('DELETE', 'http://localhost:7001//api/v1/contacts/delete')
        
   
        
    })

    beforeEach(function() {
        cy.visit(Cypress.env('url') + "/#/contact"); 

        cy.fixture('example').then(function(data)
        {
            this.data = data
        })
    })

    it('Adding a new Contact with success', function() {
        const listContacts = new ListContacts();
        const addContact = new AddNewContact();
        //cy.visit(Cypress.env('url') + "/#/contact");
        
        listContacts.getNewContactUrl().click();
        addContact.getName().type(this.data.name);
        addContact.getEmail().type(this.data.email);
        addContact.getPhone().type(this.data.phone);
        addContact.getSaveBtn().click()
        listContacts.GetContactListTitle().should('have.text', 'Contact List')
        listContacts.VerifyEmailExists(this.data.email).should('be.visible');
        
    })

    
    it('Adding a Contact that already exists', function() {

        const listContacts = new ListContacts();
        const addContact = new AddNewContact();
        //cy.visit(Cypress.env('url') + "/#/contact")
        
        listContacts.getNewContactUrl().click();
        addContact.getName().type(this.data.name);
        addContact.getEmail().type(this.data.email);
        addContact.getPhone().type(this.data.phone);
        addContact.getSaveBtn().click();
        addContact.getNewContactTitle().should('have.text', 'Add New Contact');
        addContact.verifyEmailExists().should('be.visible');
    })

})