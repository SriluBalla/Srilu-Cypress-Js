
Cypress.Commands.add('GoToLuma', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.contains('This is a demo store to test your test automaiton scripts. No orders will be fulfilled. If you are facing any issue, email us at hello@softwaretestingboard.com.').should('be.visible')
})

Cypress.Commands.add('GoToHotSellers', () => {
    cy.contains('h2', 'Hot Sellers').should('be.visible')
    cy.contains('Here is what`s trending on Luma right now').should('be.visible')
})

Cypress.Commands.add('GoToHotDress', (aparrel, url) => {
    cy.contains('a', aparrel).click()
    cy.title().should('include', aparrel)
    cy.contains('span', aparrel).should('be.visible')
    cy.url().should('include', url)
})

Cypress.Commands.add('RequiredFields', () => {
    cy.get('#product-addtocart-button').click()
    cy.contains('This is a required field.').should('be.visible')
})

Cypress.Commands.add('SelectDressSize', (size) => {
    cy.get('[aria-label="'+ size +'"]').click()
})

Cypress.Commands.add('SelectDressColor', (color) => {
    cy.get('[aria-label="'+ color +'"]').click()
})

Cypress.Commands.add('AddToCart', () => {
    cy.get('#product-addtocart-button').click()
    cy.wait(500)
})

Cypress.Commands.add('NoOfItemsInCart', (no) => {
    cy.contains('.counter-number', no).should('be.visible')
})

Cypress.Commands.add('ItemNotAvailable', (error) => {
    cy.contains(error).should('be.visible')
})