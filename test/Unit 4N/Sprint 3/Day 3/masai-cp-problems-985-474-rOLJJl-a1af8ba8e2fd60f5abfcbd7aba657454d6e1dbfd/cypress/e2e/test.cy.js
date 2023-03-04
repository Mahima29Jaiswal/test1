import data from "../../submissionData.json"; // do not create this file
// let subdata = [{ submission_link: "http://localhost:8080/", id: 67890 }];
import "cypress-localstorage-commands";

// import { start, submitData } from "../../../data";
describe("Test", function () {
  let acc_score = 1;
  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      beforeEach(() => {
        cy.restoreLocalStorage();
      });
      afterEach(() => {
        cy.saveLocalStorage();
      });

      it(`Add Functionality Check`, () => {
        cy.visit(url);
        cy.get("#number1").clear().type(4);
        cy.get("#number2").clear().type(2);
        cy.get("#add").click();
        cy.on("window:alert", (str) => {
          expect(str).to.eq(6);
          acc_score += 1;
        });
      }); // 1

      it(`Substract Functionality Check`, () => {
        cy.visit(url);
        cy.get("#number1").clear().type(4);
        cy.get("#number2").clear().type(2);
        cy.get("#substract").click();
        cy.on("window:alert", (str) => {
          expect(str).to.eq(2);
          acc_score += 1;
        });
      }); // 1

      it(`Multiply Functionality Check`, () => {
        cy.visit(url);
        cy.get("#number1").clear().type(4);
        cy.get("#number2").clear().type(2);
        cy.get("#multiply").click();
        cy.on("window:alert", (str) => {
          expect(str).to.eq(8);
          acc_score += 1;
        });
      }); // 1

      it(`Devide Functionality Check`, () => {
        cy.visit(url);
        cy.get("#number1").clear().type(4);
        cy.get("#number2").clear().type(2);
        cy.get("#devide").click();
        cy.on("window:alert", (str) => {
          expect(str).to.eq(2);
          acc_score += 1;
        });
      }); // 1
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
