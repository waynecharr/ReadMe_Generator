// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
     {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
     },
     {
        type: 'input',
        name: 'github',
        message: 'What is your github user name?',
     },
     {
        type: 'input',
        name: 'email',
        message: 'Please enter an email for further communication:',
     },
     {
        type: 'input',
        name: 'description',
        message: 'Describe the project you are working/have worked on.',
     },
     {
        type: 'input',
        name: 'installation_instructions',
        message: 'Describe how the end user will install the program.',
     },
     {
        type: 'input',
        name: 'usage_information',
        message: 'Describe instructions and examples for use.',
     },
     {
        type: 'input',
        name: 'contributer',
        message: 'List any collaborators or contributors to your application.',
     },
     {
        type: 'input',
        name: 'link_reference',
        message: 'Please include any links that helped you with you with your application',
     },
     {
        type: 'input',
        name: 'test_instructions',
        message: 'Please provide a detailed explanation of how to test your application.',
     },
     {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'Mozilla Public License (MPL)'],
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
