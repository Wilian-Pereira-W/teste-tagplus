describe("Realizando uma compra", () => {
  it('Validar a mensagem "Thank you for your order!"', () => {
    cy.visit("https://www.saucedemo.com/");
    const username = "standard_user";
    const password = "secret_sauce";
    const firstName = "teste";
    const lastName = "teste";
    const postalCode = "12960000";

    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();

    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get("#add-to-cart-sauce-labs-backpack").click();

    cy.get(".shopping_cart_link").click();

    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="finish"]').click();

    cy.get(".complete-header").should("be.visible");
    cy.contains("Thank you for your order!").should("be.visible");
  });
});
