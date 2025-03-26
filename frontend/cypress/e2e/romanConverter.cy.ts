describe('Roman Numeral Converter', () => {
    it('should load the converter UI', () => {
      cy.visit('/');
      cy.contains('Roman numeral converter').should('be.visible');
      cy.get('input[name="romanInput"]').should('exist');
      cy.contains('Convert to roman numeral').should('be.disabled');
    });
  
    it('should convert a valid number to a Roman numeral', () => {
        cy.visit('/');
        cy.get('input[name="romanInput"]').type('10');
        cy.get('button').contains('Convert to roman numeral').click();
        cy.contains('Roman Numeral: X').should('be.visible');
    });
  });
  