# Homebox Cypress Challenge
## Prerequisites

Before setting up the project, ensure you have the following:

- **Node.js**: Version 14.x or above (Download from [Node.js](https://nodejs.org/))
- **npm**: Comes with Node.js, but ensure you have the latest version by running `npm install -g npm`
- `@faker-js/faker` for generating fake data
- `cypress-file-upload` plugin for file tests
- `cypress-real-events` plugin for tabbing support


## ✅ Setup Instructions

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

> **Tip:** To confirm that cypress is installed correctly, run: `npx cypress --version`  

<br>  

## ▶️ Running Cypress Tests
There are two main ways of running these tests:
   
1. Open Cypress (interactive mode):
   ```bash
   npx cypress open
   
2. Run the tests (headless mode):
   ```bash
   npx cypress run

> **Note:** To run specific files, you may also choose to use the following command (replace file name with your file)
>  ```bash
>  npx cypress run --spec "cypress/e2e/authFlow.cy.js"

<br> 

## 🧪 Project Structure

- `cypress/e2e/authFlow.cy.js` – Auth and order flow
- `cypress/e2e/fileUpload.cy.js` – File upload test
- `cypress/e2e/registerForm.cy.js` – Registration form test with faker
- `cypress/e2e/recoverPassword.cy.js` – Password reset field test
- `cypress/support/commands.js` – Custom commands like login and form fill

<br> 

## Cypress Version

- Cypress v14.3.2 or above is used in this repository.  _This is the latest version as of 22/04/2025._
- Installed version can also be checked within `package.json`

<br> 

## 🛠️ Troubleshooting
- If Cypress doesn't open or runs into issues, try clearing the cache:
   ```
   npx cypress cache clear
- If you're facing issues with Node.js, ensure you’re using the supported version (14.x or above).

## 📦 Packages used in this repository & setup note
- cypress-file-upload
- cypress-real-events
- faker.js

> cypress-file-upload
```bash
npm install --save-dev @faker-js/faker cypress-file-upload
```

Then in `cypress/support/commands.js`:
```js
import 'cypress-file-upload';
```

> cypress-real-events
```bash
npm install cypress-real-events  
```  

Then in `cypress/support/e2e.js`:
```js
import 'cypress-real-events/support';
```

> faker.js
```bash
npm install --save-dev @faker-js/faker
```

## 🚀 Notes

- All tests target https://qa-practice.netlify.app
- Place your sample upload file in `cypress/fixtures/`


Happy Testing! 🚀
