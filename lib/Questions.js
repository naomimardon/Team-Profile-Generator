// Questions to prompt in console

class Questions {
    constructor() {
        // questions about a manager
        this.managerQuestions = [
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
        ];

        // question to ask the user what they want to do after creating manager profile
        this.selectNextChoice = [
            {
                type: 'list',
                name: 'choice',
                message: 'What would you like to do next?',
                choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
            },
        ]

        // questions about an engineer
        this.engineerQuestions = [
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
        this.internQuestions = [
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
    }
}









module.exports = Questions