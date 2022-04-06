---
uid: vsts/azuredatafactory/pipeline
title: Azure Data Factory Pipelines Management
description: This release task can be added to a release pipeline to either suspend or resume all pipelines of an Azure Data Factory or Azure Synapse Workspace.
tags: [
    { "name": "AzureDevOps" },
    { "name": "azure-pipelines" },
    { "name": "Azure" },
    { "name": "release" },
    { "name": "pipelines" },
    { "name": "data factory" },
    { "name": "Synapse" }
]
system: {
    document_id: 7dc9e4de-8ca3-46be-b1bd-17c683c6a2a3,
    program_github: liprec/vsts-publish-adf
}
---

# Azure Data Factory Pipelines Management

This release task can be added to a release pipeline to either suspend or resume all pipelines of an Azure Data Factory or Azure Synapse Workspace.
![Screenshot of the Pipeline Management task](images/adf-screenshot-3.png)

## Parameters

Azure Details:

- **Azure Connection Type** - Only Azure Resource Manager is supported
- **Azure RM Subscription** - Which Azure Subscription (Service Endpoint) should be used to connect to the datafactory
- **Resource Group** - To which Resource Group is the Azure Data Factory deployed
- **Azure Data Factory** - The name of the Azure Data Factory

Data Factory Details:

- **Set Pipeline Status** - Option to set the status all the available pipelines to either 'Suspend' or 'Resume'.
- **Parallel tasks** - [Future use]Option to set the number of parallel processes.

## Release notes

### 1.0.5

- [Bug]Fixed Suspend/Resume logic

### 1.0.0

- Initial public release

## Feedback

If you have any comment related to the documentation, like corrections, unclear features or missing documentation, feel free to leave feedback below via GitHub. Or correct it yourself and submit a PR; see [CONTRIBUTING.md](https://github.com/liprec/azurebi-docs/blob/master/.github/CONTRIBUTING.md) for more details.
*GitHub account required.*

### [**Open**](#tab/docs-open)

### [**Closed**](#tab/docs-closed)

***
