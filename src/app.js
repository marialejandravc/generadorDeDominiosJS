/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateDomains() {
    let pronoun = ["my", "your"];
    let adj = ["amazing", "huge"];
    let noun = ["cat", "dog"];
    let extensions = [".com", ".net", ".us", ".io"];
    let hacks = { es: "walk", it: "eat", in: "write" };

    let resultsDiv = document.getElementById("domainResults");
    resultsDiv.innerHTML = "";

    // Generar dominios normales
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < extensions.length; l++) {
            let domain = `${pronoun[i]}${adj[j]}${noun[k]}${extensions[l]}`;
            resultsDiv.innerHTML += `<p>${domain}</p>`;
          }
        }
      }
    }

    // Generar "domain hacks"
    for (let ext in hacks) {
      for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
          let domain = `${pronoun[i]}${adj[j]}${hacks[ext]}.${ext}`;
          resultsDiv.innerHTML += `<p>${domain}</p>`;
        }
      }
    }
  }
  console.log("Hello Rigo from the console!");
  window.generateDomains = generateDomains;
};
