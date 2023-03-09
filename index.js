const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// questions about a manager
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter your name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter your employee ID:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter your office number:',
    },
]

// question to ask the user what they want to do after creating manager profile
const selectNextChoice = [
    {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do next?',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
    },
]

// questions about an engineer
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter your name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter your employee ID:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username:',
    },
]

// questions about an intern
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter your name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter your employee ID:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter the name of your school:',
    },
]

// function to create a manager
function createManager() {
    inquirer
        .prompt(managerQuestions)
        .then((managerData) => {
            // create a manager
            const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
        })
        .catch(err => {
            console.log('Error!!', err);
        })
};

// function to initialize program
function init() {
    createManager();
};

init();