---
uid: vsts/azureanalysisservice/deploy
title: Azure Analysis Service deployment
description: Azure DevOps pipeline task that will deploy a Azure Analysis Service Model to an existing Azure Analysis Service.
tags: [
    { "name": "AzureDevOps" },
    { "name": "azure-pipelines" }, 
    { "name": "Azure" },
    { "name": "release" },
    { "name": "pipelines" },
    { "name": "Analysis Service" }
]
system: {
    document_id: 4381b0c0-3a30-42ba-ad70-47e99b1994e1
}
---
# Azure Analysis Service deployment

Visual Studio Team Service deploy task that will deploy a Azure Analysis Service Model to an existing Azure Analysis Service.

## YAML Snippet

```yaml
# Azure Analysis Service deployment
# Deploy an Azure Analysis Service model
- task: liprec.vsts-release-aas.deploy-aas-db.deploy-aas-db@1
 displayName: 'Deploy model'
  inputs:
    #ConnectedServiceNameARM: # Required
    #aasServer: # Required
    #modelName: # Optional
    #loginType: 'User' # Option: user, spn
    #adminName: # Required when loginType == user
    #adminPassword: # Required when loginType == user
    #tenantId: # Required when loginType == spn
    #appId: # Required when loginType == spn
    #appKey: # Required when loginType == spn
    #pathToModel: # Required
    #connectionType: none # Option: none, sql
    #sourceSQLServer: # Required when loginType == sql
    #sourceSQLDatabase: # Required when loginType == sql
    #sourceSQLUsername: # Required when loginType == sql
    #sourceSQLPassword: # Required when loginType == sql
    #ipDetectionMethod: autoDetect # Option: autoDetect, ipAddressRange
    #startIpAddress: # Required when ipDetectionMethod == ipAddressRange
    #endIpAddress: # Required when ipDetectionMethod == ipAddressRange
    #deleteFirewallRule: true # Optional
    #overwrite: true # Optional
    #remove: false # Optional
    #azurePowerShellVersion: latestVersion # Option: latestVersion, otherVersion
    #preferredAzurePowerShellVersion: # Required when targetAzurePs == otherVersion
```

## Arguments

| Argument | Description |
|----------|-------------|
| `ConnectedServiceNameARM`<br>Azure RM Subscription | (Required) Name of Azure Resource Manager service connection.|
| `aasServer`<br>Analysis Services name | (Required) Name of the Azure Analysis Services name.|
| `modelName`<br>Model Name | (Optional) Name of the Analysis Services Model. Will overwrite the model name in the .bim file.|
| `loginType`<br>Login type | (Required) Type of account used to access the AAS instance, can be Named User or Service Principal.<br>Default: `user`|
| `adminName`<br>Analysis Services Admin | (Required when Login type is Named User) The Azure Analysis Service admin username.|
| `adminPassword`<br>Analysis Services Admin Password | (Required when Login type is Named User) Password of the Azure Analysis Service admin.|
| `tenantId`<br>Azure AD TenantID | (Required when Login type is Service Principal) Azure AD TenantID of the service principal.|
| `appId`<br>Application ID | (Required when Login type is Service Principal) Application ID of the service principal.|
| `appKey`<br>Application Key | (Required when Login type is Service Principal) Application secret of the service principal.|
| `pathToModel`<br>Model file | (Required) Full qualified path the `model.bim` file.|
| `connectionType`<br>Data Source Type | (Required) Type of connection to model datasource. Currently it can only be None or Azure SQL.|
| `sourceSQLServer`<br>Source Azure SQL Server Name | (Required when Data Source Type is Azure SQL) Azure SQL Server name.|
| `sourceSQLDatabase`<br>Source Database Name | (Required when Data Source Type is Azure SQL) Name of the Azure SQL Database, where the files will be deployed.|
| `sourceSQLUsername`<br>Source User Login | (Required when Data Source Type is Azure SQL) Specify the Azure SQL Server user login.|
| `sourceSQLPassword`<br>Source Password | (Required when Data Source Type is Azure SQL) Password for the Azure SQL Server user. It can accept variable defined as `$(passwordVariable)`. You may mark the variable type as 'secret' to secure it.|
| `ipDetectionMethod`<br>Specify Firewall Rules Using | (Required) Type of Firewall deployment. Can be Auto Detect or IP Address Range.<br>Default: `Auto Detect`|
| `startIpAddress`<br>Start IP Address | (Required when Specify Firewall Rules Using is IP Address Range) The starting IP Address of the automation agent machine pool like 196.21.30.50 |
| `endIpAddress`<br>End IP Address | (Required when Specify Firewall Rules Using is IP Address Range) The ending IP Address of the automation agent machine pool like 196.21.30.65|
| `deleteFirewallRule`<br>Delete Rule After Task Ends | (Optional) If selected, the added exception for IP addresses of the automation agent will be removed.<br>Default: `true`|
| `overwrite`<br>Overwrite | (Optional) Overwrites the existing model.<br>Default: `true`|
| `remove`<br>Remove before Deploy | (Optional) Remove the model before a new deployment.<br>Default: `false`|
| `azurePowerShellVersion`<br>Azure PowerShell Version | (Required) Pick the latest version available on the agent or specify a preferred version of Azure PowerShell, can be  Latest installed version or Specify version.<br>Alias: `targetAzurePs`<br>Default: `Latest installed version`|
| `preferredAzurePowerShellVersion`<br>Preferred Azure PowerShell Version | (Required when Azure PowerShell Version is Specify version) Preferred Azure PowerShell Version needs to be a proper semantic version eg. 1.2.3.<br>Alias: `customTargetAzurePs`|

## Additional notes

- At this moment the task only supports 1 SQL Server connection *Support for more types of connection is in development*. 
- At this moment the following configuration are tested and working:
    - Model 1400 and a single SQL Server database as datasource

More configuration will follow. Feel free to contact me for a specific configuration.

## Release notes

### 1.3

- Bug fix for Remove before Deploy
- Add extra removal of firewall leftovers

### 1.2

- Add support for service principal deployments
- Add support for adding firewall rules

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
