# Project Proposal

## Problem Statement
Collaboration has been a driving force in the evolution and advancement of the software industry. Collaboration means diverse teams with numerous members working together on different parts of a product. Developers often configure their individual development environments based on personal preferences or specific project needs, which can introduce inconsistencies. These variations can lead to unexpected behaviors or errors in the software when it runs in different environments. As a result, teams frequently encounter the frustrating challenge of reconciling issues summed up by the infamous phrase, "But it works on my machine ¯\(ツ)/¯."

Throughout the software development lifecycle, code undergoes frequent modifications. Platforms like GitHub is used for version control, and tools like GitHub Actions have been invaluable in automating various software workflows. One of them is a linting step, which ensures that the code follows certain style guidelines, helping in maintaining code consistency. Another important step is the testing phase, where unit tests validate certain changes. However, they might not offer complete code coverage. Even with comprehensive coverage, it's possible that some sections of the code may malfunction. Changes in one module might affect others, potentially leading to system failures if deployed directly to the production environment.

The quality and readiness of the software impact both the development team and the end-users. Branch Protection Rules in platforms like GitHub ensure that specific criteria, such as passing tests or code reviews, are met before code merges, enhancing the robustness of the codebase. When there's a push to a Release Branch, a Release Branch Trigger initiates specific workflows, ensuring that the software is ready for deployment. When unforeseen errors creep into production, the aftermath can range from service interruptions to shattered trust and potential financial losses. This can impact the users, clients and DevOps team as well.

Our CI/CD pipeline integrates with tools like Ansible, which uses playbooks to automate and ensure consistent deployment processes. It consists of an automated build phase responding to integration events, ensuring every code commit is built, packaged correctly, and prepared for deployment in a containerized environment. This not only ensures that the software is always in a deployable state but also reduces manual intervention, mitigating potential build-related issues. The build phase, positioned before actual deployment, operates autonomously without user interaction and comes into action upon code pushes to branches such as dev, main, and release.
This approach allows developers to quickly grasp potential deployment issues and rectify them without actually breaking the production server. As the software world transitions to containerized deployments, the consistency and isolation provided by containers further reduce "works on my machine" type issues, ensuring a smooth user experience.

## Tagline: Sleep tight, Deploy Right : REST~~LESS~~ at 3 AM

## Use Case : Merge onto Release branch triggers an automatic Build and Test in Production like Environment.
### 1. Preconditions:
    -  Deployment machine provisioned
    -  Self-hosted GitHub Actions system provisioned.
    -  Release branch exists
    -  Feature has been tested in development environment
### 2. Main Flow
    - The developer creates a Pull Request (PR) to merge the dev into the release branch [S1].
    - The PR undergoes a code review, and requires approval from the Release Engineer [S2].
    - On approval, the GitHub Actions system detects the PR onto release and triggers the build and test in production like environment [S3].
    - The system provisions a production-like environment using Ansible [S4].
    - The application is built and deployed onto this environment [S5].
    - Functional tests are run on the application in the provisioned environment using tools like Chai [S6].
    - If tests are successful, the PR is merged to the release branch [S7].
### 3. Sub Flow
    - [S1] Developer provides a descriptive PR message, detailing the changes made, and requests appropriate reviewers.
    - [S2] The PR undergoes a review process where potential issues are discussed. The Release Engineer then approves the PR.
    - [S3] GitHub Actions detects the pull request on the release branch and starts triggers the build and test in production like environment.
    - [S4] Using Ansible, a production-like environment is provisioned.
    - [S5] The application's latest version is built and deployed to the environment.
    - [S6] Functional tests run on the deployed application to ensure its correct operation.
    - [S7] On successful test completion, the system merges the PR to the release branch

### 4. Alternative Flows:
    - [E1] During the build and test process, the build fails. DevOps engineer checks for the type of error of, if it is a compilation error or a test case failure, the developers are notified
    - [E2] Provisioning of the environment using Ansible fails. The system sends an error notification. 
    - [E3] The PR is rejected during the review process. Reasons for rejection are communicated to the developer.
  
## Pipeline Design
![image](https://media.github.ncsu.edu/user/27443/files/8ba5f675-44a5-4e46-902d-5b53fe5f7e78)

## Architecture Components:
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
    - Once, it Linting and Testing is passed, Development environment is provisioned using Ansible.
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
     -- If it is a network related issue, retry deploying the app.
     -- If it is Credential issues, try updating the secrets file.
    - If it's not one of the above mentioned issues, it's better to notify the development team.
### 7. Main (Production Environment): 
    - Application is in a running state, and automatic rollback or restart mechanisms are handled by Kubernetes in the event of an application crash.
    - Any changes are merged into the main to have a record of what's currently in production.

## Guidelines and Constraints for Building Software for This Architecture:

### 1. Code Quality:
    - Implement strict linting and static code analysis rules to ensure it follows coding standards.
    - Enforce regular code reviews as part of the development workflow.
    
### 2. Testing:
    - Ensure thorough testing before the code is committed and ensure having a minimum threshold code coverage.
    
### 3. Containerization:
    - The applications will be containerized, so make sure all the dependencies required are appended to the Dockerfile.

### 4. Version Control:
    - Use tools like Git for version control. Ensure that branch protection rules are in place, and a clear branching strategy (like Gitflow) is defined.
    
## Team Members
-
     | Name | UnityID |
     | -------- | -------- |
     | Saketh Vangala | svangal |
     |  Kaushik Pillalamarri | spillal2 |
