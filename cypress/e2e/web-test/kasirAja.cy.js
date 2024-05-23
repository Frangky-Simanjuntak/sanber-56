describe("template spec", () => {
  it("Failed Login - Wrong Credentials", () => {
    cy.clearCookies();
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/");
    cy.get("#email").type("teeeestestastas123@gmail.com");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass").type("salah");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span").click();
    cy.get(".message-error").should("contain.text", "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
    //setelah login kita bisa mengambil URL nya yang sekarang setelah LOGIN
    //cy.url -> getting crean URL, should() -> VERIFY URL nya apakah URL skrg ada dashboard nya
  });
  it.only("INVALID EMAIL", () => {
    cy.clearCookies();
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/");
    cy.get("#email").type("invlid-email");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass").type("Testes123");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span").click();
    cy.get("#email-error").should("contain.text", "Please include an '@' in the email address. 'invalid-email' is missing an '@'.");
    //setelah login kita bisa mengambil URL nya yang sekarang setelah LOGIN
    //cy.url -> getting crean URL, should() -> VERIFY URL nya apakah URL skrg ada dashboard nya
  });
  it("Succes Login - ", () => {
    cy.clearCookies();
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/");
    cy.get("#email").type("testestastas123@gmail.com");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass").type("Testes123");
    cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span").click();
    //setelah login kita bisa mengambil URL nya yang sekarang setelah LOGIN
    //cy.url -> getting crean URL, should() -> VERIFY URL nya apakah URL skrg ada dashboard nya
    cy.url().should("include", "dashboard");
  });
});
