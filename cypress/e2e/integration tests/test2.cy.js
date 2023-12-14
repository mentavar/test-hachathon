/// <reference types="Cypress" />

import HomePage from '../pageObject/HomePage';

describe('My First Test Suite', function()
{

    before(function() {
        cy.fixture('example').then(function(data)
        {
            this.data = data
        })
    })

    it('My FirstTest case', function() {

        const homePage = new HomePage();
        //cy.visit(Cypress.env('url') + "/seleniumPractise/#/")
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        homePage.getCucumberInput().clear();
        homePage.getCucumberInput().type(3)
        cy.get('.search-keyword').type('ca');

    })

})