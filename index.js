// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
     {
        type: 'input',
        name: 'title',
        message: 'What is your name?',
     },
     {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis'],
      },

];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("./utils/README.md", data, (err) =>
    err ? console.log(err) : console.log('Success!')
)}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    // .then(function(data))
    .then((data) => {
        // console.log(data);
        const template = generateMarkdown(data)
        console.log(template);
        writeToFile(template)

    }) 
}

// Function call to initialize app
init();
