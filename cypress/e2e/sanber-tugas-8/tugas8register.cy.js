import loginPage from '../../support/pageObject/registerLoginDemoWebshop'
describe("Test Register ", () => {
  function randomEmail() {
    const randomString = Math.random().toString(36).substring(2, 10);
    const email = "user" + randomString; //+ "@gmail.com";
    return email;
  }
  let userEmail = randomEmail();
  it("Failed Refgister - The specified email already exists", () => {
    cy.clearAllCookies();
    cy.visit("https://demowebshop.tricentis.com/register");
    //FUNCTION LOGIN DI FILE COMMAND.js
    cy.RegisterNewAccount("testes", "tastas", "testestastas123@gmail.com", "Testes123", "Testes123");
    //cy.get(".validation-summary-errors > ul > li").should("contain.text", "The specified email already exists");
    cy.ResultVerify(".validation-summary-errors > ul > li", "The specified email already exists");
  });
  it("Failed Login - Wrong Credentials", () => {
    cy.clearCookies();
    cy.visit("https://demowebshop.tricentis.com/register");
    cy.get("#gender-male ").check().should("be.checked");
    // cy.get("#gender-female ").should("not.be.checked");
    // cy.get("#FirstName").type("testes");
    // cy.get("#LastName").type("tastas");
    // cy.get("#Email").type("testestastas123gmail.com");
    // cy.get("#Password").type("Testes123");
    // cy.get("#ConfirmPassword").type("Testes123");
    // cy.get("#register-button").click();
    cy.RegisterNewAccount("testes", "tastas", userEmail, "Testes123", "Testes123");
    //cy.get(".field-validation-error > span").should("contain.text", "Wrong email");
    cy.ResultVerify(".field-validation-error > span", "Wrong email");
  });
  it("SUCCES REGISTER", () => {
    cy.clearCookies();
    cy.visit("https://demowebshop.tricentis.com/register");
    //FUNCTION LOGIN DI FILE COMMAND.js
    cy.RegisterNewAccount("testes", "tastas", userEmail, "Testes123", "Testes123");
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
  it.only("Failed Refgister - Test Page Object Model, tidka menggunakan commands AutoKetik,RegisterNewAccount", () => {
    cy.clearAllCookies();
    cy.visit("https://demowebshop.tricentis.com/register");
    //FUNCTION LOGIN DI FILE COMMAND.js
    cy.get("#gender-female ").should("not.be.checked");
    cy.get(loginPage.fillFirstName).type("testes");
    cy.get("#LastName").type("tastas");
    cy.get("#Email").type("testestastas123gmail.com");
    cy.get("#Password").type("Testes123");
    cy.get("#ConfirmPassword").type("Testes123");
    cy.get("#register-button").click();
    //cy.RegisterNewAccount("testes", "tastas", "testestastas123@gmail.com", "Testes123", "Testes123");
    //cy.get(".validation-summary-errors > ul > li").should("contain.text", "The specified email already exists");
    cy.ResultVerify(".validation-summary-errors > ul > li", "The specified email already exists");
  });
});

