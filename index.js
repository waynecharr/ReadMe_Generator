//Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//This connects the two documents. 
const generateMarkdown = require("./utils/generateMarkdown.js")

//The question array is a series of questions for user input. 
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
        name: 'test_instructions',
        message: 'Please provide a detailed explanation of how to test your application.',
     },
     {
        type: 'input',
        name: 'contributer',
        message: 'List any collaborators or contributors to your application.',
     },
     //I added an addition link_reference for common link references, and to seperate the links and contributors. 
     {
        type: 'input',
        name: 'link_reference',
        message: 'Please include any links that helped you with you with your application',
     },
     // This code is slightly different than the others in that it pulls a list of choices. I found three common licenses for my example.
     {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'Mozilla Public License (MPL)'],
      },

];

//This function creates the ReadMe File and appends it to .utils folder. When the the file prompts are completed a Success! appears.
function writeToFile(data) {
    fs.writeFile("./utils/README.md", data, (err) =>
    err ? console.log(err) : console.log('Success!')
)}

// This function initializes the inquirer prompts that run when the user prompts "node index.js"
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
