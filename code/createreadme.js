
function yesLicense(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
}


function noLicense(license) {
  if (license !== 'None') {
    return `\n- License\n`;
  }
  return '';
}


function provideLicense(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}


function readMe(data) {
  return `# ${data.title}
${yesLicense(data.license)}

 ## Description

${data.description}

 ## Table of Contents 

- Installation

- Usage
${noLicense(data.license)}
- Contributing

- Tests

- Questions

## Installation

For installation run:
${data.installation}


## Usage

${data.usage}

${provideLicense(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests run:


${data.test}


## Questions
For questions regaurding this repo please reach out to  ${
    data.email
  }${data.github}(https://github.com/${
    data.github
  }/).

`;
}

module.exports = readMe;
