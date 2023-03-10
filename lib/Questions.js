// Questions to prompt in console

class Questions {
    constructor() {
        // questions about a manager
        this.managerQuestions = [
            {
                type: "input",
                name: "name",
                message: "Enter the manager's name:",
            },
            {
                type: "input",
                name: "id",
                message: "Enter the manager's employee ID:",
            },
            {
                type: "input",
                name: "email",
                message: "Enter the manager's email address:",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Enter the manager's office number:",
            },
        ];

        // question to ask the user what they want to do after creating manager profile
        this.selectNextChoice = [
            {
                type: "list",
                name: "choice",
                message: "What would you like to do next?",
                choices: ["Add an engineer", "Add an intern", "Finish building the team"]
            },
        ]

        // questions about an engineer
        this.engineerQuestions = [
            {
                type: "input",
                name: "name",
                message: "Enter the engineer's name:",
            },
            {
                type: "input",
                name: "id",
                message: "Enter the engineer's employee ID:",
            },
            {
                type: "input",
                name: "email",
                message: "Enter the engineer's email address:",
            },
            {
                type: "input",
                name: "github",
                message: "Enter the engineer's Github username:",
            },
        ]

        // questions about an intern
        this.internQuestions = [
            {
                type: "input",
                name: "name",
                message: "Enter the intern's name:",
            },
            {
                type: "input",
                name: "id",
                message: "Enter the intern's employee ID:",
            },
            {
                type: "input",
                name: "email",
                message: "Enter the intern's email address:",
            },
            {
                type: "input",
                name: "school",
                message: "Enter the name of the intern's school:",
            },
        ]
    }
}

module.exports = Questions