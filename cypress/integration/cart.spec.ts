describe("cart functionality", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should add product to cart", () => {
    cy.get("h1").contains("All Products");
    cy.contains("Add to Cart").first().click();
    cy.get(".cart-item").should("have.length", 1);
  });
  it("should remove product from cart", () => {
    cy.get("h1").contains("All Products");
    cy.contains("Add to Cart").first().click();
    cy.get(".cart-item").should("have.length", 1);
    cy.get(".cart-item").find(".remove-item").click();
    cy.get(".cart-item").should("have.length", 0);
  });
  it("should update product in cart", () => {
    cy.get("h1").contains("All Products");
    cy.contains("Add to Cart").first().click();
    cy.get(".cart-item").should("have.length", 1);
    cy.get(".qty_selector")
      .find(".counter-number")
      .invoke("text")
      .should("eq", "1");
    cy.get(".qty_selector").find(".counter-btn:last-of-type").click();
    cy.get(".qty_selector")
      .find(".counter-number")
      .invoke("text")
      .should("eq", "2");
    cy.get(".qty_selector").find(".counter-btn").first().click();
    cy.get(".qty_selector")
      .find(".counter-number")
      .invoke("text")
      .should("eq", "1");
  });
  it("should delete product from cart", () => {
    cy.get("h1").contains("All Products");
    cy.contains("Add to Cart").first().click();
    cy.get(".cart-item").should("have.length", 1);
    cy.get(".qty_selector")
      .find(".counter-number")
      .invoke("text")
      .should("eq", "1");
  
    cy.get(".qty_selector").find(".counter-btn").first().click();
    cy.get(".cart-item").should("have.length", 0);
  });
});
