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

    it('should navigate to player odds', () => {
        cy.visit('https://oddball-nba-tracker.vercel.app/news');

        cy.get('a[href="/player-odds"]').click();

        cy.url().should('include', '/player-odds');
    })

    it('should navigate to season stats', () => {
        cy.visit('https://oddball-nba-tracker.vercel.app/player-odds');

        cy.get('a[href="/season-stats"]').click();

        cy.url().should('include', '/season-stats');
    })
})