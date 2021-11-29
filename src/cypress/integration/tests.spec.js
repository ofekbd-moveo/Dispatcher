/// <reference types="cypress" />
import { mount } from "@cypress/react";
import { Provider } from "react-redux";

import store from "../../store/index";

import { DispatcherPage } from "../../Components/DispatcherPage/DispatcherPage";

// describe("Login form", () => {
//   it("opens Home page", () => {
//     cy.visit("localhost:3000"); //this is the server that was started earlier
//   });

//   it("navigate login Page", async () => {
//     cy.get("button").click();
//     // cy.location("pathname").should("include", "https://dev-l9al9smr.us.auth0.com/");
//     cy.get("input[name=username]").type("ofekbd@moveo.co.il").should("have.value", "ofekbd@moveo.co.il");
//     cy.get("input[name=password]").type(`zAQ1234EW{enter}`);
//     cy.url().should("include", "/dispatcher");
//   });
// });

describe("Dispatcher Page", async () => {
  await it("open Dispatcher Page", () => {
    mount(
      <Provider store={store}>
        <DispatcherPage />
      </Provider>
    );
  });

  it("renders 'top headline' title", () => {
    cy.contains("Top Headline");
  });
});
