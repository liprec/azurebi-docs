---
uid: vsts/azureanalysisservice/changelog
title: Changelog Analysis Service Azure pipeline extension
description: Changelog Analysis Service Azure pipeline extension for Azure DevOps
tags: [
    { "name": "Azure" },
    { "name": "pipelines" },
    { "name": "Azure pipelines" },
    { "name": "Analysis Service" },
    { "name": "Power BI Premium" },
    { "name": "XMLA" },
    { "name": "Azure DevOps" }
]
system: {
    document_id: 1e420afa-d6e5-4298-9006-e0c8796b7f92
}
---
# Changelog Analysis Service Azure pipeline extension

Of the Analysis Service Azure pipeline extension the following versions are released with the following new features, changes and bug fixes.

## History

### 1.5 - December 2021
- Rewritten to Powershell 5.1 (powershell.exe) and ADOMD + TOM
- Support for Power BI Premium XMLA endpoints
- Support for multiple datasources
- Support for merging of roles + members and partitions

### 1.3 - May 2020

- Bug fix for Remove before Deploy
- Add extra removal of firewall leftovers

### 1.2.0 - March 3rd, 2019

- Add support for service principal deployments
- Add support for adding firewall rules

### 1.1.3 - November 27th, 2017

- New: Execute TMSL Script can now have a folder with scripts as input
- Bugfix: Corrected typo TMSL

### 1.1.0

- New: AAS return messages (error/warning) are used for the tasks logging
- Bugfix: Better logging when exceptions are thrown

### 1.0.1

- Initial public release

## Feedback

If you have any comment related to the documentation, like corrections, unclear features or missing documentation, feel free to leave feedback below via GitHub. Or correct it yourself and submit a PR; see [CONTRIBUTING.md](https://github.com/liprec/azurebi-docs/blob/master/.github/CONTRIBUTING.md) for more details.
*GitHub account required.*

### [**Open**](#tab/docs-open)

### [**Closed**](#tab/docs-closed)

***
