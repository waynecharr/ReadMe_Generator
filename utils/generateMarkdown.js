
// If the license is blank than it returns nothing, but if if one of the other options is chosen than the license shield is provided. 
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Mozilla Public License (MPL)':
      return '[![License: MPL](https://img.shields.io/badge/License-MPL-blue.svg)](https://opensource.org/licenses/MPL-2.0)';
    default:
      return '';
  }
}

// This function takes the choices from the License and provides a corresponding license link.
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'Mozilla Public License (MPL)':
      return 'https://opensource.org/licenses/MPL-2.0';
    default:
      return '';
  }
}

// combines the previous two functions and creates the license text which is used to propagate the License section of the generateMarkdown function.
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const licenseText = `- License provided is ${license}. ${renderLicenseBadge(license)}\n - License link: [${license}](${renderLicenseLink(license)})`;

  return licenseText;
}

// This function takes the data from the inquirer prompts and generates the ReadMe file.
// I can't seem to comment within the function here, but the renderLicenseBadge and renderLicense section are both ran within this function.
// const license is pulled at the start of the function to provide data to the two render functions.
function generateMarkdown(data) {
  // console.log(data);
  const license = data.license;
  return `# ${data.title}

  ${renderLicenseBadge(license)}

  ## Description:

  ${data.description} 

  ## Tables of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Installation

  ${data.installation_instructions}

  ## Usage 

  ${data.usage_information}

  ## Contributing

  - Users: ${data.contributer}
  - References: ${data.link_reference}

  ## Tests

  ${data.test_instructions}

  ## Questions

  For more information or questions about this application, please see the following: 

  - Github: https://github.com/${data.github}
  - Email: ${data.email}

  ## License

  ${renderLicenseSection(license)}

`;
}

module.exports = generateMarkdown;
