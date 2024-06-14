# Status Report 1

## Team Accomplishments

- **Saketh**:
  - Successfully integrated ESLint into the development workflow to ensure code quality standards are met consistently across the project for javascript files.
  - Fixed linting issues for all js files that includes script.js, app.test.js, app.js and data.js.
  - Set up code coverage metrics to ensure visibility into the extent to which the codebase is covered by unit tests by setting up a threshold for code coverage.
  - Non-trivial commit - https://github.ncsu.edu/spillal2/DevOps_CI-CD_Pipeline/commit/85a9d05575464aad5eab0d35546b36d5ae4e7202

- **Kaushik**:
  - Implemented YAML file linting to maintain the integrity and correctness of the project's configuration files, which are crucial for the CI/CD pipelines. It's primary purpose is to check linting issues for ansible files but it covers all the yaml files linting.
  - Fixed linting issues for all the yaml files codecoverage.yaml, anslint.yaml, eslintcheck.yaml, unittest.yaml.
  - Developed and tested a GitHub Actions workflow that automates the execution of unit tests, ensuring that errors are caught early in the development process.
  - Non-trivial commit - https://github.ncsu.edu/spillal2/DevOps_CI-CD_Pipeline/commit/2cff37b0f455abe75a4f3db77561f89d9945466e

## Next Steps

- **Saketh**:
  - Implement Automated Deployment: Configure the pipeline to automatically build the application to a dev and production like environment using Ansible.
  - Write Functional tests ensuring better code quality.
 
- **Kaushik**:
  - Will work on writing a Docker file for containerization and setting up the Docker image.
  - SetUp sequential run of workflow files.
  - Delve into how Kubernetes can be implemented for auto-scaling.

## Retrospective for the Sprint:

- What worked: 
  - We worked side by side, like pair programming, to make sure we all understood the whole project, not just our own parts. We also ensured to prevent the formation of development and operations silos.
  - The ESLint and yaml integration has helped in maintaining code quality.
  - The initial setup of unit tests is running smoothly.
  - Previos workshops served as the foundation to set up the runners, VCL instances, GitHub actions and Linting workflows.

- What didn't work: 
  - Encountered challenges with YAML linting due to syntax issues.
  - Took lot of time figuring out getting Code Coverage onto Github actions as CodeCov is not supported for Enterprise Github accounts and had to work around to print the codecoverage on Github actions output.

- What to do differently: 
  - After trying a lot about integrating CodeCov to GitHub account, realized that it needs to be set up differently. We thought we should do enough research before getting into action.
  - Automate the fix of common linting errors in the Javascript files.
  

