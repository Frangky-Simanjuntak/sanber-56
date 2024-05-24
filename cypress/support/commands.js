// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//LOGIN tugas8register.cy.js
Cypress.Commands.add("RegisterNewAccount", (userFirstName, userLastName, userEmail, userPassword) => {
  cy.get("#gender-male ").check().should("be.checked");
  cy.get("#gender-female ").should("not.be.checked");
  // Menggunakan command 'Auto Ketik' untuk membersihkan, mengetik, dan memasukkan nilai
  cy.AutoKetik("#FirstName", userFirstName);
  cy.AutoKetik("#LastName", userLastName);
  cy.AutoKetik("#Email", userEmail);
  cy.AutoKetik("#Password", userPassword);
  cy.AutoKetik("#ConfirmPassword", userPassword);

  // cy.get("#FirstName").clear().type(userFirstName);
  // cy.get("#LastName").clear().type(userLastName);
  // cy.get("#Email").clear().type(userEmail);
  // cy.get("#Password").clear().type(userPassword);
  // cy.get("#ConfirmPassword").clear().type(userPassword);

  cy.get("#register-button").click();
});

//auto Mengetik
Cypress.Commands.add("AutoKetik", (elemen, value) => {
  cy.get(elemen).should("be.visible").clear().type(value);
});

//Verify untuk melihat apakah pesan eror/berhasil muncul setelah click Button
Cypress.Commands.add("ResultVerify", (elemen, resultVerify) => {
  cy.get(elemen).should("contain.text", resultVerify);
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
