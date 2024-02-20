/// <reference types="cypress" />

describe('LUMA - it is not a real store you know!!', () => {
  
  it('Add a Radiant Tee to Cart and count', () => {

    cy.GoToLuma()
    cy.GoToHotSellers()
    cy.GoToHotDress('Radiant Tee', '/radiant-tee.html')
    cy.RequiredFields()
    cy.SelectDressSize('XS')
    cy.SelectDressColor('Blue')
    cy.AddToCart()
    cy.NoOfItemsInCart(1)

  })

  it('Add a Breathe-Easy Tank to Cart and count', () => {

    cy.GoToLuma()
    cy.GoToHotSellers()
    cy.GoToHotDress('Breathe-Easy Tank', '/breathe-easy-tank.html')
    cy.RequiredFields()
    cy.SelectDressSize('S')
    cy.SelectDressColor('Yellow')
    cy.AddToCart()
    cy.NoOfItemsInCart(1)

  })

  it('Add a Argus All-Weather Tank to Cart and count', () => {

    cy.GoToLuma()
    cy.GoToHotSellers()
    cy.GoToHotDress('Argus All-Weather Tank', '/argus-all-weather-tank.html')
    cy.RequiredFields()
    cy.SelectDressSize('L')
    cy.SelectDressColor('Gray')
    cy.AddToCart()
    cy.NoOfItemsInCart(1)

  })

  it('Add a Hero Hoodie to Cart and count', () => {

    cy.GoToLuma()
    cy.GoToHotSellers()
    cy.GoToHotDress('Hero Hoodie', '/hero-hoodie.html')
    cy.RequiredFields()
    cy.SelectDressSize('M')
    cy.SelectDressColor('Black')
    cy.AddToCart()
    cy.NoOfItemsInCart(1)

  })

  it('Add a Fusion Backpack to Cart and count', () => {

    cy.GoToLuma()
    cy.GoToHotSellers()
    cy.GoToHotDress('Fusion Backpack', '/fusion-backpack.html')
    cy.wait(1000)
    cy.AddToCart()
    cy.ItemNotAvailable('The requested qty is not available')

  })

  it('Add a Push It Messenger Bag to Cart and count', () => {

    cy.GoToLuma()
    cy.GoToHotSellers()
    cy.GoToHotDress('Push It Messenger Bag', '/push-it-messenger-bag.html')
    cy.wait(1000)
    cy.AddToCart()
    cy.ItemNotAvailable('The requested qty is not available')

  })


it('Add Four items to cart', () => {

    cy.GoToLuma()
    cy.GoToHotSellers()
    cy.GoToHotDress('Radiant Tee', '/radiant-tee.html')
    cy.SelectDressSize('S')
    cy.SelectDressColor('Orange')
    cy.AddToCart()
    cy.NoOfItemsInCart(1)
    
    cy.go('back')
    cy.GoToHotDress('Breathe-Easy Tank', '/breathe-easy-tank.html')
    cy.SelectDressSize('XS')
    cy.SelectDressColor('White')
    cy.AddToCart()
    cy.NoOfItemsInCart(2)

    cy.go('back')
    cy.GoToHotDress('Argus All-Weather Tank', '/argus-all-weather-tank.html')
    cy.SelectDressSize('L')
    cy.SelectDressColor('Gray')
    cy.AddToCart()
    cy.NoOfItemsInCart(3)

    cy.go('back')
    cy.GoToHotDress('Hero Hoodie', '/hero-hoodie.html')
    cy.SelectDressSize('XL')
    cy.SelectDressColor('Green')
    cy.AddToCart()
    cy.NoOfItemsInCart(4)

  })

})