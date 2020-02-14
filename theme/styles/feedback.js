// Copyright (c) 2020 Jan Pieter Posthuma / DataScenarios. All rights reserved. Licensed under the MIT license.
// See LICENSE-CODE file in the project root for full license information.
// Some parts of the code: Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.

var productFeedbackOpenIssuesUrl = "";
var productFeedbackClosedIssuesUrl = "";

if (program_github) {
    productFeedbackOpenIssuesUrl = 'https://api.github.com/repos/' + program_github + '/issues?state=open&sort=created&order=desc';
    productFeedbackClosedIssuesUrl = 'https://api.github.com/repos/' + program_github + '/issues?state=closed&sort=created&order=desc';
}

var feedbackOpenIssueUrl = 'https://api.github.com/search/issues?q=' + document_id + '+type%3Aissue+state%3Aopen+in%3Abody+repo%3A' + feedbackGitHubRepo + '&sort=created&order=desc';
var feedbackClosedIssueUrl = 'https://api.github.com/search/issues?q=' + document_id + '+type%3Aissue+state%3Aclosed+in%3Abody+repo%3A' + feedbackGitHubRepo + '&sort=created&order=desc';

$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'Accept': "application/vnd.github.VERSION.html+json"
        }
    });
    $.getJSON(feedbackOpenIssueUrl, function (allIssues) {
        $("[data-tab=docs-open]")[0].innerHTML = loc.numberOpenIssues.replace('{0}', allIssues.total_count);
        addIssues(allIssues.items, "docs-open", feedbackType.document);
    });
    $.getJSON(feedbackClosedIssueUrl, function (allIssues) {
        $("[data-tab=docs-closed]")[0].innerHTML = loc.numberClosedIssues.replace('{0}', allIssues.total_count);
        addIssues(allIssues.items, "docs-closed", feedbackType.document);
    });
    if ((program_github) && ($("[data-tab=product-open]"))) {
        $.getJSON(productFeedbackOpenIssuesUrl, function (allIssues) {
            $("[data-tab=product-open]")[0].innerHTML = loc.numberOpenIssues.replace('{0}', allIssues.length);
            addIssues(allIssues, "product-open", feedbackType.product);
        });
        $.getJSON(productFeedbackClosedIssuesUrl, function (allIssues) {
            $("[data-tab=product-closed]")[0].innerHTML = loc.numberClosedIssues.replace('{0}', allIssues.length);
            addIssues(allIssues, "product-closed", feedbackType.product);
        });
    }
});

function addIssues(issues, identifier, type) {
    var parentContainer = $("[id*=${identifier}]");
    if (issues.length === 0 || issues.total_count === 0) {
        var msg = identifier.indexOf("open") > 0 ? loc.emptyOpenIssues : loc.emptyClosedIssues;
        parentContainer.html("<p>" + msg + "</p>");
    }
    else {
        $.each(issues, function (i, issue) {
            var timeSpan = timeAgo(Date.now(), new Date(issue.created_at));
            var body = issue.body_html.split(loc.githubIssueDivider)[0];
            parentContainer
                .append("\n                    <ul class=\"github-issue\">\n                        <li>\n                            <article>\n                                <div class=\"github-issue\">\n                                    <a href=\"" + issue.html_url + "\" class=\"right-align noline\" target=\"_new\">\n                                        <span class=\"docon docon-comment-outline\" aria-hidden=\"true\"></span>\n                                        <span>" + issue.comments + "</span>\n                                    </a>\n                                    <h3>" + issue.title + "</h3>\n                                    <span id=\"issue-expander\" issue=\"" + issue.number + "\" class=\"expand-indicator text-subtle docon docon-chevron-right-light\" aria-hidden=\"true\"></span>\n                                    <div class=\"issue-body\" id=\"issue-" + issue.number + "-body\"  data-bi-name=\"issue-body\">\n                                        " + body + "\n                                    </div>\n\t\t\t\t\t\t            <div class=\"issue-footer\">\n                                        <div class=\"text-subtle\">\n                                            <a title=\"View this issue on GitHub\" class=\"issue-number\" href=\"" + issue.html_url + "\" target=\"_new\"><cite>#" + issue.number + "</cite></a>\n                                            opened <time datetime=\"" + issue.created_at + "\">" + timeSpan + "</time> by <a title=\"View " + issue.user.login + " on GitHub\" class=\"issue-author\" href=\"" + issue.user.html_url + "\" target=\"_new\">" + issue.user.login + "</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </article>\n                        </li>\n                    </ul>\n                ");
        });
        $("[id=issue-expander]").click(function (event) {
            if (event.isDefaultPrevented()) {
                return;
            }
            var issue = $(this).attr('issue');
            var issueId = "[id=issue-" + issue + "-body]";
            $(this).toggleClass("expanded");
            $(issueId).toggleClass("expanded");
            event.preventDefault();
            event.stopPropagation();
        });
    }
    var newIssueUrl = "";
    switch (type) {
        case feedbackType.product:
            newIssueUrl = "https://github.com/" + program_github + "/issues/new";
            break;
        case feedbackType.document:
            newIssueUrl = "https://github.com/" + feedbackGitHubRepo + "/issues/new";
            newIssueUrl += "?body=" + loc.githubIssueStart + loc.githubIssueHeader + loc.githubIssueLinkWarning + "%0A%0A* document_id=" + document_id + "%0A* document_url=" + document_url;
            break;
    }
    parentContainer.append("\n        <a class=\"open-on-github\" href=\"" + newIssueUrl + "\" target=\"_new\">\n            <span class=\"docon docon-brand-github\" aria-hidden=\"true\"></span>\n            <span>Open a new issue on GitHub</span>\n            <span class=\"docon docon-navigate-external\" aria-hidden=\"true\"></span>\n        </a>\n    ");
}

var feedbackType = {
    product: 1,
    document: 2
};

var loc = {
    aSecondAgo: "a second ago",
    secondsAgo: "{0} seconds ago",
    aMinuteAgo: "a minute ago",
    minutesAgo: "{0} minutes ago",
    hoursAgo: "{0} hours ago",
    anHourAgo: "an hour ago",
    aDayAgo: "a day ago",
    daysAgo: "{0} days ago",
    aWeekAgo: "a week ago",
    weeksAgo: "{0} weeks ago",
    aMonthAgo: "a month ago",
    monthsAgo: "{0} months ago",
    onSpecificDate: "on {0}",
    numberClosedIssues: "{0} Closed",
    numberOpenIssues: "{0} Open",
    emptyOpenIssues: "There are no open issues",
    emptyClosedIssues: "There are no closed issues",
    githubIssueHeader: "%0A%0A%0A---%0A%23%23%23%23 Document details%0A%0A",
    githubIssueDivider: "<hr>",
    githubIssueLinkWarning: "⚠ Do not edit this section. It is required for docs.jppp.org ➟ GitHub issue linking.",
    githubIssueStart: "*Start issue here*"
};

var unitTypes = [{
        factor: 1e3,
        singular: loc.aSecondAgo,
        plural: loc.secondsAgo
    }, {
        factor: 1e3 * 60,
        singular: loc.aMinuteAgo,
        plural: loc.minutesAgo
    }, {
        factor: 1e3 * 60 * 60,
        singular: loc.anHourAgo,
        plural: loc.hoursAgo
    }, {
        factor: 1e3 * 60 * 60 * 24,
        singular: loc.aDayAgo,
        plural: loc.daysAgo
    }, {
        factor: 1e3 * 60 * 60 * 24 * 7,
        singular: loc.aWeekAgo,
        plural: loc.weeksAgo
    }, {
        factor: 1e3 * 60 * 60 * 24 * 27,
        singular: loc.aMonthAgo,
        plural: loc.monthsAgo
    }];

var fuzzyFactor = 1.1;

var formatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric"
};

function timeAgo(now, then) {
    var elapsed = now - then.getTime();
    if (elapsed < 5e3) {
        return loc.justNow;
    }
    var i = 0;
    while (unitTypes[i + 1] && elapsed * fuzzyFactor > unitTypes[i + 1].factor) {
        i++;
    }
    var _a = unitTypes[i], factor = _a.factor, singular = _a.singular, plural = _a.plural;
    var units = Math.round(elapsed / factor);
    if (units > 3 && i === unitTypes.length - 1) {
        return loc.onSpecificDate.replace("{0}", then.toLocaleDateString(undefined, formatOptions).replace(/\u200E/g, ""));
    }
    if (units === 1) {
        return singular;
    }
    return plural.replace("{0}", units.toString());
}
