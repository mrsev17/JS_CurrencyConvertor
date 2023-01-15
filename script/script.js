"use strict";

import jsonApi from "./json_data_api/currency.json" assert {type: "json"};

// API BANK - https://api.monobank.ua/bank/currency

// Data from first inputs

const currencySelectOne = document.querySelector("#currency-select-one");
const currencyValueOne = document.querySelector("#currency-one-value");

// Data from second inputs

const currencyValueTwo = document.querySelector("#currency-two-value");
const currencySelectTwo = document.querySelector("#currency-select-two");

const urlBankApi = "https://api.monobank.ua/bank/currency";


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

fetch(urlBankApi)

.then((resp) =>  resp.json())

.then(function(data) {
    /*
    let authors = data.results;
    return authors.map(function(author) {
        let li = createNode("li");
        let img = createNode("img");
        let span = createNode("span");

        img.src = author.picture.medium;
        span.innerHTML = `${author.name.first} ${author.name.last}`;

        append(li, img);
        append(li, span);
        append(ul, li);
    })
    */
    
})

.catch(function(error) {
    console.log(error);
});

