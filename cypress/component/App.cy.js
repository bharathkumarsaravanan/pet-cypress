import App from '../../src/App.js';
import { cy } from 'cypress';

describe('App.cy.js', () => {
  it('playground', () => {
    cy.mount(<App/>);
    cy.get('a').should('have.text', 'Learn React');
  })
})