---
uid: vsts/azuredatafactory/delete
title: Azure Data Factory Delete Items
description: This task can be added to an Azure DevOps pipeline to delete Linked Services, Datasets, Dataflows, Pipelines and/or Triggers from an existing Azure Data Factory or Azure Synapse Workspace.
tags:
  [
    { "name": "AzureDevOps" },
    { "name": "azure-pipelines" },
    { "name": "Azure" },
    { "name": "release" },
    { "name": "pipelines" },
    { "name": "data factory" },
    { "name": "Synapse" }
  ]
system:
  {
    document_id: 5faa75e7-bfc2-4ba0-a07f-6f06563724ca,
    program_github: liprec/vsts-publish-adf,
  }
---

# Azure Data Factory Delete Items

This task can be added to an Azure DevOps pipeline to delete Linked Services, Datasets, Dataflows, Pipelines and/or Triggers from an existing Azure Data Factory or Azure Synapse Workspace.

## YAML Snippet

```yaml
# Azure Data Factory Delete Items
# Delete Azure Data Factory items
- task: delete-adf-items@2
  displayName: "Delete items from DataFactory"
  inputs:
    #azureSubscription: # Required
    #ResourceGroupName: # Optional
    #DatafactoryName: # Optional
    #WorkspaceUrl: # Optional - Either 'WorkspaceUrl' or 'ResourceGroupName'/'DatafactoryName' is required
    #ServiceFilter: # Optional
    #DataflowFilter: # Optional
    #DatasetFilter: # Optional
    #PipelineFilter: # Optional
    #TriggerFilter: # Optional
    #Sorting: descending # Option: Ascending, Descending
    #continue: true # Optional
    #Throttle: 5 # Optional
    #detectDependancy: false # Option: true, false
```

## Arguments

| Argument                                                     | Description                                                                                                                            |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `azureSubscription`<br>Azure subscription                    | (Required) Name of Azure Resource Manager service connection.                                                                          |
| `ResourceGroupName`<br>Resource group                        | (Optional) Name of the Resource Group containing the Data Factory.                                                                     |
| `DatafactoryName`<br>Azure Data Factory                      | (Optional) Name of the Data Factory.                                                                                                   |
| `WorkspaceUrl`<br>Synapse workspace development endpoint URL | (Optional) Name of the Synapse workspace development endpoint, eg. https://myworkspace.dev.azuresynapse.net"                           |
| `ServiceFilter`<br>Filter to Linked Service definitions      | (Optional) Wildcard filter to determine which Linked Service(s) to delete.<br>`*`: all triggers will be deleted                        |
| `DataflowFilter`<br>Filter to Data flow definitions          | (Optional) Wildcard filter to determine which Data flow(s) to delete.<br>`*`: all triggers will be deleted                             |
| `DatasetFilter`<br>Filter to Dataset definitions             | (Optional) Wildcard filter to determine which Dataset(s) to delete.<br>`*`: all triggers will be deleted                               |
| `PipelineFilter`<br>Filter to Pipeline definitions           | (Optional) Wildcard filter to determine which Pipeline(s) to delete.<br>`*`: all triggers will be deleted                              |
| `TriggerFilter`<br>Filter to Trigger definitions             | (Optional) Wildcard filter to determine which Trigger(s) to delete.<br>`*`: all triggers will be deleted                               |
| `Sorting`<br>Set sorting direction of the deploy order       | (Optional) Sort order of the items to be deleted, can be Ascending or Descending.<br>Default value: `descending`                       |
| `continue`<br>Continue on error                              | (Optional) Continue on a failure of a pipeline trigger.<br>Default value: `false`                                                      |
| `Throttle`<br>Number of parallel actions                     | (Optional) Number of parallel actions.<br>Default value: `5`.                                                                          |
| `detectDependancy`<br>Detect object dependancy               | Option to scan deployment files to detect dependancy between the same objects types. This dependancy is used to sort the deploy order. |

## Additional notes

- The task can detect the dependencies between items of the same type if `detectDependancy` is set to `true`. If there is a dependency detected, the task is using multiple 'chunks' to deploy the artifacts.
- The delete task will start deleting items in to following order:
  - Triggers
  - Pipelines
  - Data flows
  - Datasets
  - Linked Servces

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
_GitHub account required._

### [**Open**](#tab/docs-open)

### [**Closed**](#tab/docs-closed)

---
