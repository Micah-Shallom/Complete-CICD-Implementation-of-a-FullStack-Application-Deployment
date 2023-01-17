# Submission Guidelines

1.  Please complete within one week of receipt.    
2.  Spend no more than 8 hours (you likely will not finish).
3.  Questions are welcome—please ask if something is not clear!

# The Brief 

Your task is to write a script for infrastructure configuration and deployment of the apps provide in [this project](https://drive.google.com/file/d/1y4XhkQWc62L-nUCVhto9oVUGDmE1Bvdf/view?usp=sharing) for a multi-environment setup e.g. development, staging, and production.

The project has two applications – a frontend and a backend. The frontend application should be public and the backend Service should not be. Please demonstrate the app auto-scales, displays some level of auto-healing and can be properly monitored.

Please implement using the following tech:

-   [Terraform](https://www.terraform.io/) / [CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html)
-   [Kubernetes](https://kubernetes.io/) (EKS, AKS, GKE are fine)
-   [Docker](https://www.docker.com/)

You can pick any provider (GCP, AWS, Azure).

# What we are looking for

- **Code organization, variable naming, and readability.** You should organize your code based on the separation of concerns and pay extra attention to the naming of variables and functions.
- **Documentation & Diagrams.** You are expected to document the platform you are building and all the tactical decisions you made.
- **Your sense of security, reliability and observability.** You are expected the insfrastructure, containers and networking with security and observability in mind. We have left out some optimization in the Dockerfile. The application also expose some metrics and logs. 
- Your Helm charts, if you use that.

# What we are not looking for

- **Scripts to set up the CI/CD**. But we may ask how would approach it.
- **Cost Analysis Reports.** You should be able to reason out and provide a Cost analysis of your suggested approach, which we may ask in the follow-up interview.

# Submitting your Solution

Along with your actual code, put together a short `README.md` file for your solution that talks about any interesting things you ran into, decisions you made, etc. Think of it as a little postmortem to talk through anything you found notable about the project. You can also use it as a place to explain any "I know this might look weird at first glance but hear me out..." sort of decisions you made.

When you're done, create a private repo on GitHub that contains your project and invite me to it (I'm “theskumar”). Also, make an archive “.zip” of your project and send it to us.

Once we've had a chance to review your submission, we'll get back to you with the next steps.

⛽

BEST OF LUCK!**