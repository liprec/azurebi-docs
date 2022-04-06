---
uid: vsts/azuredatafactory/deploy
title: Azure Data Factory Deployment
description: This task can be added to an Azure DevOps pipeline to deploy JSON files with definition of Linked Services, Datasets, Dataflows, Pipelines and/or Triggers to an existing Azure Data Factory.
tags: [
    { "name": "AzureDevOps" },
    { "name": "azure-pipelines" },
    { "name": "Azure" },
    { "name": "release" },
    { "name": "pipelines" },
    { "name": "data factory" }
]
system: {
    document_id: 5faa75e7-bfc2-4ba0-a07f-6f06563724ca,
    program_github: liprec/vsts-publish-adf
}
---

# Azure Data Factory Deployment

This task can be added to an Azure DevOps pipeline to deploy JSON files with definition of Linked Services, Datasets, Dataflows, Pipelines and/or Triggers to an existing Azure Data Factory.

## YAML Snippet

```yaml
# Azure Data Factory Deployment
# Deploy Azure Data Factory JSON definitions
- task: deploy-adf-json@2
  displayName: 'Deploy JSON files to DataFactory'
  inputs:
    #azureSubscription: # Required
    #ResourceGroupName: # Optional
    #DatafactoryName: # Optional
    #WorkspaceUrl: # Optional - Either 'WorkspaceUrl' or 'ResourceGroupName'/'DatafactoryName' is required
    #ServicePath: # Optional
    #DataflowPath: # Optional
    #DatasetPath: # Optional
    #PipelinePath: # Optional
    #TriggerPath: # Optional
    #Sorting: ascending # Option: Ascending, Descending
    #continue: true # Optional
    #Throttle: 5 # Optional
    #detectDependancy: false # Option: true, false
```

## Arguments

| Argument | Description |
|----------|-------------|
| `azureSubscription`<br>Azure subscription | (Required) Name of Azure Resource Manager service connection.|
| `ResourceGroupName`<br>Resource group | (Optional) Name of the Resource Group containing the Data Factory.|
| `DatafactoryName`<br>Azure Data Factory | (Optional) Name of the Data Factory.|
| `WorkspaceUrl`<br>Synapse workspace development endpoint URL | (Optional) Name of the Synapse workspace development endpoint, eg. https://myworkspace.dev.azuresynapse.net"|
| `ServicePath`<br>Path to Linked Service definitions | (Optional) Fully qualified path of the file or folder containing Linked Service JSON definitions.|
| `DataflowPath`<br>Path to Data flow definitions | (Optional) Fully qualified path of the file or folder containing Data flow JSON definitions.|
| `DatasetPath`<br>Path to Dataset definitions | (Optional) Fully qualified path of the file or folder containing Dataset JSON definitions.|
| `PipelinePath`<br>Path to Pipeline definitions | (Optional) Fully qualified path of the file or folder containing Pipeline JSON definitions.|
| `TriggerPath`<br>Path to Trigger definitions | (Optional) Fully qualified path of the file or folder containing Trigger JSON definitions.|
| `Sorting`<br>Set sorting direction of the deploy order | (Optional) Order of the filenames in which the definitions are deployed, can be Ascending or Descending.<br>Default value: `ascending`|
| `continue`<br>Continue on error | (Optional) Continue on a failure of a pipeline trigger.<br>Default value: `false`|
| `Throttle`<br> Number of parallel actions| (Optional) Number of parallel actions.<br>Default value: `5`.|
| `detectDependancy`<br>Detect object dependancy | Option to scan deployment files to detect dependancy between the same objects types. This dependancy is used to sort the deploy order. |

## Additional notes

- The task doesn't know any dependencies between items of the same type. If dependancy is needed, this has to be solved in either the item names or use multiple tasks. So if **pipeline B** reference **pipeline A**, **pipeline B** needs to be deleted *before* **pipeline A**.

- The deploy task will start deloying items in to following order:
    - Linked Servces
    - Datasets
    - Data flows
    - Pipelines
    - Triggers

## Release notes

### 2.5

- Support for Governmnet Clouds
- Support for Azure Synapse Analytics

### 2.2

- Added paging support for data factories with more than 50 pipelines

### 2.0

- Rewrite to platform independent version by using NodeJS and REST APIs
- This version only support Azure Data Factory v2

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
