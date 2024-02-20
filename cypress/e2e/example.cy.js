/// <reference types="cypress" />

describe('Experiment here first, Not real tests', () => {

    it('Environment variables', () => {
        cy.log("Base URL = " + Cypress.env('baseUrl'))
        cy.log("Example Name = " + Cypress.env('name'))
        cy.log("Example Email = " + Cypress.env('email'))
        cy.log("Example Body = " + Cypress.env('body'))
    })
})