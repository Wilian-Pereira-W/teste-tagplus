describe("Teste requisição", () => {
  it("Get", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users",
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("Delete", () => {
    const authorization = `bearer 640112a389638f4ef5decd694fb59e4a0e0e1c3f7f2bdf91129976090fcf566f`;
    const options = {
      method: "DELETE",
      url: "https://gorest.co.in/public/v2/users/2139214",
      headers: {
        authorization,
      },
    };

    cy.request(options).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
