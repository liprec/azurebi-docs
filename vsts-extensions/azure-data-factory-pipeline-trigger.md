---
uid: vsts/azuredatafactory/pipelinetrigger
title: Azure Data Factory Pipeline Trigger
description: This task can be added to an Azure DevOps pipeline to trigger Azure Data Factory pipeline(s) run of an existing Azure Data Factory.
tags: [
    { "name": "AzureDevOps" },
    { "name": "azure-pipelines" },
    { "name": "Azure" },
    { "name": "release" },
    { "name": "pipelines" },
    { "name": "data factory" }
]
system: {
    document_id: faf75e4f-aed9-4dbc-8ecc-5581a475ef79,
    program_github: liprec/vsts-publish-adf
}
---

# Azure Data Factory Pipeline Trigger

This task can be added to an Azure DevOps pipeline to trigger Azure Data Factory pipeline(s) run of an existing Azure Data Factory.

## YAML Snippet

```yaml
# Azure Data Factory Trigger Pipeline
# Trigger a Azure Data Factory pipeline run
- task: trigger-adf-pipeline@2
  displayName: 'Trigger pipeline run DataFactory'
  inputs:
    #azureSubscription: # Required
    #ResourceGroupName: # Optional
    #DatafactoryName: # Optional
    #WorkspaceUrl: # Optional - Either 'WorkspaceUrl' or 'ResourceGroupName'/'DatafactoryName' is required
    #PipelineFilter: # Required
    #PipelineParameterType: 'Inline' # Options: inline, path
    #PipelineParameter: # Optional
    #PipelineParameterPath: # Required when PipelineParameterType == path    
    #DeploymentOutputs: # Optional
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
| `PipelineFilter`<br>Pipeline Filter | (Required) Wildcard filter to determine which pipeline to trigger execution.<br>`*`: all pipeline will be triggered.|
| `PipelineParameterType`<br>Pipeline Parameter Location| (Required) Location of the (optional) pipeline trigger parameters, can be Inline or Path.<br>Default vale: `inline`|
| `PipelineParameter`<br>Pipeline Parameter| (Optional) Additional pipeline parameters in JSON format.|
| `PipelineParameterPath`<br>Pipeline Parameter Path | (Required when Pipeline Filter is Path) Fully qualified path of the JSON file with additional pipeline parameters.|
| `DeploymentOutputs`<br>Deployment outputs | (Optional) Provide a name for the variable for the output variable which will contain the RUN IDs of the package triggers in string format. You can use the `ConvertFrom-Json` PowerShell cmdlet to parse the JSON object and access the individual RUN IDs.|
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
- Initial public release

## Feedback

If you have any comment related to the documentation, like corrections, unclear features or missing documentation, feel free to leave feedback below via GitHub. Or correct it yourself and submit a PR; see [CONTRIBUTING.md](https://github.com/liprec/azurebi-docs/blob/master/.github/CONTRIBUTING.md) for more details.
*GitHub account required.*

### [**Open**](#tab/docs-open)

### [**Closed**](#tab/docs-closed)

***
