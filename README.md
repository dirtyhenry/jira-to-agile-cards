JIRA to Agile Cards
===================

A fast solution to print Agile Cards with the OnDemand version of Atlassian's JIRA.

## User guide

Compile the JS script with Google's [Closure Compiler][3]:

For the Post-It bookmarklet:

    rake compile-postit

For the Burndown bookmarklet:

    rake compile-burndown

For all bookmarklets:

    rake compile-all

Then embed the compiled code in a script like this:

    <a href='javascript:(function(){replace_with_compiled_script})();'>My bookmarklet</a>

## Bookmarklets

Visit [this page][4] to access the bookmarklets.
  

### The Post-It Bookmarklet

After dragging the Post-It bookmarklet on your toolbar, just go on a Jira filter page and click the bookmarklet. 
You'll get a printable page and after printing and some creative scissor activity you should get something like this:

![Picture of a ScrumBoard made with this project][1]


### The Burndown Chart Bookmarklet

The Burndown Chart bookmarklet displays a JavaScript alert that sums what is done (ie status "Resolved" and "Closed") over the total story points 
of the issues of a filter.

Example:

![Screenshot of a generated alert][5]


## About

To find out more about this project, please read [this post][2].


[1]: http://bootstragram.com/blog/assets/img/scrum_board.png "A ScrumBoard made with this project"
[2]: http://bootstragram.com/making-scrum-cards-from-jira-with-jquery-and-css/ "Making scrum cards from Jira with jQuery and CSS on Bootstragram.com"
[3]: https://developers.google.com/closure/compiler/ "Google Closure Compiler"
[4]: http://dirtyhenry.github.io/jira-to-agile-cards/ "Jira to Agile Cards Page"
[5]: https://s3.amazonaws.com/mfhosting/sprint-points.png "A Burndown alert"
