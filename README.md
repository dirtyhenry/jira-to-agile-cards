JIRA to Agile Cards
===================

This project aims to be able to print Agile Cards when running the OnDemand version of Atlassian's JIRA.

## User guide

1. Drag this bookmarklet to your tool bar: <a class="btn btn-primary" href='javascript:(function(){newLink=document.createElement("link");newLink.setAttribute("type","text/css");newLink.setAttribute("rel","stylesheet");newLink.setAttribute("href","https://dl.dropbox.com/u/22264396/jira.css");head=document.getElementsByTagName("head")[0];head.appendChild(newLink);cards=document.createElement("div");cards.setAttribute("id","cards");issues=document.getElementsByClassName("issuerow");
for(i=0;i<issues.length;i++){card=document.createElement("div");card.setAttribute("class","card");var issuekey="key",summary="summary";for(j=0;j<issues[i].childNodes.length;j++)"nav issuekey"==issues[i].childNodes[j].className?issuekey=issues[i].childNodes[j].innerText:"nav summary"==issues[i].childNodes[j].className&&(summary=issues[i].childNodes[j].innerText);card.innerHTML="<h2>"+issuekey+"</h2><h1>"+summary+"</h1>";cards.appendChild(card)}body=document.getElementsByTagName("body")[0];
body.className="";body.innerHTML="";body.appendChild(cards);
})();'>Jira to Agile Cards</a>
2. Go to a filter results page on Jira
3. Click on the bookmarklet. Done.

After printing and some creative scissor activity, you should get something like this:

![Picture of a ScrumBoard made with this project][1]

## Technical Details

If you want to customize the source code, feel free to do so. Just update `jira-bookmarklet.js`, then compile it with Google's [Closure Compiler][3]:

    java -jar compiler.jar --js jira-bookmarklet.js --js_output_file jira-bookmarklet-compiled.js
    
Then embed the compiled code in a script like this:

    <a href='javascript:(function(){replace_with_compiled_script})();'>My bookrmarklet</a>
    
## About

To find out more about this project, please read [this post][2].

[1]: http://bootstragram.com/img/scrum_board.png "A ScrumBoard made with this project"
[2]: http://bootstragram.com/making-scrum-cards-from-jira-with-jquery-and-css/ "Making scrum cards from Jira with jQuery and CSS on Bootstragram.com"
[3]: https://developers.google.com/closure/compiler/ "Google Closure Compiler"