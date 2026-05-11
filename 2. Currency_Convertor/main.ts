#! /usr/bin/env node
import inquirer from "inquirer";

const currency:any= {
USD:1,
Eur:0.90,
JPY:115,
PKR:278,
INR:75,
GBP:0.75,
CAD:1.30,
CHF:0.95,
AUD:1.30,
CNY:6.60,
}

let userInput = await inquirer.prompt([
    {
       name:"From",
       type:"list",
       message:"Enter the currency you want to be converted!",
choices: ['USD','Eur','JPY','PKR','INR','GBP','CAD','CHF','AUD', 'CNY']
},
{
 name:"To",
 type:"list",
 message:"Enter the currency you want to converted in!",
 choices:['USD','Eur','JPY','PKR','INR','GBP','CAD','CHF','AUD', 'CNY']
},
{
 name:"amount",
 type:"input",
 message:"Enter the amount!"
}

]
)
let fromAmount = currency[userInput.From]
let toAmount = currency[userInput.To]
let amount = userInput.amount
let baseAmount = amount/fromAmount
let convertedAmount = baseAmount * amount
console.log(convertedAmount);