---
uid: pbi/hierarchyslicer/changelog
title: Changelog Power BI Hierarchy Slicer
description: Changelog of the Power BI custom visual HierarchySlicer.
tags: [
    { "name": "Hierarchy Slicer" },
    { "name": "HierarchySlicer" }, 
    { "name": "Power BI" },
    { "name": "Visualizations" }
]
system: {
    document_id: e7e0e95e-f3f0-4112-9a46-fde2a59d2d51
}
---
# Changelog Hierarchy Slicer

Of the HierarchySlicer Power BI custom visualization the following versions are released with the following new features, changes and bug fixes.

## Custom Visual Validation Process
![Custom Visual Validation Process](images/ValidationProcess.png)
*NOTE: All Power BI gallery visuals are distributed via the Azure CDN network and this will cause a delay of max a couple of days in delivering a new version.*

## 2.1.1 - (July 2020)

### NEW

- Support for single-select and multi-select via the Ctrl-key
- Support for only electing leaf level items
- Default color are now inherited of the theme, [see](xref:pbi/hierarchyslicer/overview)

## CHANGED

- Support for Report Page tooltips
- Tooltips now only triggered via additional icon
- Change in databinding, in rare situation this can cause issues. Please recreate the hierarchy to solve this

## 2.0.18 - (October 2019)

### NEW

- Certified custom visual (export capabilities in email and PowerPoint)
- Added optional tooltips - Page tooltips not yet supported
- Added software tests and TypeScript option `strictNullChecks=true` for a more robust version

### CHANGED
- Rewritten and uses the new Power BI API v2.5.0
- Rewritten (internal) filter logic for support to `ISFILTERED()` DAX function

### FIXED

- Fixed item sorting issue

## 1.3.0 - (28 August 2018)

### NEW

- Support for High Contrast mode
- Add Title Restatement option
- Header outline can be changed

### CHANGED

- Single level selections will return only the selection on that level, e.g. support for `ISFILTERED()`.

 Example: selecting **2018** at the **Year** level in a date Hierarchy only returns a filter `Year=2018`
- Entering Focus Mode automatically 'zooms in'
- Renamed 'Mobile view' settings to 'Zoom mode'

### FIXED

- Select All and Search are not working together
- Returning from Focus Mode loses selection drawing
- Incorrectly selecting multiple members with almost the same label

## 1.2.9 - (3 July 2018)

### NEW

- Added bookmark support
- Increased number of item to 30,000
- Formatting options for search
- Mobile Friendly options added

### CHANGED

- Search selection is 'added to current selection'
- Better support for black theming

### FIXED

- Expanders visible at leaf level with ragged hierarchies

## 1.1.5 - (12 October 2017)

### FIXED

- Single select not working properly
- Deselect last selected member causes an error

## 1.1.3 - (11 October 2017)

### FIXED

- Header issues in Chrome

## 1.1.2 - (5 October 2017)

### FIXED

- Expand all / Collapse All / Clear button do not work
- Measure value is added to hierarchy
- Single Select / Empty level option is not working as expected

## 1.1.0 - (27 September 2017)

### NEW

- 'Select All' level is added
- Option to set the 'Hover Color'
- Indicator for partial selected levels

### CHANGED

- Better support for black theming
- Updated icon set with scaling support

### FIXED

- Scrolling issue in Power BI Desktop
- Selected color not persisted
- Power BI icons overwritten

## 1.0.6.0 - (4 August 2017)

### FIXED

- Fixed 'Unexpected Error' bug in Power BI Desktop

## 1.0.3.0 - (25 July 2017)

### NEW

- Show/hide header
- Show/hide '(blank) levels ('Ragged' hierarchies)

### FIXED

- Scrolling issues are now fixed

## 1.0.0.0

- First release to the Office Store (v0.7.10)

## 0.7.10 - (4 May 2017)

### FIXED

- Wrong selection with search enabled
- Scrolling issue with increased font size
- Sometimes incorrect sorting (removed)
- Value filter is not working

## 0.7.9 - (24 August 2016)

### NEW

- Adding search support
- Configurable selected item font color

### FIXED

- Expand/collapse fixed in IE11
- Filter selection saves with report

## 0.7.4 - (19 July 2016)

### NEW

- Expand and collapse hierarchy levels
- Multi-select available on all hierarchies
- Configurable font / size and background for items and header
- Filter hierarchy with a value

### FIXED

- Filter selection saved with report

## 0.6.0 – (31 May 2016)

Initial release

## Feedback

If you have any comment related to the documentation, like corrections, unclear features or missing documentation, feel free to leave feedback below via GitHub. Or correct it yourself and submit a PR; see [CONTRIBUTING.md](https://github.com/liprec/azurebi-docs/blob/master/.github/CONTRIBUTING.md) for more details.
*GitHub account required.*

### [**Open**](#tab/docs-open)

### [**Closed**](#tab/docs-closed)

***
