// Attach CSS
newLink = document.createElement("link");
newLink.setAttribute("type", "text/css");
newLink.setAttribute("rel", "stylesheet");
newLink.setAttribute("href", "https://dl.dropbox.com/u/22264396/jira.css")
head = document.getElementsByTagName("head")[0];
head.appendChild(newLink);

// Create cards
cards = document.createElement("div");
cards.setAttribute("id", "cards");
issues = document.getElementsByClassName('issuerow');
for (i = 0; i < issues.length; i++) {
  card = document.createElement("div");
  card.setAttribute("class", "card");
  
  // Find key & summary
  var issuekey = "key";
  var summary = "summary";
  for (j = 0; j < issues[i].childNodes.length; j++) {
    if (issues[i].childNodes[j].className == "nav issuekey") {
      issuekey = issues[i].childNodes[j].innerText;
    } else if (issues[i].childNodes[j].className == "nav summary") {
      summary = issues[i].childNodes[j].innerText;
    }
  }
  
  // Fill the card  
  card.innerHTML = "<h2>" + issuekey + "</h2><h1>" + summary + "</h1>";
  cards.appendChild(card);
}

// Empty document and just add Cards
body = document.getElementsByTagName("body")[0];
body.className = "";
body.innerHTML = "";
body.appendChild(cards);
