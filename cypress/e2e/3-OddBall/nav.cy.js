describe('Navigation', () => {
    beforeEach(function() {
        console.log("Starting Navigation");
    })

    it('should navigate to live game', () => {
        cy.visit('https://oddball-nba-tracker.vercel.app/');

        cy.get('a[href="/live-games"]').click();

        cy.url().should('include', '/live-games');
    })

    it('should navigate to news', () => {
        cy.visit('https://oddball-nba-tracker.vercel.app/live-games');

        cy.get('a[href="/news"]').click();

        cy.url().should('include', '/news');
    })

    it('should navigate to season stats', () => {
        cy.visit('https://oddball-nba-tracker.vercel.app/news');

        cy.get('a[href="/season-stats"]').click();

        cy.url().should('include', '/season-stats');
    })

    it('should navigate to about', () => {
        cy.visit('https://oddball-nba-tracker.vercel.app/season-stats');

        cy.get('a[href="/about"]').click();

        cy.url().should('include', '/about');
    })

    it('should navigate to sign up', () => {
        cy.visit('https://oddball-nba-tracker.vercel.app/about');

        cy.get('a[href="/sign-up"]').click();

        cy.url().should('include', '/sign-up');
    })
})
