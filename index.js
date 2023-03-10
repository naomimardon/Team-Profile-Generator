const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Questions = require("./lib/Questions");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const questions = new Questions();

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
            .prompt(questions.managerQuestions)
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
            .prompt(questions.selectNextChoice)
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
        inquirer.prompt(questions.engineerQuestions)
            .then(engineerData => {
                // create your engineer
                const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
                this.finalTeam.push(engineer);
                this.promptUserNextStep();
            })
    }

    // function to create intern
    createIntern() {
        inquirer.prompt(questions.internQuestions)
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