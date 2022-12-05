// Returns a license badge with link based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else {
    let badge;
    if (license === "MIT") {
      badge = "https://img.shields.io/badge/License-MIT-yellow.svg";
    } else if (license === "APACHE 2.0") {
      badge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
    } else if (license === "GPL 3.0") {
      badge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
    } else if (license === "BSD 3") {
      badge = "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
    }
    return `[![License](${badge})](${renderLicenseLink(license)})`;
  }
}

// Returns the license link
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
    // if license === "None"
    default:
      link = "";
      break;
  }
  return link;
}

// Returns the license section of README
// If there is no license, return "None"
function renderLicenseSection(license) {
  let text;
  if (license === "None") {
    text = "None.";
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

function renderInstallationSection(data) {
  if (data.installation === "y") {
    return `To install necessary dependencies, run the following command:
\`\`\`
${data.installationCommand}
\`\`\``;
  } else {
    return "N/A";
  }
}

function renderTestsSection(data) {
  if (data.tests === "y") {
    return `To run tests, run the following command:
\`\`\`
${data.testCommand}
\`\`\``;
  } else {
    return "N/A";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
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
${renderInstallationSection(data)}

## Usage
${data.usage}

## Credits

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contribution}

## Tests
${renderTestsSection(data)}

## Questions
You can visit me at my GitHub profile: [${data.username}](https://github.com/${data.username})

${renderEmailText(data.email)}`
}

module.exports = generateMarkdown;
