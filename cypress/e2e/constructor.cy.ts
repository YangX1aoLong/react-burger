describe("template spec", () => {
  it("should drag and drop", () => {
    cy.visit("http://localhost:3000");
    const dataTransfer = new DataTransfer();
    cy.get("[href='/ingredients/643d69a5c3f7b9001cfa093c']").trigger(
      "dragstart",
      { dataTransfer }
    );
    cy.get("[id='dropBox']").trigger("drop", {
      dataTransfer,
    });
    cy.get("[href='/ingredients/643d69a5c3f7b9001cfa0942']").trigger(
      "dragstart",
      { dataTransfer }
    );
    cy.get("[id='dropBox']").trigger("drop", {
      dataTransfer,
    });
    cy.get("[href='/ingredients/643d69a5c3f7b9001cfa0941']").trigger(
      "dragstart",
      { dataTransfer }
    );
    cy.get("[id='dropBox']").trigger("drop", {
      dataTransfer,
    });
  });

  it("should modal open and close", () => {
    cy.visit("http://localhost:3000");
    cy.get("[href='/ingredients/643d69a5c3f7b9001cfa093c']").click();
    cy.get("[id='root']").click(1, 1);
  });

  it("should dnd => login => create order", () => {
    cy.visit("http://localhost:3000");
    const dataTransfer = new DataTransfer();
    cy.get("[href='/ingredients/643d69a5c3f7b9001cfa093c']").trigger(
      "dragstart",
      { dataTransfer }
    );
    cy.get("[id='dropBox']").trigger("drop", {
      dataTransfer,
    });
    cy.get("[href='/ingredients/643d69a5c3f7b9001cfa0942']").trigger(
      "dragstart",
      { dataTransfer }
    );
    cy.get("[id='dropBox']").trigger("drop", {
      dataTransfer,
    });
    cy.get("[href='/ingredients/643d69a5c3f7b9001cfa0941']").trigger(
      "dragstart",
      { dataTransfer }
    );
    cy.get("[id='dropBox']").trigger("drop", {
      dataTransfer,
    });
    cy.get("[id='orderButton']").click();
    cy.get("[id='emailInput']").type("test0123@test.ru");
    cy.get("[id='passwordInput']").type("test");
    cy.get("[id='loginButton']").click();
     cy.get("[id='orderButton']").click();
  });
});
