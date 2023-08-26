const inquirer = require('inquirer');
const fs = require('fs');

const HTMLTemplate = (response) => {
  const badge = `https://img.shields.io/badge/License-${(response.license)}-blue.svg`;

  let LicenseInfo = '';
  switch (response.license) {
    case 'MIT':
      LicenseInfo = 'This application is covered under the MIT License.';
      break;
    case 'Eclipse Public License 1.0':
      LicenseInfo = 'This application is covered under the Eclipse Public License 1.0.';
      break;
    case 'Mozilla Public License 2.0':
      LicenseInfo = 'This application is covered under the Mozilla Public License 2.0.';
      break;
    case 'GNU General Public License 3.0':
      LicenseInfo = 'This application is covered under the GNU General Public License 3.0.';
      break;
    default:
      LicenseInfo = 'This application is covered under an unspecified license.';
  }

  return `
  # ${response.title} <img alt='License' src='${badge}'>
  ### Table of Contents
  [Description](#description)
  <br>
  [Installation](#installation)
  <br>
  [Usage](#usage)
  <br>
  [License](#license)
  <br>
  [Contributions](#contributions)
  <br>
  [Test](#test)
  <br>
  [Questions](#questions)
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  ## Description
  ${response.description}

  ## Installation
  ${response.installation}

  ## Usage
  ${response.usage}
  ## License
  <img alt='License' src='${badge}'>
  <br>
  ${LicenseInfo} 

  ## Contributions
  ${response.contributions}

  ## Test
  ${response.tests}

  ## Questions
  ${response.questions}

  Contact: [GitHub](https://github.com/${response.github}) | Email: ${response.email}
  `;
};

  inquirer
  .prompt([
    { 
      type: "input",
      message: "Project title:",
      name: "title",  
         },
    { 
      type: "input",
      message: "Project description:",
      name: "description",  
         },
    {
       type: "input",
       message: "Installation instructions:",
       name: "installation",
    },
    {
        type: "input",
        message: "Describe application use:",
        name: "usage",
    },
    {
        type: "list",
        message: "What License did you use for this repository?",
        choices: ["MIT", "Eclipse Public License 1.0", "Mozilla Public License 2.0", "GNU General Public License 3.0"],
        name: "license",
    },
    {
        type: "input",
        message: "How can people contribute to your project?",
        name: "contributions",
    },
   {
        type: "input",
        message: "How do people update the tests for your project?",
        name: "tests"
    },
    {
        type: "input",
        message: "Please ask any questions:",
        name: "questions"
    },
    {
      type: "input",
      message: "Enter GitHub username:",
      name: "github"
    },
    {
      type: "input",
      message: "Enter email address:",
      name: "email"
  },
  ])
  .then((response) => {
    const htmlContent = HTMLTemplate(response);

    fs.writeFile('readme.md', htmlContent, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success!');
        }
    });
});


