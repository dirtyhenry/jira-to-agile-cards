JIRA to Agile Cards
===================

A fast solution to print Agile Cards with the OnDemand version of Atlassian's JIRA.

## User guide

Compile the JS script with Google's [Closure Compiler][3]:

    ./compile-js.sh
    
Then embed the compiled code in a script like this:

    <a href='javascript:(function(){replace_with_compiled_script})();'>My bookrmarklet</a>

## Bookmarklets

<div>
    <a href='javascript:(function(){newLink=document.createElement("link");newLink.setAttribute("type","text/css");newLink.setAttribute("rel","stylesheet");newLink.setAttribute("href","https://dl.dropbox.com/u/22264396/jira.css");head=document.getElementsByTagName("head")[0];head.appendChild(newLink);cards=document.createElement("div");cards.setAttribute("id","cards");issues=document.getElementsByClassName("issuerow");
    for(i=0;i<issues.length;i++){card=document.createElement("div");card.setAttribute("class","card");var issuekey="key",summary="summary";for(j=0;j<issues[i].childNodes.length;j++)"nav issuekey"==issues[i].childNodes[j].className?issuekey=issues[i].childNodes[j].innerText:"nav summary"==issues[i].childNodes[j].className&&(summary=issues[i].childNodes[j].innerText);card.innerHTML="<h2>"+issuekey+"</h2><h1>"+summary+"</h1>";cards.appendChild(card)}body=document.getElementsByTagName("body")[0];
    body.className="";body.innerHTML="";body.appendChild(cards);
    })();'>Post-It</a>
</div>

<div>
    <a href='javascript:(function(){doneStoryPoints=totalStoryPoints=0;issues=document.getElementsByClassName("issuerow");
    for(i=0;i<issues.length;i++){var storyPoints=-1,status=-1;for(j=0;j<issues[i].childNodes.length;j++)"nav customfield_10105"==issues[i].childNodes[j].className?storyPoints=parseInt(issues[i].childNodes[j].innerText):"nav status"==issues[i].childNodes[j].className&&(status=issues[i].childNodes[j].innerText);-1!=storyPoints&&-1!=status?(console.log("Adding "+storyPoints),-1<status.indexOf("Resolved")||-1<status.indexOf("Closed")?doneStoryPoints+=storyPoints:console.log("Status: "+status),isNaN(storyPoints)||
    (totalStoryPoints+=storyPoints)):console.log("An error happened, some fields could not be found.")}console.log("doneStoryPoints: "+doneStoryPoints);console.log("totalStoryPoints: "+totalStoryPoints);alert("Done: "+doneStoryPoints+"/"+totalStoryPoints);
    })();'>Burndown Chart</a>
</div>
  

### The Post-It Bookmarklet

After dragging the Post-It bookmarklet on your toolbar, just go on a Jira filter page and click the bookmarklet. 
You'll get a printable page and after printing and some creative scissor activity you should get something like this:

![Picture of a ScrumBoard made with this project][1]


### The Burndown Chart Bookmarklet

## About

To find out more about this project, please read [this post][2].

[1]: http://bootstragram.com/blog/assets/img/scrum_board.png "A ScrumBoard made with this project"
[2]: http://bootstragram.com/making-scrum-cards-from-jira-with-jquery-and-css/ "Making scrum cards from Jira with jQuery and CSS on Bootstragram.com"
[3]: https://developers.google.com/closure/compiler/ "Google Closure Compiler"
