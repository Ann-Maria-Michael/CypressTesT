describe('Create and mark-unmark as favorite', function(){
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq','Conduit') //Command used to validate the title
        cy.location('protocol').should('eq','https:')
        cy.get('input[type="email"]').type('ann.maria@amazecodes.com')
        cy.get('input[type="password"]').type('Admin@123')
        cy.get('.btn').contains('Sign in').click()
        cy.contains('Your Feed',{timeout:10000}).should('be.visible')//timeout is mentioned to increase the default time given
     })
     it('Create a post',function(){
         cy.contains('New Post').click()
         cy.hash().should('include','#/editor')
         cy.get('input[placeholder="Article Title"]').type('Test 1')
         cy.get('input[placeholder="What\'s this article about?"]').type('Test 1')// When ever an ' is present in the place holder then add a \
         cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Test 1')
         cy.get('input[placeholder="Enter tags"]').type('Test 1')
         cy.get('.btn').contains('Publish Article').click()
         cy.url().should('include','article')
     })
     it('Mark-unmark as favorite',function(){
        cy.get('.nav-link').contains('AnMic').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').click()
        cy.contains('Favorited Articles').click()
        cy.reload()
        cy.url().should('include','#/@AnMic/favorites',{timeout:10000}) 
        cy.get('.ion-heart').click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')//Or can use cy.go(-1) and for forward use cy.go(1) else cy.go('forward')


    })

})