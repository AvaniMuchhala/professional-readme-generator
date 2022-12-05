// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
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
        message: "What command should be run to install dependencies?",
        name: "installation"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribution"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => 
        err ? console.error(err) : console.log("README.md created!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            console.log(data);
            writeToFile("README.md", data);
        });
}

// Function call to initialize app
init();
