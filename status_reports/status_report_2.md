# Status Report 2

## Team Accomplishments

- **Kaushik**:
  - Accomplished the creation of Docker-related files which includes the Dockerfile and the docker-compose that helps in ensuring the application's containerization. The built image is later pushed onto Docker Hub.
  - Configured a local runner enhancing compatibility with VCL for better CI/CD flow because communication between 2 VCL machines seem to be far-fetched due to underlying networking issues.
  - Combined the workflow files from previous sprint into a single workflow file and also added further steps which orchestrates a sequential execution of workflows, aligning with the stages in our CI/CD pipeline.
  - Worked with Saketh in enhancing the Test suite by writing Unit tests so that code coverage would improve.
  - [Non-trivial commit](https://github.ncsu.edu/spillal2/DevOps_CI-CD_Pipeline/commit/a5f539d4f0f067e1f60cf468d0fb65b9525c010b)

- **Saketh**:
  - Developed an Ansible playbook that orchestrates the provisioning and configuration of the devlopment environment, coupled with the application's build process, executed by a self-hosted GitHub Actions runner.
  - Worked with Kaushik in enhancing the Test suite by writing Unit tests so that code coverage would improve.
  - Addressed linting issues for Ansible playbooks and Unit test JavaScript files to ensure code quality standards are met consistently across the project for javascript and yaml files.
  - Established a workflow to push Docker images to Docker Hub after successful completion of previous workflow steps that includes linting, testing, building of the application.
  - [Non-trivial commit](https://github.ncsu.edu/spillal2/DevOps_CI-CD_Pipeline/commit/4a3d175b708d6fa745f8e4846a29ab5231233006)

## Next Steps

- **Kaushik**:
  - Will work on Kubernetes to implement automatic rollback and auto-scaling features which are the last stage of our proposed CI/CD pipeline to ensure high availability and reliability.
 
- **Saketh**:
  - Plans to integrate security into the DevOps pipeline, enhancing the security posture of the development process. (Also for the Bonus points 😉)
  - Aims to set up and configure the production like environment for the application.
  - Since Security feature is a bonus task, will prioritize helping Kaushik setting up Kubernetes if needed.

Kubernetes was explored before including as part of the pipleine. While pre-built images were pulled and run, we cannot yet predict what challenges we might encounter given our image. But we are confident that this is an accomplishable task and will be completed by the deadline. Parallely we are looking into including security features into our devops pipeline. Since security is a new concept for us, for now we decided to try on implementing continuous monitoring of the application using Grafana, and also performing container security scans using Clair.
But as mentioned in the tasks the first priority is to finish integrating Kubernetes to complete the proposed pipeline. We are planning to spend a large chunk of our time to explore Kubernetes and Security features as we are new into both of them.


## Retrospective for the Sprint:

- What worked: 
  - We worked side by side, like pair programming, to make sure we all understood the whole project, not just our own parts. We also ensured to prevent the formation of development and operations silos.
  - Setting up Github runner on a local machine instead of VCl helped in avoiding the underlying network issues.
  - Usage of docker-compose removed the need to upload ssh and ansible files as volumes manually thus automating the tasks.
  - Previous workshops served as the foundation to set up the Github runners , VCL instances, GitHub Actions and  Workflows.

- What didn't work: 
  - Setting up the Github runners on VCL machines resulted in communication issues between them which was tough to debug and solve.
  - yaml linting raised numerous errors when Ansible playbook has been developed, thus had to spend time in manually resolving the linting issues.

- What to do differently: 
  - SetUp the Github runner locally initially instead of using VCL machines.
  - Get more familiar writing Docker files.
  - Get more familiar with standards writing Ansible playbooks to overcome the linting issues.
  - Automate the fix of common linting errors in the yaml files.
  
