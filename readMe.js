const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./generateMarkdown')


const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please submit your project's description here.",
    },
    {
        type: "input",
        name: "contents",
        message: "Please list your table of contents here.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please type the installation instructions.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please type the project usage.",
    },
    {
        type: "input",
        name: "license",
        message: "Please type the project license.",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please type the contributing parties.",
    },
    {
        type: "input",
        name: "tests",
        message: "What tests did you perform for your project?",
    },
    {
        type: "input",
        name: "userName",
        message: "What is your github username?",
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?",
    }
]

inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios.get(queryUrl).then(function(res) {
            
            const githubInfo = {
                githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
            };
            
          fs.writeFile("README.md", generate(data, githubInfo), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("New README file created with success!");
          });
        });

});

function init() {

}

init();

let inquirer = require("inquirer");
let fs = require("fs");
let generateMarkdown = require("./utils/generateMarkdown.js");

function promptUserInfo(){
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What's your Github user?"
        },
        {
            type: "input",
            name: "description",
            message: "What's your project about?"
        },
        {
            type: "input",
            name: "title",
            message: "What's your project's name?"
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project"
        },
        {
            type: "input",
            name: "installation",
            message: "Share some steps to install your project"
        },
        {
            type: "input",
            name: "usage",
            message: "How can we use your app?"
        },
        {
            type: "input",
            name: "credits",
            message: "List your contributors to give some credit"
        },
        {
            type: "list",
            name: "licence",
            message: "Include a license",
            choices: ["MIT", "APACHE 2.0", "GPL v3, BSD 3", "None"]
        },
        {
            type: "input",
            name: "testing",
            message: "How can a user run a test?"
        },

    ]);
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function(err){
        if(err) {
            throw err;
        }
        console.log("Now you have a README file :)")
    })
}

async function init() {
    try {
        const userAnswers = await promptUserInfo();
        generateMarkdown(userAnswers);
        writeToFile("README.md", generateMarkdown(userAnswers));
        console.log("SUCCESS!");
    } catch(err) {
        console.log(err);
    }
};

init();