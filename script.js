"use strict";


const init = function () {
    const divs = document.querySelectorAll("div#output");
    const addInputs = document.querySelector("button#addInputs");
    const btn = document.querySelector("button#btn");
    let inputs = document.querySelectorAll("input#number");

    addInputs.addEventListener("click", function () {
        const input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("id", "number");
        input.setAttribute("placeholder", "Enter a number");
        input.setAttribute("min", "0");
        input.setAttribute("max", "36");
        document.querySelector("div.inputs").appendChild(input);    
    });

    btn.addEventListener("click", function () {
        inputs = document.querySelectorAll("input#number");
        const numbers = [];
        for (let i = 0; i < inputs.length; i++) {
            numbers.push(inputs[i].value);
        }
        let randomNumbers = [];
        for (let i = 0; i < divs.length; i++) {
            let randomNumber = Math.floor(Math.random() * 37);
            while (numbers.includes(randomNumber.toString()) || randomNumbers.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * 37);
            }
            randomNumbers.push(randomNumber);
            divs[i].innerHTML = randomNumber;
        }
    });
};

window.onload = init;