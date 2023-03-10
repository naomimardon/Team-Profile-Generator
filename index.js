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

class Team {
    constructor() {
        // empty array to push employee objects to and pass to render import
        this.finalTeam = [];
    }

    // initialize the program
    startBuild() {
        console.info("Welcome! Please start by entering the Manager information.");
        this.createManager();
    }

    // create a new manager
    createManager() {
        inquirer
            .prompt(managerQuestions)
            .then((managerData) => {
                // create a manager object
                const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
                // push manager orbject to final team array
                this.finalTeam.push(manager);
                this.promptUserNextStep()
            })
            .catch(err => {
                console.info("Error!!", err);
            })
    }

    promptUserNextStep() {
        // ask whether to create an engineer, intern or build the team
        return inquirer
            .prompt(selectNextChoice)
            .then(userSelection => {
                // switch statement prompts a set of question or writes the html file depending on choice made
                switch (userSelection.choice) {
                    case "Add an engineer":
                        // prompts a set of questions for an engineer
                        this.createEngineer();
                        break;
                    case "Add an intern":
                        // prompts a set of questions for an intern
                        this.createIntern();
                        break;
                    default:
                        // writes html file when the user finishes building their team
                        // passes final team to the render import
                        this.writeToFile(outputPath, render(this.finalTeam));
                        break;
                }
            })
            .catch(err => {
                console.info("Error!!", err);
            })
    }

    // function to create an engineer
    createEngineer() {
        inquirer.prompt(engineerQuestions)
            .then(engineerData => {
                // create your engineer
                const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
                this.finalTeam.push(engineer);
                this.promptUserNextStep();
            })
    }

    // function to create intern
    createIntern() {
        inquirer.prompt(internQuestions)
            .then(internData => {
                // create your engineer
                const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
                this.finalTeam.push(intern);
                this.promptUserNextStep();
            })
    }

    // function to write HTML file
    writeToFile(filePath, team) {
        fs.writeFile(filePath, team, (err) =>
            err ? console.info(err) : console.info("Thank you for answering the questions. Your webpage is ready to view!")
        );
    }

}

// Initialize a new Team object
const team = new Team();

// Build the team
team.startBuild();