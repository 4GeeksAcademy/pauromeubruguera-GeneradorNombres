/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".net", ".us", ".io"];
let insertText = "<ul class='list-group'>";

window.onload = function() {
  //write your code here
  pronoun.map(item => {
    adj.map(item2 => {
      noun.map(item3 => {
        domain.map(item4 => {
          insertText += `
          <li class='list-group-item'>
          ${item}${item2}${item3}${item4}
          </li>
          `;
        });
      });
    });
  });

  insertText += "</ul>";
  document.querySelector("#insert").innerHTML = insertText;
};
