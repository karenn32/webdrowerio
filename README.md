# WebdriverIO Test Project

This repository is intended for automated testing of the [SauceDemo](https://www.saucedemo.com) website using WebdriverIO. The project is set up to run tests on different browsers including Chrome and Firefox, as well as to work with Allure reports and Docker.

## Repository Setup

To start, clone the repository and install all dependencies:

```bash
git clone https://github.com/karenn32/webdrowerio.git
cd webdrowerio
npm install
```

## Running Tests

### Run all tests

To run all tests, use:

```bash
npm run test:test
```

### Run tests in Chrome

```bash
npm run test:chrome
```

### Run tests in Chrome in headless mode

```bash
npm run test:chromeheadless
```

### Run tests in Firefox

```bash
npm run test:firefox
```

### Run login-specific test

```bash
npm run test:login
```

### Run tests in Docker

To run the tests in Docker containers:

```bash
npm run test:docker
```

## Allure Reports

The project is configured to generate Allure reports. You can generate and open the report using the following commands:

### Generate Allure report

```bash
npm run allure:generate
```

### Open Allure report

```bash
npm run allure:open
```

The reports are genereted automatically after any pull request to main branch. All generated reports are published on GitHub Pages and can be viewed at: [https://karenn32.github.io/webdrowerio](https://karenn32.github.io/webdrowerio).
