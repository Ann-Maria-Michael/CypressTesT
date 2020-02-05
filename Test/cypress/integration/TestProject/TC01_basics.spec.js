describe('Login', function(){
    it('Sign in', function(){
        cy.visit('http://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('ann.maria@amazecodes.com')
        cy.get('input[type="password"]').type('Admin@123')
        cy.get('.btn').contains('Sign in').click()

    })
})