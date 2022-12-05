// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  switch(license) {
    case "MIT":
      badge = "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;
    case "APACHE 2.0":
      badge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
      break;
    case "GPL 3.0":
      badge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
      break;
    case "BSD 3":
      badge = "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
      break;
    default:
      badge = "";
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  switch(license) {
    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;
    case "APACHE 2.0":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL 3.0":
      link = "https://opensource.org/licenses/GPL-3.0";
      break;
    case "BSD 3":
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    default:
      link = "";
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let text;
  if (license === "None") {
    text = "No license.";
  } else {
    text = `This project is licensed under the [${license} license.](${renderLicenseLink(license)})`;
  }
  return text;
}

// Return text for Questions section if user inputted their email address
function renderEmailText(email) {
  if (email !== "") {
    const text = `If you have any questions, please email me at [${email}](mailto:${email}).`;
    return text;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
[![License](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## Credits

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
You can visit me at my GitHub profile: [${data.username}](https://github.com/${data.username})

${renderEmailText(data.email)}`
}

module.exports = generateMarkdown;
