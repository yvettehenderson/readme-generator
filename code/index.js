
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const createreadme  = require('./createreadme');


const questions = [
    {
      type: 'input',
      name: 'github',
      message: 'GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email address?',
    },
    {
      type: 'input',
      name: 'title',
      message:'Project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project discription?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Project licence?',
      choices: [ 'None','Apache License 2.0','GNU GPLv3','NPM','ISC'],
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What should be installed to run?',
      default: 'npm i',
    },
    {
      type: 'input',
      name: 'test',
      message: 'How does one run a test',
      default: 'npm test',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Does the user need any additional information for usage?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Does the user need any additional information for  contribution',
    },
  ];
  



function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

function run() {
    inquirer.prompt(questions).then((inquirerResponses) => {
     
      writeToFile('README.md', createreadme({ ...inquirerResponses }));
    });
  }


run();
