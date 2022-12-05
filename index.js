// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
        validate: (input) => {
            // If user inputted no text
            if (input.trim().length === 0) {
                return "Must include text. Re-enter username.";
            // If input includes spaces between text
            } else if (input.trim().includes(" ")) {
                return "GitHub username cannot include spaces. Re-enter username.";
            } else {
                return true;
            }
        },
        // Return the input without extra spaces to be used in rest of program 
        filter: (input) => input.trim()
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        filter: (input) => input.trim()
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "title",
        validate: (input) => {
            // If user inputted no text
            if (input.trim().length === 0) {
                return "Must include project name.";
            } else {
                return true;
            }
        },
        filter: (input) => input.trim()
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description",
        validate: (input) => {
            // If user inputted no text
            if (input.trim().length === 0) {
                return "Must include project description.";
            } else {
                return true;
            }
        },
        filter: (input) => input.trim()
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        message: "Is there a command that should be run to install dependencies? (y/n)",
        name: "installation",
        // Ensure that user types either 'y' or 'n' for confirmation
        validate: (input) => {
            if (input.trim().toLowerCase() === "y" || input.trim().toLowerCase() === "n") {
                return true;
            } else {
                return "Invalid. Must type either 'y' or 'n'.";
            }
        },
        filter: (input) => input.trim().toLowerCase()
    },
    {
        type: "input",
        message: "What is the command to install dependencies?",
        name: "installationCommand",
        // Only ask this question when user answers 'y' to previous question
        when: (answers) => answers.installation === "y"
    },
    {
        type: "input",
        message: "Is there a command to run tests? (y/n)",
        name: "tests",
        validate: (input) => {
            if (input.trim().toLowerCase() === "y" || input.trim().toLowerCase() === "n") {
                return true;
            } else {
                return "Invalid. Must type either 'y' or 'n'.";
            }
        },
        filter: (input) => input.trim().toLowerCase()
    },
    {
        type: "input",
        message: "What is the command to run tests?",
        name: "testCommand",
        when: (answers) => answers.tests === "y"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage",
        filter: (input) => input.trim()
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribution",
        filter: (input) => input.trim()
    }
];

// Write answers to README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => 
        err ? console.error(err) : console.log("README.md created!")
    );
}

// Initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            writeToFile("README.md", data);
        });
}

// Function call to initialize app
init();
