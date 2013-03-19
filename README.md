JIRA to Agile Cards
===================

A fast solution to print Agile Cards with the OnDemand version of Atlassian's JIRA.

## User guide

Compile the JS script with Google's [Closure Compiler][3]:

    java -jar compiler.jar --js jira-bookmarklet.js --js_output_file jira-bookmarklet-compiled.js
    
Then embed the compiled code in a script like this:

    <a href='javascript:(function(){replace_with_compiled_script})();'>My bookrmarklet</a>
    
After dragging the bookmarklet on your toolbar, just go on a Jira filter page and click the bookmarklet. After printing and some creative scissor activity, you should get something like this:

    ![Picture of a ScrumBoard made with this project][1]

## About

To find out more about this project, please read [this post][2].

[1]: http://bootstragram.com/img/scrum_board.png "A ScrumBoard made with this project"
[2]: http://bootstragram.com/making-scrum-cards-from-jira-with-jquery-and-css/ "Making scrum cards from Jira with jQuery and CSS on Bootstragram.com"
[3]: https://developers.google.com/closure/compiler/ "Google Closure Compiler"
