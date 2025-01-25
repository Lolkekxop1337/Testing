/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://uitestingplayground.com/home')
})
it("Click", () => {
  cy.get('a[href*="/click"]').click()
  cy.get('[id^=badButton]').click()
  cy.get('[id^=badButton]').should('have.css', 'background-color', 'rgb(40, 167, 69)');
  cy.get('[id^=badButton]').should('have.css', 'border-color', 'rgb(40, 167, 69)');
})
it("Text input", () => {
  const text = "abc"
  cy.get('a[href*="/textinput"]').click()
  cy.get('[id^=newButtonName]').type(`${text}`)
  cy.get('[id^=updatingButton]').click()
  cy.get('[id^=updatingButton]').should('have.text', `${text}`)
})
it("Sample App", () => {
  const name = "timur"
  const password = "pwd"
  cy.get('a[href*="/sampleapp"]').click()
  cy.get('[name="UserName"]').type(`${name}`)
  cy.get('[name="Password"]').type('abc')
  cy.get('div.row').last().find("button").click()
  cy.get('[id^="loginstatus"]').should('have.text', 'Invalid username/password')
  cy.get('[name="UserName"]').type(`${name}`)
  cy.get('[name="Password"]').type(`${password}`)
  cy.get('div.row').last().find("button").click()
  cy.get('[id^="loginstatus"]').should('have.text', 'Welcome, timur!')
})
it("Disabled Input", () => {
  const text = "abc"
  cy.get('a[href*="/disabledinput"]').click()
  cy.get('[id^=enableButton]').click()
  .wait(5000)
  cy.get('[id^=inputField]').type(`${text}`)
})
it("AJAX Data", () => {
  cy.get('a[href*="/ajax"]').click()
  cy.get('[id^=ajaxButton]').click()
  .wait(15000)
  cy.get('.bg-success').should('have.text', 'Data loaded with AJAX get request.')
})
})