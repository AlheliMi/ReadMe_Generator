// function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**
***

## Description 
${data.description}


## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [How it looks](#Visuals)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 

${data.badge}

## Visuals
  ![${data.title}](${data.visuals})
  
## Installation e Instructions
_To install necessary dependencies, you should run the following command:_
  > ${data.installation}

## Usage
${data.usage}

## Contributors
${data.contributing}

## Licence
${data.licence}

## Status
 The status of the porject at the moment:
${data.status}

---

## Repository
- [Project Repo](${data.repo})

## Questios, Coments, Sugestions
If you have any questios about the repo, you can open an issue or contact directly to me at ${data.email}. Or at gitHub ${data.username}.


`;
}

module.exports = generateMarkdown;