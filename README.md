JIRA to Agile Cards
===================

This project aims to be able to print Agile Cards when running the OnDemand version of Atlassian's JIRA.

## User guide

1. Clone this project on a computer
2. Create a filter containing the tickets you want to print
3. Select `Views` \> `Excel (Current Fields)` and save the file in the same directory where you cloned this project
4. Rename the file with a `.html` extension
5. Open the file in your favorite text editor
6. Add the following lines at the end of the file:

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="jira.js"></script>
    
After printing and some creative scissor activity, you should get something like this:

![Picture of a ScrumBoard made with this project][1]

## TODO

I wish to make this project available as a bookmarklet pretty soon.

## About

To find out more about this project, please read [this post][2].

[1]: http://bootstragram.com/img/scrum_board.png "A ScrumBoard made with this project"
[2]: http://bootstragram.com/making-scrum-cards-from-jira-with-jquery-and-css/ "Making scrum cards from Jira with jQuery and CSS on Bootstragram.com"