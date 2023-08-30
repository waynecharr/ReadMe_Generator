// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// They mean the link in the Table of Contents to the License Section
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data);
  return `# ${data.title}

  ## Description:

  ${data.description}

  ## Tables of Contents

  ## Installation

  ${data.description}

  ## Usage 

  ${data.description}

  ## License

  ## Contributing

  ${data.description}

  ## Tests

  ${data.description}

  ## Questions

  - For more information plesae contact  ${data.github}
  - For more information plesae contact  ${data.email}

`;
}

module.exports = generateMarkdown;
