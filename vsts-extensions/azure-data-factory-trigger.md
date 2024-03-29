---
uid: vsts/azuredatafactory/trigger
title: Azure Data Factory Trigger
description: This release task can be added to a release pipeline to either start or stop Azure Data Factory or Azure Synapse Workspace triggers.
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
    document_id: df2f37bb-fec0-4b8e-a348-b14464d9ced1,
    program_github: liprec/vsts-publish-adf
}
---

# Azure Data Factory Trigger

This release task can be added to a release pipeline to either start or stop Azure Data Factory or Azure Synapse Workspace triggers.

## YAML Snippet

```yaml
# Azure Data Factory Trigger
# Start or stops an Azure Data Factory trigger
- task: toggle-adf-trigger@2
  displayName: 'Toggle trigger(s) in DataFactory'
  inputs:
    #azureSubscription: # Required
    #ResourceGroupName: # Optional
    #DatafactoryName: # Optional
    #WorkspaceUrl: # Optional - Either 'WorkspaceUrl' or 'ResourceGroupName'/'DatafactoryName' is required
    #TriggerFilter: # Required
    #TriggerStatus: 'Start' # Options: start, stop
    #continue: true # Optional
    #Throttle: 5 # Optional
```

## Arguments

| Argument | Description |
|----------|-------------|
| `azureSubscription`<br>Azure subscription | (Required) Name of Azure Resource Manager service connection.|
| `ResourceGroupName`<br>Resource group | (Optional) Name of the Resource Group containing the Data Factory.|
| `DatafactoryName`<br>Azure Data Factory | (Optional) Name of the Data Factory.|
| `WorkspaceUrl`<br>Synapse workspace development endpoint URL | (Optional) Name of the Synapse workspace development endpoint, eg. https://myworkspace.dev.azuresynapse.net"|
| `TriggerFilter`<br>Trigger Filter | (Required) Wildcard filter to determine which triggers to toggled.<br>`*`: all triggers will be deleted.|
| `TriggerStatus`<br>Set Trigger Status| (Required) The new status of the Azure Data Factory Trigger(s), can be Start or Stop.<br>Default vale: `start`|
| `continue`<br>Continue on error | (Optional) Continue on a failure of a pipeline trigger.<br>Default value: `false`|
| `Throttle`<br> Number of parallel actions| (Optional) Number of parallel actions.<br>Default value: `5`.|

## Release notes

### 2.5

- Support for Governmnet Clouds
- Support for Azure Synapse Analytics

### 2.2

- Added paging support for data factories with more than 50 pipelines

### 2.0

- Rewrite to platform independent version by using NodeJS and REST APIs
- This version only support Azure Data Factory v2

### 1.0.4

- Initial public release

## Feedback

If you have any comment related to the documentation, like corrections, unclear features or missing documentation, feel free to leave feedback below via GitHub. Or correct it yourself and submit a PR; see [CONTRIBUTING.md](https://github.com/liprec/azurebi-docs/blob/master/.github/CONTRIBUTING.md) for more details.
*GitHub account required.*

### [**Open**](#tab/docs-open)

### [**Closed**](#tab/docs-closed)

***
