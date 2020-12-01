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
  
## Installation
_To install necessary depenvies, you should run the following command:_
  > ${data.installation}

## Usage
${data.usage}

## Contributors
${data.contributing}

## Licence
${data.licence}

## Status
 The status of the porject at the moment is:
${data.status}

## Repository
- [Project Repo](${data.repo})

## Questios, Coments, Sugestions
If you have any questios about the repo, you can open an issue or contact directly to me at ${data.email}. Or at gitHub.

---
## GitHub
![Image of me](${githubInfo.githubImage})
- ${githubInfo.name}
- [GitHub Profile](${githubInfo.profile})
- <${githubInfo.email}>
`;
}

module.exports = generateMarkdown;
