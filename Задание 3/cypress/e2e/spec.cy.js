
/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {

  
   
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
 
    cy.visit('https://www.saucedemo.com')
    const newItem = 'standard_user'
      const secondItem = 'secret_sauce'
  
      cy.get('[data-test=username]').type(`${newItem}`)
      cy.get('[data-test=password]').type(`${secondItem}`)
      cy.get('[data-test=login-button]').last().click()
})

it("Check price", () => {

  cy.get('[data-test=product-sort-container]').select("Price (low to high)")
  cy.get('[class^=inventory_list]')
  const costList = [];

cy.get('.inventory_item_price').then(($elements) => {
  const pricePromises = $elements.map((index, element) => {
    const priceText = Cypress.$(element).text().replace('$', '');
    return parseFloat(priceText);
  });

  return Promise.all(pricePromises);
}).then((prices) => {
  costList.push(...prices);
  const sortedPrices = [...costList].sort((a, b) => a - b);
  expect(costList).to.deep.equal(sortedPrices);
});

  
})
  it('Add to cart', () => {
      const firstName = 'Тимур'
      const lastName = 'Белоусов'
      const Zip = '426000'
    cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click()
    cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click()
    cy.get('[data-test=shopping-cart-link]').click()
    cy.get('[data-test=checkout]').click()
    cy.get('[data-test=firstName]').type(`${firstName}`)
    cy.get('[data-test=lastName]').type(`${lastName}`)
    cy.get('[data-test=postalCode]').type(`${Zip}`)
    cy.get('[data-test=continue]').click();
    cy.get('[data-test=finish]').click();
  })
})

