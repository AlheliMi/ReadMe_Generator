const inquirer = require("inquirer");
const fs = require('fs');
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
        message: "Provide the installation instructions for the development of your app"
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
        type: "list",
        name: "licence",
        message: "Do yo want to include a license?",
        choices: ["MIT", "APACHE 2.0", "GPL v3, BSD 3", "None"]
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

inquirer.prompt(questions).then(function(data){
/*         const queryUrl = `https://api.github.com/users/${data.username}` */;
          fs.writeFile("README.md", generate(data), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("New README file is now created with Success!");
          });
        });


function init() {

}

init();

/* 
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
        console.log("SUCCESS your README file is now created!");
    } catch(err) {
        console.log(err);
    }
};

init(); */
// function to write README file
/* function writeToFile(fileName, data) {
} */
