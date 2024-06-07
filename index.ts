#! /usr/bin/env node


//user update
import inquirer from "inquirer";

//printing a wellcoming message
console.log("\n\tWellcome To \'CodeWithMaha\' -CLI Simple Calculator\n");

import Choices from "inquirer/lib/objects/choices.js";
//asking questions from users through inqurier

let answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "firstNumber"},
    {message: "Enter Second Number", type: "number", name: "secondNumber"},
    {
        message: "Select one Operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Multiplication", "Division", "Subtraction"],
    },
]);
console.log(answers);

//conditional statements If-Else
//if our user choose addition then
if(answers.operator === "Addition"){
console.log(answers.firstNumber + answers.secondNumber)
}
//if our user choose subtraction then
else if(answers.operator === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
    }
    //if our user choose division then
    else if(answers.operator === "Division"){
        console.log(answers.firstNumber / answers.secondNumber)
        }
        //if our user choose multiplication then
        else if(answers.operator === "Multiplication"){
            console.log(answers.firstNumber * answers.secondNumber)
            }
            //if non of these options
            else {
                console.log("Invalid Input")
            }