---
uid: vsts/azuredatafactory/deploy
title: Azure Data Factory Deployment
description: Visual Studio Team Service deploy task that will deploy JSON files with definition of Linked Services, Datasets and/or Pipelines to an existing Azure Data Factory.
tags: [
    { "name": "VSTS" }, 
    { "name": "Azure" },
    { "name": "release" },
    { "name": "data factory" }
]
system: {
    document_id: 5faa75e7-bfc2-4ba0-a07f-6f06563724ca,
    program_github: liprec/vsts-publish-adf
}
---

# Azure Data Factory Deployment

Visual Studio Team Service deploy task that will deploy JSON files with definition of Linked Services, Datasets and/or Pipelines to an existing Azure Data Factory. 
![Screenshot of the Deploy task](images/adf-screenshot-2.png)

## Parameters

Azure Details:

- **Azure Connection Type** - Only Azure Resource Manager is supported
- **Azure RM Subscription** - Which Azure Subscription (Service Endpoint) should be used to connect to the datafactory
- **Resource Group** - To which Resource Group is the Azure Data Factory deployed

Data Factory Details:

- **Azure Data Factory** - The name of the Azure Data Factory
- **Azure Data Factory Version** - The version of the Azure Data Factory
- **Path to Linked Services** [Optional] - Path to the folder in the linked artifact in which contains the JSON definitions for the Linked Services
- **Path to Datasets** [Optional] - Path to the folder in the linked artifact in which contains the JSON definitions for the Datasets
- **Path to Pipelines** [Optional] - Path to the folder in the linked artifact in which contains the JSON definitions for the Pipelines
- **Path to Triggers** [Optional] - Path to the folder in the linked artifact in which contains the JSON definitions for the Triggers. Only available in V2.

Advanced:

- **Overwrite** - Option to overwrite existing definitions with the new ones.
- **Continue on Error** - Option to continue deploying after errors occur.
- **Clear before Deploy** - Option to clear the existing difitions before new ones are deployed. Only if a path to Linked Service/Datasets/Pipelines are provided the existing will be cleared.
- **Parallel tasks** - [Future use]Option to set the number of parallel processes.

## Release notes

### 1.1.8

- Add support for Azure Data Facory V2

### 1.0.2

- Add extra error logging

### 1.0.0

- Initial public release

## Feedback

If you have any comment related to the documentation, like corrections, unclear features or missing documentation, feel free to leave feedback below via GitHub. Or correct it yourself and submit a PR; see [CONTRIBUTING.md](https://github.com/liprec/azurebi-docs/blob/master/.github/CONTRIBUTING.md) for more details.
*GitHub account required.*

### [**Open**](#tab/docs-open)

### [**Closed**](#tab/docs-closed)

***
