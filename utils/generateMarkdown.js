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


function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const licenseText = `- License provided is ${license}. ${renderLicenseBadge(license)}\n - License link: [${license}](${renderLicenseLink(license)})`;

  return licenseText;
}



function generateMarkdown(data) {
  // console.log(data);
  const license = data.license;
  return `# ${data.title}

  ## Description:

  ${data.description}

  ## Tables of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation_instructions}

  ## Usage 

  ${data.usage_information}

  ## Contributing

  - Users: ${data.contribution_guidelines}
  - References: 

  ## Tests

  ${data.test_instructions}

  ## Questions

  For more information about this application, please see the following: 

  - Github: https://github.com/${data.github}
  - Email: ${data.email}

  ## License

  ${renderLicenseSection(license)}

`;
}

module.exports = generateMarkdown;
