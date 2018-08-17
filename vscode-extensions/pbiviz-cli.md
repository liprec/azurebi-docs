---
uid: vscode/pbiviz/overview
title: PBIViz CLI Control Visual Studio Code extension
description: This Visual Studio Code extension adds the option to directly interact with the PowerBI Visual tools.
tags: [
    { "name": "VSCode" }, 
    { "name": "Power BI" },
    { "name": "Custom Visuals" },
    { "name": "pbiviz" }
]
system: {
    document_id: 0bf7dd81-9eed-4035-a928-c3afe7c31e2d,
    program_github: liprec/vscode-start-pbiviz
}
---
# PBIViz CLI Control

This Visual Studio Code extension adds the option to directly interact with the PowerBI Visual tools ([*pbiviz*](https://github.com/Microsoft/PowerBI-visuals-tools))
for developing Power BI Custom Visuals without leaving Visual Studio Code.

## Features

Add 'build-in' support for *pbiviz* in Visual Studio Code.

- Start *pbiviz* and load the Power BI Custom Visual [(]Ctrl+F8]
- Restart *pbiviz* and reload the new Power BI Custom Visual code [Ctrl+Shift+F8]
- Stop *pbiviz* [Ctrl+F9]
- Package Power BI Custom Visual [Ctrl+Shift+B]
- Update Power BI Custom Visual API

## Requirements

The PowerBI Visual Tools (pbiviz) should be installed before this extension can be used. 
See [the Power BI Visual Tools Readme](https://github.com/Microsoft/PowerBI-visuals-docs/blob/master/tools/README.md#installation)
for more information on how to install the tools.

## Known issues

An stack trace is shown in the output if *pbiviz* is started the second time: I have not yet found a good way to
determine if *pbiviz* is running and it cannot be started multiple times. 

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
