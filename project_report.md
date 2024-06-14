# Final Project Report

## Problem Statement
Collaboration has been a driving force in the evolution and advancement of the software industry. Collaboration means diverse teams with numerous members working together on different parts of a product. Developers often configure their individual development environments based on personal preferences or specific project needs, which can introduce inconsistencies. These variations can lead to unexpected behaviors or errors in the software when it runs in different environments. As a result, teams frequently encounter the frustrating challenge of reconciling issues summed up by the infamous phrase, "But it works on my machine ¯\(ツ)/¯."

Throughout the software development lifecycle, code undergoes frequent modifications. Platforms like GitHub is used for version control, and tools like GitHub Actions have been invaluable in automating various software workflows. One of them is a linting step, which ensures that the code follows certain style guidelines, helping in maintaining code consistency. Another important step is the testing phase, where unit tests validate certain changes. However, they might not offer complete code coverage. Even with comprehensive coverage, it's possible that some sections of the code may malfunction. Changes in one module might affect others, potentially leading to system failures if deployed directly to the production environment.

The quality and readiness of the software impact both the development team and the end-users. Branch Protection Rules in platforms like GitHub ensure that specific criteria, such as passing tests or code reviews, are met before code merges, enhancing the robustness of the codebase. When there's a push to a Release Branch, a Release Branch Trigger initiates specific workflows, ensuring that the software is ready for deployment. When unforeseen errors creep into production, the aftermath can range from service interruptions to shattered trust and potential financial losses. This can impact the users, clients and DevOps team as well.

Our CI/CD pipeline integrates with tools like Ansible, which uses playbooks to automate and ensure consistent deployment processes. It consists of an automated build phase responding to integration events, ensuring every code commit is built, packaged correctly, and prepared for deployment in a containerized environment. This not only ensures that the software is always in a deployable state but also reduces manual intervention, mitigating potential build-related issues. The build phase, positioned before actual deployment, operates autonomously without user interaction and comes into action upon code pushes to branches such as dev, main, and release.
This approach allows developers to quickly grasp potential deployment issues and rectify them without actually breaking the production server. As the software world transitions to containerized deployments, the consistency and isolation provided by containers further reduce "works on my machine" type issues, ensuring a smooth user experience.

## Summarized Accomplishments
  - Implemented YAML file linting to enhance code quality across all the yaml files including the ansible playbooks.
  - Integrated ESLint into the development workflow to ensure code quality standards are met consistently across the project for javascript files.
  - Fixed linting issues for all the yaml files and js files.
  - Enhanced the Test suite by writing Unit tests so that code coverage would improve.
  - Set up code coverage metrics to ensure visibility into the extent to which the codebase is covered by unit tests by setting up a threshold for code coverage.
  - Configured a local runner enhancing compatibility with VCL for better CI/CD flow because communication between 2 VCL machines seem to be far-fetched due to underlying networking issues.
  - Implemented Github Actions  sequential workflow that automates execution of linting, testing, code coverage, building the application, uploading the docker image to DockerHub, and Deployment using Kubernetes to catch errors early in the development.
  - Accomplished the creation of Docker-related files (Dockerfile and docker-compose) ensuring the application's containerization.
  - Developed an Ansible playbook that orchestrates the provisioning and configuration of the devlopment environment, coupled with the application's build process, executed by a self-hosted GitHub Actions runner.
  - Deployed the application using Kubernetes to ensure high availability and reliability.
  - Implemented Kubernetes Rollback feature to minimze downtime incase of failure in the new deployment.
  
## Technical Approach: Pipeline Figure
![image](https://media.github.ncsu.edu/user/27443/files/8ba5f675-44a5-4e46-902d-5b53fe5f7e78)

## Technical Approach: Description of Pipeline
### 1. Developers: 
   - The starting point where developers create a feature branch off a "Dev" branch.
### 2. Dev (Development Environment): 
   - Code is integrated here.
   - Branch protection rules are set up, which includes code review.
   - An automatic code integration and version control mechanism is in place.
   - Upon making a pull request (PR) from the feature to the Dev branch, testing and linting are triggered.
### 3. Linting and Testing:
   - Static code analysis is done using tools ESLint for JS code and Ansible-Lint for Ansible playbooks.
   - Unit testing is done using Chai and Code Coverage is checked using CodeCov.
   - System provides feedback to development team if Linting and Testing is failed.
### 4. Build and Test in Dev: 
   - Once, Linting and Testing is passed, Development environment is provisioned using Ansible.
   - The application is built and undergoes functional testing using Chai.
   - On successful tests, the PR is merged.
   - If provisioning is an issue, then retry allocating resources and try building the application again without the need to restart the whole pipeline or notify the developers.
   - If it is not a provisioning issue, but a compilation error or testing failure, system provides feedback to development team.
### 5. Release Branch Trigger: 
   - PR from DEV to release branch triggers the build and test in a production-like environment.
   - Production-like build environment is provisioned using Ansible.
   - The application is built and undergoes functional testing using Chai.
   - On successful tests, the PR is merged.
   - If provisioning is an issue, then retry allocating resources and try building the application again without the need to restart the whole pipeline or notify the developers.
   - If it is not a provisioning issue, but a compilation error or testing failure, system provides feedback to development team.
### 6. Deploy:
   - The application is packaged into a Docker image and pushed to Docker Hub.
   - The container deployment and orchestration are handled using Kubernetes.
   - If deployment fails, there might be two primary causes that are checked manually by the DevOps Engineer.
     - If it is a network related issue, retry deploying the app.
     - If it is Credential issues, try updating the secrets file.
   - If it's not one of the above mentioned issues, it's better to notify the development team.
### 7. Main (Production Environment): 
   - Application is in a running state, and automatic rollback or restart mechanisms are handled by Kubernetes in the event of an application crash.
   - Any changes are merged into the main to have a record of what's currently in production.

## Usage of Generative AI ((i.e. ChatGPT) in our project
   - Used it for learning technical concepts and answering specific queries on Ansible, Docker, and Kubernetes.
   - Supplying Code Snippets and the error messages to gain feedback on how to handle it.
   - Used in knowing the general linting issues and to fix them by providing error messages.
   - Setting Up Biolerplate code for Kubernetes for us to test.
   - Used in troubleshooting of issues with Ansible, Docker and Kubernetes.
   - But we thought that we should not rely on Chatgpt completely for errors because there was one error regarding mounting of volumes where chatgpt couldn't help us even after trying multiple ways given by it. Instead we searched Stackerflow where we got the error fixed in few minutes. 

## Retrospective: What worked
  - We worked side by side, like pair programming, to make sure we all understood the whole project, not just our own parts. We also ensured to prevent the formation of development and operations silos.
  - The ESLint and yaml Linting integration has helped in maintaining code quality.
  - The initial setup of unit tests is running smoothly.
  - Previous workshops served as the foundation to set up the runners, VCL instances, GitHub actions and Linting workflows.
  - Setting up Github runner on a local machine instead of VCl helped in avoiding the underlying network issues.
  - Usage of docker-compose removed the need to upload ssh and ansible files as volumes manually thus automating the tasks.

## Retrospective: What didn't work
  - Took lot of time figuring out getting Code Coverage onto Github actions as CodeCov is not supported for Enterprise Github accounts and had to work around to print the codecoverage on Github actions output.
  - Setting up the Github runners on VCL machines resulted in communication issues between them which was tough to debug and solve.
  - yaml linting raised numerous errors when Ansible playbook has been developed, thus had to spend time in manually resolving the linting issues.

## Retrospective: What you would do differently
 - After trying a lot about integrating CodeCov to GitHub account, realized that it needs to be set up differently. And also setting up a local runner was easy to eliminate network issues between VCL machines. So, we thought we should do enough research before getting into action.
 - Get more familiar with standards writing of Ansible playbooks to overcome the linting issues and automate fixing of linting issues.
 - Could have learnt more about Kuberntes deployment beforehand so that it would not be a last minute rush to fix issues with deployment.
 - Decrease the reliability on Generative AI and give equal importance to searching errors manually to understand the concepts more clearly.

## Who did what (multi-person teams only)
- **Kaushik**
  - Implemented YAML file linting and fixed linting issues for all the yaml files.
  - Developed and tested the sequential GitHub Actions workflow for Linting and Testing.
  - Accomplished the creation of Docker-related files for containerization.
  - Configured a local runner to run Github actions workflow.
  - Worked with Saketh in enhancing the Test suite by writing Unit tests.
  - Worked on deploying the application using Kubernetes by writing Configuration file.
- **Saketh**
  - Implemented ES file linting and fixed linting issues for all the js files.
  - Set up code coverage in the pipeline.
  - Developed an Ansible playbook that deploys the application and sets up the Kubernetes Environment.
  - Worked with Kaushik in enhancing the Test suite by writing Unit tests.
  - Established a workflow to build and push the Docker image to Docker Hub and Deploy to Kubernetes.
  - Worked on implementing Kubernetes Rollback feature.

## Links to 3 technical commit's per person -- link to commit's that demonstrate effort
- **Kaushik**
  - [Non-trivial commit 1](https://github.ncsu.edu/spillal2/DevOps_CI-CD_Pipeline/commit/2cff37b0f455abe75a4f3db77561f89d9945466e)
  - [Non-trivial commit 2](https://github.ncsu.edu/spillal2/DevOps_CI-CD_Pipeline/commit/a5f539d4f0f067e1f60cf468d0fb65b9525c010b)
  - [Non-trivial commit 3]()
- **Saketh**
  - [Non-trivial commit 1](https://github.ncsu.edu/spillal2/DevOps_CI-CD_Pipeline/commit/85a9d05575464aad5eab0d35546b36d5ae4e7202)
  - [Non-trivial commit 2](https://github.ncsu.edu/spillal2/DevOps_CI-CD_Pipeline/commit/4a3d175b708d6fa745f8e4846a29ab5231233006)
  - [Non-trivial commit 3]()
