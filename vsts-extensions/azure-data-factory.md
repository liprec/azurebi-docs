---
uid: vsts/azuredatafactory/overview
title: Azure Data Factory release extension
description: This extension adds release tasks related to Azure Data Factory (V1 and V2) to Visual Studio Team Service.
tags: [
    { "name": "VSTS" }, 
    { "name": "Azure" },
    { "name": "release" },
    { "name": "Data Factory" }
]
system: {
    document_id: ffa53f4b-f056-451f-b3e7-2a98f26e1b2f,
    program_github: liprec/vsts-publish-adf
}
---

# Azure Data Factory

This extension adds release tasks related to Azure Data Factory (V1 and V2) to Visual Studio Team Service.

## Azure Data Factory Deployment

Visual Studio Team Service deploy task that will deploy JSON files with definition of Linked Services, Datasets, Pipelines and/or Triggers (V2) to an existing Azure Data Factory. 
![Screenshot of the Deploy task](images/adf-screenshot-2.png)

[More information](xref:vsts/azuredatafactory/deploy)

## Azure Data Factory Trigger Management

This release task can be added to a release pipeline to either start or stop Azure Data Factory V2 triggers.
![Screenshot of the Trigger Management task](images/adf-screenshot-4.png)

[More information](xref:vsts/azuredatafactory/trigger)

## Azure Data Factory Pipelines Management

This release task can be added to a release pipeline to either suspend or resume all pipelines of an Azure Data Factory.
![Screenshot of the Pipeline Management task](images/adf-screenshot-3.png)

[More information](xref:vsts/azuredatafactory/pipeline)

## Feedback

### [**Documentation**](#tab/docs)

If you have any comment related to the documentation, like corrections, unclear features or missing documentation, feel free to leave feedback below via GitHub. Or correct it yourself and submit a PR; see [CONTRIBUTING.md](https://github.com/liprec/azurebi-docs/blob/master/.github/CONTRIBUTING.md) for more details.
*GitHub account required.*

### [**Product**](#tab/product)

If you have any comment related to the working of the described product, feel free to leave feedback below via GitHub.
*GitHub account required.*

***

### [**Open**](#tab/docs-open/docs)

### [**Closed**](#tab/docs-closed/docs)

### [**Open**](#tab/product-open/product)

### [**Closed**](#tab/product-closed/product)

***
