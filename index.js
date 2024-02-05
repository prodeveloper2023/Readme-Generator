const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    message: "Please enter a short description about your project:",
    name: "About",
  },
  {
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "installation",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using app?",
  },
  {
    type: "input",
    name: "test",
    message: "What User should do to test the app?",
  },
  {
    type: "list",
    name: "license",
    message: "Please select the license you used for this project.",
    choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla", "MIT", "Apache", "Boost"],
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "userEmail",
    message: "What is your email?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
  console.log("newReadMe.md successfully created");
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);
      const fileName = "newReadMe.md";
      writeToFile(fileName, readmeContent);
    })
    .catch((error) => {
      console.error("Error occurred during the prompt:", error);
    });
}

// function call to initialize program
init();
