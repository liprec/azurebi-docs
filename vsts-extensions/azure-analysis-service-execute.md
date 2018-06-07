---
uid: vsts/azureanalysisservice/execute
title: Azure Analysis Service TSML Script
description: This release task can be added to a release pipeline to execute a custom TMSL script against an Azure Analysis Service instance.
tags: [
    { "name": "VSTS" }, 
    { "name": "Azure" },
    { "name": "release" },
    { "name": "Analysis Service" },
    { "name": "TMSL" }
]
system: {
    document_id: 4745ea49-bbab-4a8c-96b3-408aa7f688bb
}
---
# Azure Analysis Service TSML Script

This release task can be added to a release pipeline to execute a custom TMSL script against an Azure Analysis Service instance.
![Screenshot of the TMSL Script task](images/aas-screenshot-3.png)

## Parameters

Azure Details:

- **Azure Connection Type** - Only Azure Resource Manager is supported
- **Azure RM Subscription** - Which Azure Subscription (Service Endpoint) should be used to connect to the datafactory
- **Resource Group** - To which Resource Group is the Azure Analysis Service model deployed

Analysis Service Details:

- **Analysis Service name** - The name of the Azure Analysis Service server
- **Analysis Services Admin** - The admin user use to connect to the Azure Analysis Service instance
- **Analysis Services Admin Password** - The password of the admin user use to connect to the Azure Analysis Service instance

Script Details:

- **Type** - Type of how the TMSL script is provided: TMSL file or inline.
- **TMSL File** - The TMSL Script file to be executed
- **Inline** - TMSL Script to be executed
- **Folder** - Folder containing TMSL Script files to be executed

## Release notes

### 1.1.2

- New: Folder option added as input
- Bugfix: Replace typo TMSL

### 1.1.0

- New: AAS return messages (error/warning) are used for the tasks logging
- Bugfix: Better logging when exceptions are thrown

### 1.0.0

- Initial public release

## Feedback

If you have any comment related to the documentation, like corrections, unclear features or missing documentation, feel free to leave feedback below via GitHub. Or correct it yourself and submit a PR; see [CONTRIBUTING.md](https://github.com/liprec/azurebi-docs/blob/master/.github/CONTRIBUTING.md) for more details.
*GitHub account required.*

### [**Open**](#tab/docs-open)

### [**Closed**](#tab/docs-closed)

***
