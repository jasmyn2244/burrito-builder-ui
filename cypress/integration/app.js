import { Children } from "react/cjs/react.production.min"

describe('User can visit home page, view orders, and make orders', () => {

  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/orders', { fixture: 'orderData.json' })
    cy.visit('http://localhost:3000')
  })

  it('Should render a title', () => {
    cy.get('h1')
      .contains('Burrito Builder')
  })

  it('Should display a form', () => {
    cy.get('form').should('exist')
    cy.get('button').should('have.length', 15)
    cy.get('input').should('exist')
  })

  it('Should display recipe cards', () => {
    cy.get('section > :nth-child(1)')
      .should('exist')
    cy.get(':nth-child(2) > h3')
      .contains('Horrace')
    cy.get(':nth-child(2) > .ingredient-list > :nth-child(1)')
      .contains('sofritas')
  })

  // it('Shoulde be able to delete an order', () => {
  //   cy.intercept('DELETE', 'http://localhost:3001/api/v1/orders/2')

  //   cy.get(':nth-child(1) > button')
  //     .click()
  // })
})