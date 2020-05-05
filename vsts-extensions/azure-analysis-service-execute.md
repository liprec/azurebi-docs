---
uid: vsts/azureanalysisservice/execute
title: Azure Analysis Service TMSL Script
description: Azure DevOps task can be added to a pipeline to execute a custom TMSL script against an Azure Analysis Service instance.
tags: [
    { "name": "AzureDevOps" },
    { "name": "azure-pipelines" }, 
    { "name": "Azure" },
    { "name": "release" },
    { "name": "pipelines" },
    { "name": "Analysis Service" },
    { "name": "TMSL" }
]
system: {
    document_id: 4745ea49-bbab-4a8c-96b3-408aa7f688bb
}
---

# Azure Analysis Service TMSL Script

Azure DevOps task can be added to a pipeline to execute a custom TMSL script against an Azure Analysis Service instance.

## YAML Snippet

```yaml
# Azure Analysis Service TMSL Script
# Deploy an Azure Analysis Service modek=l
- task: liprec.vsts-release-aas.execute-aas-tsml.execute-aas-tsml@1
 displayName: 'Executes a TMSL Script'
  inputs:
    #ConnectedServiceNameARM: # Required
    #aasServer: # Required
    #loginType: user # Option: user, spn
    #adminName: # Required when loginType == user
    #adminPassword: # Required when loginType == user
    #tenantId: # Required when loginType == spn
    #appId: # Required when loginType == spn
    #appKey: # Required when loginType == spn
    #queryType: # Option: tsml, inline, folder
    #tmslFile: # Required when queryType == tsml
    #tmslScript: # Required when queryType == inline
    #tmslFolder: # Required when queryType == folder
    #ipDetectionMethod: autoDetect # Option: autoDetect, ipAddressRange
    #startIpAddress: # Required when ipDetectionMethod == ipAddressRange
    #endIpAddress: # Required when ipDetectionMethod == ipAddressRange
    #deleteFirewallRule: true # Optional
    #azurePowerShellVersion: latestVersion # Option: latestVersion, otherVersion
    #preferredAzurePowerShellVersion: # Required when targetAzurePs == otherVersion
```

## Arguments

| Argument | Description |
|----------|-------------|
| `ConnectedServiceNameARM`<br>Azure RM Subscription | (Required) Name of Azure Resource Manager service connection.|
| `aasServer`<br>Analysis Services name | (Required) Name of the Azure Analysis Services name.|
| `loginType`<br>Login type | (Required) Type of account used to access the AAS instance, can be Named User or Service Principal.<br>Default: `user`|
| `adminName`<br>Analysis Services Admin | (Required when Login type is Named User) The Azure Analysis Service admin username.|
| `adminPassword`<br>Analysis Services Admin Password | (Required when Login type is Named User) Password of the Azure Analysis Service admin.|
| `tenantId`<br>Azure AD TenantID | (Required when Login type is Service Principal) Azure AD TenantID of the service principal.|
| `appId`<br>Application ID | (Required when Login type is Service Principal) Application ID of the service principal.|
| `appKey`<br>Application Key | (Required when Login type is Service Principal) Application secret of the service principal.|
| `queryType`<br>Type | (Required) Option what type contains the TMSL query.|
| `tmslFile`<br>TMSL File | (Required when Type is TMSL Script File) Full qualified path the TMSL file.|
| `tmslScript`<br>Inline TMSL Script | (Required when Type is Inline TMSL Script) Enter the TMSL script to execute on the Azure Analysis Service instance selected above.|
| `tmslFolder`<br>Path to Folder | (Required when Type is Folder with TMSL Files) Enter the path to a folder with the TMSL script to needs to be execute on the Azure Analysis Service instance selected above.|
| `ipDetectionMethod`<br>Specify Firewall Rules Using | (Required) Type of Firewall deployment. Can be Auto Detect or IP Address Range.<br>Default: `Auto Detect`|
| `startIpAddress`<br>Start IP Address | (Required when Specify Firewall Rules Using is IP Address Range) The starting IP Address of the automation agent machine pool like 196.21.30.50 |
| `endIpAddress`<br>End IP Address | (Required when Specify Firewall Rules Using is IP Address Range) The ending IP Address of the automation agent machine pool like 196.21.30.65|
| `deleteFirewallRule`<br>Delete Rule After Task Ends | (Optional) If selected, the added exception for IP addresses of the automation agent will be removed.<br>Default: `true`|
| `azurePowerShellVersion`<br>Azure PowerShell Version | (Required) Pick the latest version available on the agent or specify a preferred version of Azure PowerShell, can be  Latest installed version or Specify version.<br>Alias: `targetAzurePs`<br>Default: `Latest installed version`|
| `preferredAzurePowerShellVersion`<br>Preferred Azure PowerShell Version | (Required when Azure PowerShell Version is Specify version) Preferred Azure PowerShell Version needs to be a proper semantic version eg. 1.2.3.<br>Alias: `customTargetAzurePs`|

## Additional notes

- In the first release there has been a typo in TMSL, so the `queryType` still contain a typo in the TMSL Script File option (`tsml`)

## Release notes

### 1.3

- Add extra removal of firewall leftovers

### 1.2.0

- Add support for service principal deployments
- Add support for adding firewall rules

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
