describe("cypress", () => {
  it("works", async () => {
    expect(true).to.equal(true);
  });
  it("visits the app", () => {
    cy.visit("/");
  });
});
