"use strict";

//import jsonApi from "./json_data_api/currency.json" assert {type: "json"};

// API BANK - https://api.monobank.ua/bank/currency

let valueOfChooseCurrency = null;
let valueOfQuantity = null;

const defaultButton = document.getElementById("reset-btn");
// Data from first inputs

const currencySelectOne = document.querySelector("#currency-select-one");
const currencyValueOne = document.querySelector("#currency-one-value");

// Data from second inputs

const currencyValueTwo = document.querySelector("#currency-two-value");
const currencySelectTwo = document.querySelector("#currency-select-two");

const urlBankApi = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

fetch(urlBankApi)

.then((resp) =>  resp.json())

.then(function(data) {

    let currencies = Object.entries(data);
    for (const key in currencies) {
        let obj = currencies[key][1];
    
        let currencyNameText = Object.values(obj)[1];
        let currencyNameCode = Object.values(obj)[3];
        valueOfChooseCurrency = Object.values(obj)[2];
        let option = createNode("option");
        option.innerHTML = `${currencyNameText}`;
        append(currencySelectOne, option);
    }
    
})

.catch(function(error) {
    console.log(error);
});
/*
setTimeout(() => {
    let valueOfFirstInput = currencySelectOne.options[currencySelectOne.selectedIndex].value;
    console.log(valueOfFirstInput);

}, 5000)
*/

const calculate = (resultOfChooseCurrencyOne, ) => {

}

let valueOfFirstInput = currencySelectOne.options[currencySelectOne.selectedIndex].value;

currencySelectOne.addEventListener("input", () => {
    let rate = null;
    let resultOfChooseCurrencyOne = event.target.value;


    fetch(urlBankApi)

    .then((resp) =>  resp.json())

    .then(function(data) {

    let currencies = Object.entries(data);
    for (const key in currencies) {
        let obj = currencies[key][1];
        let currencyNameText = Object.values(obj)[1];
        if(currencyNameText === resultOfChooseCurrencyOne) {
            rate = "rate";
            console.log(obj[rate]);
            valueOfQuantity = currencyValueOne.value;
            console.log(valueOfQuantity);
            currencyValueTwo.value = (valueOfQuantity * obj[rate]).toFixed(2);
        }
    }
    
})

.catch(function(error) {
    console.log(error);
});
    
    
})

currencyValueOne.addEventListener("input", () => {

    if(currencySelectOne.value === "Choose currency") {
        valueOfQuantity = currencyValueOne.value;
        currencyValueTwo.value = valueOfQuantity;
    } else {

        let rate = null;
        let resultOfChooseCurrencyOne = currencySelectOne.value;
    
        fetch(urlBankApi)
    
        .then((resp) => resp.json())
    
        .then(function(data) {
            let currencies = Object.entries(data);
            for (const key in currencies) {
                let obj = currencies[key][1];
                let currencyNameText = Object.values(obj)[1];
                if(currencyNameText === resultOfChooseCurrencyOne) {
                    rate = "rate";
                    valueOfQuantity = currencyValueOne.value;
                    currencyValueTwo.value = (valueOfQuantity * obj[rate]).toFixed(2);
                }
            }
        })

    }

})

defaultButton.addEventListener("click", () => {
    window.location.reload();
})


