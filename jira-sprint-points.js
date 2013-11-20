totalStoryPoints = 0;
doneStoryPoints = 0;

issues = document.getElementsByClassName('issuerow');
for (i = 0; i < issues.length; i++) {  
    // Find story points & status
    var storyPoints = -1;
    var status = -1;
    for (j = 0; j < issues[i].childNodes.length; j++) {
        if (issues[i].childNodes[j].className == "customfield_10105") {
            storyPoints = parseInt(issues[i].childNodes[j].innerText);
        } else if (issues[i].childNodes[j].className == "status") {
            status = issues[i].childNodes[j].innerText;
        }
    }

    if (storyPoints != -1 && status != -1) {
        console.log("Adding " + storyPoints);
        if (!isNaN(storyPoints) && (status.indexOf("Resolved") > -1 || status.indexOf("Closed") > -1)) {
            doneStoryPoints += storyPoints;
        } else {
            console.log("Status: " + status);
        }
        if (!isNaN(storyPoints)) {
            totalStoryPoints += storyPoints;
        }
    } else {
        console.log("An error happened, some fields could not be found.")
    }
}

console.log("doneStoryPoints: " + doneStoryPoints);
console.log("totalStoryPoints: " + totalStoryPoints);
alert("Done: " + doneStoryPoints + "/" + totalStoryPoints);