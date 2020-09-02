---
uid: pbi/hierarchyslicer/overview
title: Power BI HierarchySlicer
description: The Power BI HierarchySlicer provides a simple option to select multiple members of different levels of a hierarchy as selection.
tags: [
    { "name": "Hierarchy Slicer" },
    { "name": "HierarchySlicer" }, 
    { "name": "Power BI" },
    { "name": "Visualizations" }
]
system: {
    document_id: 487cd175-be13-40df-a80e-aa1c7f531eb1,
    program_github: liprec/powerbi-hierarchyslicer
}
---
# Power BI HierarchySlicer

## Hierarchyslicer

![HierarchySlicer](images/HierarchySlicer.png)The HierarchySlicer for Power BI provides the opportunity to simple select multiple members of different levels of a hierarchy as selection. The slicer can be used with an existing hierarchy or a manual created hierarchy.

## Example

<iframe width="100%" height="400" src="https://app.powerbi.com/view?r=eyJrIjoiYjYxYTAzMTgtOWI4OS00ZTA2LTk1MDYtZGUwZGUyNzE1OTgxIiwidCI6IjE4NzYxNWY1LWFiYmItNDlhZC1iYjhmLTI1MzM2ZmYxZTk3ZSIsImMiOjh9" frameborder="0" onload="this.height=document.getElementById('_content').offsetWidth/8*6;" allowFullScreen="true"></iframe>

See [here](https://app.powerbi.com/view?r=eyJrIjoiYjYxYTAzMTgtOWI4OS00ZTA2LTk1MDYtZGUwZGUyNzE1OTgxIiwidCI6IjE4NzYxNWY1LWFiYmItNDlhZC1iYjhmLTI1MzM2ZmYxZTk3ZSIsImMiOjh9) for an example if the embedded version is not working.

## Data Fields

The HierarchySlicer needs data it a specific way.

- ![Data fields selection pane](images/HS-DataFields.png)**Fields** - These fields are the base of the hierarchy. Each field will represent a level in the hierarchy
- **Values** - With a value it is possible to (pre)filter the hierarchy to show only members that have a value. Typical scenario: filter a product/category hierarchy with sales. The values are *not* shown in the visual

## Selection

With the selection option the behavior of the hierarchy can be changed

- ![Selection section formatting](images/HS-Selection.png)**Single Select** - When set to true only one member of the hierarchy can be selected. When set to false (default) a multiple selection is possible.
- **Multi-select with CTRL** - If turned on (default) multi-select is possible if the CTRL key in pressed while selecting.
- **Selection type** - Controls the type of selection:
    - *Standard* - Each item can be selected
    - *Leaves* - Only leaves (lowest items) can be selected
- **Hide Members** - Control if items should be hidden to support 'ragged hierarchies'
    - *Never* - Never hide members
    - *Empty* - Hide items if the value is 'empty'. See *'' strings are empty* option for additional options
    - *Parent Name* - Hide items if the value is the same as the parent value 
- **'' strings are empty** - When set to *On* both empty strings ('') and 'null' strings are treaded the same.
- **Select All** - When enabled there is a 'Select All' member the select (or deselect) all the available members.
- **Select All Label** - If the 'Select All' option is enabled this option can be used to alter the label of this member.

## Header

Basic formatting of the header is possible in this section.

- ![Header section formatting](images/HS-Header.png)**On/Off** - Enable the header
- **Title** - Enter a custom header. If left empty the name of the first data field is used as title
- **Show summary** - Add selection summary to the title
- **Font Color** - Font color used for the header [*](#theme-colors)
- **Background** - Background color for the header [*](#theme-colors)
- **Outline** - Option to set the outline around the title: None, Bottom Only, Top Only, Left Only, Right Only, Top + Bottom, Left + Right and Frame
- **Text size** - Text size used for the header
- **Font Family** - Font Family used by the title
- **Font Style** - Font Family used by the title. Options are: Normal and *Italic*
- **Font Weight** - Font Weight used by the title. Options are: <div style="font-weight: 200; display: inline">Light</div>, Normal, <div style="font-weight: 600; display: inline">Semi Bold</div> and **Bold**

## Items

Basic color formatting of the items

- ![Items section formatting](images/HS-Items.png)**Font Color** - Font color used for the items [*](#theme-colors)
- **Checkbox Color** - Color used for the selection checkbox [*](#theme-colors)
- **Hover** - Color use as font color is the items if 'hovered' by the mousepointer [*](#theme-colors)
- **Select Color** - Font color of the selected items [*](#theme-colors)
- **Scrollbar Color** - Color used for the color if the scrollbar [*](#theme-colors)
- **Background** - Background color for the items [*](#theme-colors)
- **Text size** - Text size used for the items
- **Font Family** - Font Family used by the items
- **Font Style** - Font Family used by the items. Options are: Normal and *Italic*
- **Font Weight** - Font Weight used by the items. Options are: <div style="font-weight: 200; display: inline">Light</div>, Normal, <div style="font-weight: 600; display: inline">Semi Bold</div> and **Bold**

## Search box

If Search is enables via the visual menu (...) this option will be available to format the search experiance.

- ![Searchbox section formatting](images/HS-Search.png)**Add to selection** - Enables the option to add the selection made via the search result to be added to the current selection. *Only with multi-select enables*
- **Font Color** - Font color used for the text of the searchbox [*](#theme-colors)
- **Icon Color** - Color used for the icons in the searchbox [*](#theme-colors)
- **Background** - Color used for the background color of the searchbox [*](#theme-colors)
- **Font Family** - Font Family used by the text of the searchbox
- **Text size** - Text size used for the text of the searchbox

## Zoom mode

Configuration of the 'zoom mode' that can be enabled by double clicking on the slicer title

- ![Zoom mode formatting](images/HS-Zoom.png)**Enable** - Option to enable zoom mode directly
- **Header** - Option to enable zoom mode via double tap/click on the title
- **Enlarge** - Define how many the slicer needs to be enlarges: 25%, 50% or 100%.

## Tooltips

- **Icon** - Defines which icon should be shown to trigger the (report page) tooltips
    - *Information* - Uses a small 'i' as tooltip icon
    - *Trangle* - Uses a small trangle icon as tooltip icon
    - *Horizontal dots* - Uses a three horizontal dots as tooltip icon
    - *Vertical dots* - Uses a three vertical dots as tooltip icon\
- **Icon Color** - Color used for the tooltip icons [*](#theme-colors)

## Theme colors

The HierarchySlicer uses the colorpalette of the choosen Power BI theme, [see](https://docs.microsoft.com/en-us/power-bi/create-reports/desktop-report-themes?WT.mc_id=DP-MVP-5003419#setting-structural-colors):

| Color class           | What it formats                        |
|-----------------------|----------------------------------------|
| firstLevelElements    | Search / Header font                   |
| secondLevelElements   | Item font                              |
| fourthLevelElements   | Color of the scrollbar                 |
| foregroundNeutralDark | Item font when selected                |
| backgroundNeutral     | Linecolor of the selection icons       |
| secondaryBackground   | Search line color / Tooltip icon color |
| backgroundLight       | Line color of header                   |

## Limitations

The current version (v2.0) has the following limitations

- Visualize the slicer as a dropdown will not happen as the API doesn't support this

## Changelog

See for the list of changes [here](xref:pbi/hierarchyslicer/changelog).

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
