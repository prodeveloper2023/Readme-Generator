# README Generator

A command-line application that dynamically generates a professional README.md from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer).

---

## Contents

1. [About](#about)

   1. [User Story](#user%20story)
   2. [Acceptance criteria](#acceptance%20criteria)

2. [Installation](#installation)
3. [Tests](#tests)
4. [License](#license)
5. [Contributing](#contributing)
6. [Authors and acknowledgment](#authors%20and%20acknowledgment)
7. [Contact](#contact)

---

## About

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

---

### User Story

```
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project
```

---

### Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

---

## Installation:

To clone the repo:

git clone

```
git@github.com:prodeveloper2023/Readme-Generator.git
```

---

## Tests

In the terminal locate the index.js file, 'npm init -y, will initialise the json file followed by 'npm install inquirer' to install the inquirer dependency in order to run the app.In the terminal type 'node index.js' Answer all the question and an 'newReadMe.md' will be generated. Tests are done through the terminal and a walkthrough screen recording is provided.

---

## License

License used for this project - MIT

---

## Contributing:

To contribute to this application, create a pull request.
Here are the steps needed for doing that:

- Fork the repo
- Create a feature branch (git checkout -b NAME-HERE)
- Commit your new feature (git commit -m 'Add some feature')
- Push your branch (git push)
- Create a new Pull Request

Following a code review, your feature will be merged.

---

## Authors and Acknowledgments

Built by [Md Tanvirul Islam]()

---

## Contact

- GitHub Username: [prodeveloper2023]()
- GitHub Email:
