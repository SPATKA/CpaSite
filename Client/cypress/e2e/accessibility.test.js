describe("Accessibility tests", () => {
    beforeEach(() => {
        cy.visit("/").get("main")
        cy.injectAxe()
    })
    it.skip("Has no detectable accessibility violations on load", () => {
      cy.checkA11y()
    })
})