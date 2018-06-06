# Contributing to the AzureBI documentation

This document covers the process for contributing to the articles and code samples that are hosted on the [AzureBI documentation site](https://azurebi-docs.jppp.org). Contributions may be as simple as typo corrections or as complex as new articles.

## How to make a simple correction or suggestion

Articles are stored in the repository as Markdown files. Simple changes to the content of a Markdown file can be made in the browser by selecting the **Edit** link in the upper right corner of the browser window. (In narrow browser windows you'll need to expand the **options** bar to see the **Edit** link.) Follow the directions to create a pull request (PR). We will review the PR and accept it or suggest changes.

## How to make a more complex submission

You'll need a basic understanding of [Git and GitHub.com](https://guides.github.com/activities/hello-world/).

* Open an [issue](https://github.com/liprec/azurebi-docs/issues/new) describing what you want to do, such as change an existing article or create a new one. Wait for approval from the team before you invest much time.
* Fork the [azurebi-docs](https://github.com/liprec/azurebi-docs/) repo and create a branch for your changes.
* Submit a pull request (PR) to master with your changes.
* Complete the requested checkmarks
* Respond to PR feedback.

## Markdown syntax

Articles are written in [DocFx-flavored Markdown](http://dotnet.github.io/docfx/spec/docfx_flavored_markdown.html), which is a superset of [GitHub-flavored Markdown (GFM)](https://guides.github.com/features/mastering-markdown/). 

### Markdown file headers

Each markdown file part of the documentation should have an header.

```markdown
---
uid: <uid>
title: <title>
tags: [
    { "name": "<tag1>" },
    ...
    { "name":  "<tagn>" }
]
system: {
    document_id: <guid>
}
---
```

|Property  |Description  |
|----------|-------------|
|uid       | Unique reference to the document. Encoded with folderstructure, like `pbi/` for the folder `powerbi-visuals`        |
|title     | Friendly title of the document        |
|tags     | *Optional* List of document tags. Each tag should have a new `"name": "<tag>"` line and seperated by a `,` |
| system | Required section of system settings
|  document_id    | A unique guid that represents the document. Is used to link to the GitHub issues by the feedback system |
|  program_github | *Optional* Relative reference to the product repository used by the feedback system |

## Folder structure conventions

For each Markdown file there may be a folder for images and a folder for sample code. For example, if the article is [powerbi-visuals/index.md](https://github.com/liprec/azurebi-docs/blob/master/powerbi-visuals/index.md), the images are in [powerbi-visuals/images](https://github.com/liprec/azurebi-docs/blob/master/powerbi-visuals/images) (https://github.com/aspnet/Docs/tree/master/aspnetcore/fundamentals/configuration/index/sample).
An image in the *powerbi-visuals/index.md* file is rendered by the following Markdown.

```markdown
![description of image for alt attribute](powerbi-visuals/images/imagename.png)
```

**All** images should have [alt text](https://wikipedia.org/wiki/Alt_attribute).

Markdown file names and image file names should be all lower case.

## Internal links

Internal links should use the `uid` of the target article with an xref link:

`[link_text](xref:uid_of_the_topic)`

See [DocFX Cross Reference](http://dotnet.github.io/docfx/spec/docfx_flavored_markdown.html#cross-reference) for more info.

## Code snippets

Articles frequently contain code snippets to illustrate points. DFM lets you copy code into the Markdown file or refer to a separate code file. We prefer to use separate code files whenever possible, to minimize the chance of errors in the code. The code files should be stored in the repo using the folder structure described above for sample projects.

Here are some examples of [DFM code snippet syntax](http://dotnet.github.io/docfx/spec/docfx_flavored_markdown.html#code-snippet) that would be used in a *configuration/index.md* file.

To render an entire code file as a snippet:

```markdown
[!code-csharp[Main](configuration/index/sample/Program.cs)]
```

To render a portion of a file as a snippet by using line numbers:

```markdown
[!code-csharp[Main](configuration/index/sample/Program.cs?range=1-10,20,30,40-50]
[!code-html[Main](configuration/index/sample/Views/Home/Index.cshtml?range=1-10,20,30,40-50]
```

For C# snippets, you can reference a [C# region](https://docs.microsoft.com/dotnet/csharp/language-reference/preprocessor-directives/preprocessor-region). Whenever possible, use regions rather than line numbers, because line numbers in a code file tend to change and get out of sync with line number references in Markdown. C# regions can be nested, and if you reference the outer region, the inner `#region` and `#endregion` directives are not rendered in a snippet. 

To render a C# region named "snippet_Example":

```markdown
[!code-csharp[Main](configuration/index/sample/Program.cs?name=snippet_Example)]
```

To highlight selected lines in a rendered snippet (usually renders as yellow background color):

```markdown
[!code-csharp[Main](configuration/index/sample/Program.cs?name=snippet_Example&highlight=1-3,10,20-25)]
[!code-csharp[Main](configuration/index/sample/Program.cs?range=10-20&highlight=1-3]
[!code-html[Main](configuration/index/sample/Views/Home/Index.cshtml?range=10-20&highlight=1-3]
[!code-javascript[Main](configuration/index/sample/UsingOptionsSample.csproj?range=10-20&highlight=1-3]
```

## Test your changes with DocFX

Test your changes with the [DocFX command-line tool](https://dotnet.github.io/docfx/tutorial/docfx_getting_started.html#2-use-docfx-as-a-command-line-tool), which creates a locally hosted version of the site. DocFX doesn't render style and site extensions created for docs.microsoft.com.

DocFX requires the .NET Framework on Windows, or Mono for Linux or macOS. 

### Windows instructions

* Download and unzip *docfx.zip* from [DocFX releases](https://github.com/dotnet/docfx/releases).
* Add DocFX to your PATH.
* In a command-line window, navigate to the appropriate folder that contains the *docfx.json* file (*azurebi-docs* for AzureBI docs) and run the following command:

```cmd
docfx --serve
```

* In a browser, navigate to `http://localhost:8080`.

### Mono instructions

* Install Mono via Homebrew - `brew install mono`.
* Download the [latest version of DocFX](https://github.com/dotnet/docfx/releases).
* Extract to `\bin\docfx`.
* Create an alias for **docfx**:

```bash
function docfx {
mono $HOME/bin/docfx/docfx.exe
}

function docfx-serve {
mono $HOME/bin/docfx/docfx.exe serve _site
}
```

* Run **docfx** in the `azurebi-docs` directory to build the site, and **docfx-serve** to view the site at `http://localhost:8080`.

## Style, voice and tone

My goal is to write documentation that is easily understandable by the widest possible audience. I try to follow the [Writing Style Guide](https://docs.microsoft.com/style-guide/welcome/) Microsoft has written for their documantation and I ask my contributors to follow. It provides writing style and terminology guidance for all forms of technology communication.
Regarding Voise and tone, see [Microsoft .NET: Voice and tone guidelines](https://github.com/dotnet/docs/blob/master/styleguide/voice-tone.md) for more information.