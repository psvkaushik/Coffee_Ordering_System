# DevOps CI/CD Pipeline

## Project Overview
This DevOps project focuses on creating a robust CI/CD pipeline for a Node.js application (Coffee-project). The pipeline automates various stages of software development, including code linting, unit testing, and deployment, functional testing. Utilizing technologies like Docker for containerization, Kubernetes for orchestration and rollback, and Ansible for automation, the project ensures a consistent and efficient workflow. GitHub Actions are employed to automate integration and delivery, seamlessly pushing changes to production while ensuring code quality and reliability. This setup aims to streamline the development process, reduce manual errors. 

## Technologies and Tools Used
  - Node.Js Application
  - GitHub for Version control
  - GitHub Actions 
  - VS Code for code development
  - Ansible for Automation
  - ESLint for JavaScript Linting
  - Ansible Lint for YAML Linting
  - Chai Testing
  - Docker and DockerHub for Containerization
  - Kubernetes (Minikube) for Orchestration and Rollback
  - NCSU VCL Machines to host the application

## Project Structure

- `.github/workflows/`: Contains GitHub Actions workflow definitions for CI/CD processes.
- `coffee-project-main/`: The main Node.js application codebase.
- `status_reports/`: Documentation of status updates throughout the development process.
- `.ansible-lint`: Configuration files for Ansible linting to ensure best practices and standards in Ansible playbooks.
- `.gitignore`: Specifies intentionally untracked files to ignore.
- `Dockerfile`: Defines the steps to create the Docker image of the application.
- `README.md`: The comprehensive guide for this repository.
- `build.yaml`: Ansible playbook for setting up the project and running build tasks.
- `config.yaml`: Kubernetes Deployment configuration file.
- `docker-compose.yaml`: Configuration for multi-container Docker applications.
- `hosts.yaml`: Hosts file for Ansible, defining the inventory of servers.
- `kube_build.yaml`: Ansible playbook to automate the Kubernetes deployment
- `kube_hosts.yaml`: Specifies hosts for Kubernetes-related tasks.
- `project_proposal.md`: The initial proposal for the project.
- `project_report.md`: A detailed report of the project, including findings, results, and analyses.

## Coffee-project Local SetUp and Installation 
Assumes that you have npm / node installed and your current directory is coffee-project-main
### App
    npm install express axios
    
    node app.js
    
    http://localhost:3000
### Tests
    npm install mocha chai supertest --save-dev
    
    npm test

## CI/CD Pipeline
![image](https://media.github.ncsu.edu/user/27443/files/444f7f94-4b73-45d8-a11d-969751388237)
 
## Architecture Components
### 1.Developers: 
  - The starting point where developers create a feature branch off a "Dev"  branch, upon successful passing here move onto the release branch.
### 2.Release Branch Trigger:
  - Code is integrated here.
  - Branch protection rules are set up, which includes code review.
  - An automatic code integration and version control mechanism is in place.
  - Upon making a pull request (PR) from the Dev to the Release branch, Github actions workflow is triggered that includes Linting, Testing, Code Coverage, Building the application, Pushing Docker image to DockerHub, and deploying using Kubernetes.
  - Almost similar steps are observed in Dev branch(PR made from feature).
### 3.Linting and Testing:
  - Static code analysis is done using tools ESLint for JS code and Ansible-Lint for Ansible playbooks.
  - Unit testing is done using Chai and Code Coverage is checked using CodeCov.
  - System provides feedback to the development team if Linting and Testing fail.
### 4.Build and Test in Dev/Release: 
  - Once, Linting and Testing are passed. We are using Dockerfile and Docker-Compose to build the application and convert it into a docker image.
  - The application is built and undergoes functional testing using Chai.
  - On successful tests, the Docker image is pushed into DockerHub.
  - If provisioning is an issue, then retry allocating resources and try building the application again without the need to restart the whole pipeline or notify the developers.
  - If it is not a provisioning issue, but a compilation error or testing failure, the system provides feedback to the development team.
  - Once the Docker image is pushed to DockerHub, Deployment using Kubernetes is performed where the Kubernetes cluster pulls the image from DockerHub and deploys as described in the next stage.

### 5.Deploy:
  - The application is packaged into a Docker image and pushed to Docker Hub.
  - The container deployment and orchestration are handled using Kubernetes.
  - If the deployment fails, there might be two primary causes that are checked manually by the DevOps Engineer.
  - If it is a network-related issue, retry deploying the app.
  - If it is a Credential issue, try updating the secrets file.
  - If it's not one of the above-mentioned issues, it's better to notify the development team.
### 6.Main (Production Environment): 
  - Application is running, and rollback or restart mechanisms are handled by Kubernetes in the event of an application crash.
  - Any changes are merged into the main to have a record of what's currently in production.


## CI/CD Workflow Description

The CI/CD pipeline is composed of several sequential jobs that ensure the code quality, reliability, and deployment readiness of the application:

- `anslint`: Lints Ansible playbooks and YAML files to ensure code standards.
- `eslint`: Runs ESLint for to catch JavaScript syntax and style issues.
- `unittest`: Executes unit tests to verify the correctness of individual code units.
- `coverage`: Measures the amount of code covered by automated tests to ensure sufficient test coverage.
- `build`: Builds the Docker image of the application and prepares it for deployment.
- `functional_test`: Conducts functional tests to ensure the application behaves as expected in an integrated environment.
- `upload`: Pushes the built Docker image to a container registry Docker Hub.
- `kubedeploy`: Deploys the Docker image to a Kubernetes cluster enabling the running of application.

## Team
  - Kaushik Pillalamarri - spillal2
  - Saketh Vangala - svangal
