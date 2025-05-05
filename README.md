# Homebox Automation Challenge
## Prerequisites

Before setting up the project, ensure you have the following:

- **Node.js**: Version 14.x or above (Download from [Node.js](https://nodejs.org/))
- **npm**: Comes with Node.js, but ensure you have the latest version by running `npm install -g npm`

## ⚙️ Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/jsingh181/homebox-cypress-tests.git
   cd your-cypress-repo

2. Install dependencies:
   ```bash
   npm install

3. Install Cypress (version 10.x or above):
   ```bash
   npm install cypress --save-dev  
<br>
Tip: To confirm that cypress is installed correctly, run: `npx cypress --version`  
 
## ▶️ Running Cypress Tests
There are two main ways of running these tests:
   
1. Open Cypress (opens test runner app):
   ```bash
   npx cypress open
   
2. Run the tests (headless mode):
   ```bash
   npx cypress run

## 📁 Project Structure

- **e2e**: Contains test files for end-to-end testing.
- **cypress/fixtures**: Contains data files for tests.
- **cypress/support**: Custom commands and utility functions.

## Cypress Version

- Cypress v14.3.2 or above is used in this repository.  _This is the latest version as of 22/04/2025._
- Installed version can also be checked within `package.json`

## 🛠️ Troubleshooting
- If Cypress doesn't open or runs into issues, try clearing the cache:
   ```
   npx cypress cache clear
- If you're facing issues with Node.js, ensure you’re using the supported version (14.x or above).
