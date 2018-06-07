---
uid: vsts/azuredatafactory/trigger
title: Azure Data Factory (V2) Trigger
description: This release task can be added to a release pipeline to either start or stop Azure Data Factory triggers.
tags: [
    { "name": "VSTS" }, 
    { "name": "Azure" },
    { "name": "release" },
    { "name": "data factory" }
]
system: {
    document_id: df2f37bb-fec0-4b8e-a348-b14464d9ced1,
    program_github: liprec/vsts-publish-adf
}
---

# Azure Data Factory (V2) Trigger

This release task can be added to a release pipeline to either start or stop Azure Data Factory triggers.
![Screenshot of the Trigger Management task](images/adf-screenshot-4.png)

## Parameters

Azure Details:

- **Azure Connection Type** - Only Azure Resource Manager is supported
- **Azure RM Subscription** - Which Azure Subscription (Service Endpoint) should be used to connect to the datafactory
- **Resource Group** - To which Resource Group is the Azure Data Factory deployed

Data Factory Details:

- **Azure Data Factory** - The name of the Azure Data Factory.
- **Trigger name** - The name of the Trigger [Optional]. If not defined all trigger will be start/stop.
- **Set Trigger Status** - The status of the stigger: Start or Stop.

## Release notes

### 1.0.4

- Initial public release

## Feedback

If you have any comment related to the documentation, like corrections, unclear features or missing documentation, feel free to leave feedback below via GitHub. Or correct it yourself and submit a PR; see [CONTRIBUTING.md](https://github.com/liprec/azurebi-docs/blob/master/.github/CONTRIBUTING.md) for more details.
*GitHub account required.*

### [**Open**](#tab/docs-open)

### [**Closed**](#tab/docs-closed)

***
