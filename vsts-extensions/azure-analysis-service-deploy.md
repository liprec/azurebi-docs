---
uid: vsts/azureanalysisservice/deploy
title: Azure Analysis Service deployment
description: Visual Studio Team Service deploy task that will deploy a Azure Analysis Service Model to an existing Azure Analysis Service.
tags: [
    { "name": "VSTS" }, 
    { "name": "Azure" },
    { "name": "release" },
    { "name": "Analysis Service" }
]
system: {
    document_id: 4381b0c0-3a30-42ba-ad70-47e99b1994e1
}
---
# Azure Analysis Service deployment

Visual Studio Team Service deploy task that will deploy a Azure Analysis Service Model to an existing Azure Analysis Service.
![Screenshot of Azure Analusis Service deploy task](images/aas-screenshot-2.png)

*NOTE: At this moment the task only supports 1 SQL Server connection*
*Support for more types of connection is in development*

## Parameters

Azure Details:

- **Azure Connection Type** - Only Azure Resource Manager is supported
- **Azure RM Subscription** - Which Azure Subscription (Service Endpoint) should be used to connect to the datafactory
- **Resource Group** - To which Resource Group is the Azure Analysis Service model deployed

Analysis Service Details:

- **Analysis Service name** - The name of the Azure Analysis Service server
- **Analysis Services Admin** - The admin user use to connect to the Azure Analysis Service instance
- **Analysis Services Admin Password** - The password of the admin user use to connect to the Azure Analysis Service instance

Data Source Connection Detailss:

- **Data Source Type** - Type of the first data source defined in the model. SQL is for now the only option.
- **Source Azure SQL Server Name** - The servername of the Azure SQL database server
- **Source Database Name** - The database name
- **Source User Login** - The username used for the connection by the model for trhe connection to the source database
- **Source Password** - The password for the given username

Advanced:

- **Overwrite** - Option to overwrite existing model with the new one.
- **Remove** - Option to remove the old model before deploying a new one.

## Tested configuration

At this moment the following configuration are tested and working:

- Model 1400 and a single SQL Server database as datasource

More configuration will follow. Feel free to contact me for a specific configuration.

## Release notes

### 1.1.2

- Model files are readed with UTF8 encoding

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
