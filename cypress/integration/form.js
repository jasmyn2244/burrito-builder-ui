describe('User can use form to add an order to the page', () => {

  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/orders', { fixture: 'orderData.json' })
    cy.visit('http://localhost:3000')
  })

  it('Should be ablet to type name into form', () => {
    cy.get('input')
      .type('Tim')
      .should('have.attr', 'value', 'Tim')
  })

  it('Should be able to select multiple ingredients', () => {
    cy.get('button').eq('0')
      .click()
    cy.get('button').eq('4')
      .click()
    cy.get('p')
      .contains('Order: beans, lettuce')
  })

  it('Should be able to submit new order and have it appear', () => {

    cy.intercept('POST', 'http://localhost:3001/api/v1/orders',
      { name: 'Tim', ingredients: ['beans', 'lettuce'] })

    cy.get('input')
      .type('Tim')
    cy.get('button').eq('0')
      .click()
    cy.get('button').eq('4')
      .click()
    cy.get(':nth-child(15)')
      .click()

    cy.get(':nth-child(3) > h3')
      .contains('Tim')
    cy.get(':nth-child(3) > .ingredient-list > :nth-child(1)')
      .contains('beans')
    cy.get(':nth-child(3) > .ingredient-list > :nth-child(2)')
      .contains('lettuce')
  })

  it('Should not be able to submit order if name is not entered', () => {

    cy.intercept('POST', 'http://localhost:3001/api/v1/orders',
      { name: 'Tim', ingredients: ['beans', 'lettuce'] })

    cy.get('button').eq('0')
      .click()

    cy.get('h3')
      .should('have.length', 2)
  })
})