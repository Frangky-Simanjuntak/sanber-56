describe("Test Register ", () => {
  it("Failed Refgister - The specified email already exists", () => {
    cy.clearCookies();
    cy.visit("https://demowebshop.tricentis.com/register");
    cy.get("#gender-male ").check().should("be.checked");
    cy.get("#gender-female ").should("not.be.checked");
    cy.get("#FirstName").type("testes");
    cy.get("#LastName").type("tastas");
    cy.get("#Email").type("testestastas123@gmail.com");
    cy.get("#Password").type("Testes123");
    cy.get("#ConfirmPassword").type("Testes123");
    cy.get("#register-button").click();
    cy.get(".validation-summary-errors > ul > li").should("contain.text", "The specified email already exists");
  });
  it("Failed Login - Wrong Credentials", () => {
    cy.clearCookies();
    cy.visit("https://demowebshop.tricentis.com/register");
    cy.get("#gender-male ").check().should("be.checked");
    cy.get("#gender-female ").should("not.be.checked");
    cy.get("#FirstName").type("testes");
    cy.get("#LastName").type("tastas");
    cy.get("#Email").type("testestastas123gmail.com");
    cy.get("#Password").type("Testes123");
    cy.get("#ConfirmPassword").type("Testes123");
    cy.get("#register-button").click();
    cy.get(".field-validation-error > span").should("contain.text", "Wrong email");
  });
  it("SUCCES REGISTER", () => {
    cy.clearCookies();
    cy.visit("https://demowebshop.tricentis.com/register");
    cy.get("#gender-male ").check().should("be.checked");
    cy.get("#gender-female ").should("not.be.checked");
    cy.get("#FirstName").type("tes");
    cy.get("#LastName").type("tas");
    cy.get("#Email").type("testas12assbb@gmail.com");
    cy.get("#Password").type("Testes123");
    cy.get("#ConfirmPassword").type("Testes123");
    cy.get("#register-button").click();
    cy.get(".result").should("contain.text", "Your registration completed");
    cy.get(".page-body > .buttons > .button-1").click();
    // Tunggu hingga halaman login berhasil dimuat
    cy.wait(() => {
      return Cypress.$(".dashboard").length > 0; // Menunggu hingga elemen .dashboard muncul
    });
    // BISA JUGA MEMAKAIN BE.VISIBLE AGAR TIDAK MENGGANGU PERFORMANCE
    // Memeriksa apakah tombol "Submit" terlihat di layar sebelum melanjutkan pengujian
    cy.get("#submit-button").should("be.visible");
    cy.url().should("include", "https://demowebshop.tricentis.com/");
  });
});
