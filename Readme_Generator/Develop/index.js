const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./utils/generateMarkdown');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project´s Name?"
    },
    {
        type: "input",
        name: "description",
        message: "Can you Please provide your project's description, including Fearures if yo have or want?"
    },
    {
        type: "input",
        name: "badge",
        message: "Do you have a badges links? Please provide them if that you want"
    },
    {
        type: "input",
        name: "visuals",
        message: "Do you have images links? Please provide them if that you want"
    },
    {
        type: "input",
        name: "installation",
        message: "Provide the installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide the project usage"
    },
    {
        type: "input",
        name: "contributing",
        message: "Do your Project have the contributing parties?"
    },
    {
        type: "input",
        name: "licence",
        message: "Do you have a licence or your badge link? Please provide "
    },
    {
        type: "input",
        name: "status",
        message: "What is your Project Status?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },   
];

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
    
            console.log("New README file now created with success!");
          });
        });

});

function init() {

}

init();

// function to write README file
/* function writeToFile(fileName, data) {
} */
