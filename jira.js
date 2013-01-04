var headHTML = document.getElementsByTagName('head')[0].innerHTML;
headHTML    += '<link type="text/css" rel="stylesheet" href="jira.css">';
document.getElementsByTagName('head')[0].innerHTML = headHTML;

$(document).ready(function() {
    $("thead").hide();

    $(".end-of-stable-message").append("<div id=\"cards\"></div>")
    
    $(".issuerow").each(function(f, e) {
        title = $(this).children(".summary").text();
        issuekey = $(this).children(".issuekey").text();
        $("#cards").append("<div class='card'><h2>" + issuekey + "</h2><h1>" + title + "</h1></div>");
    });
    
    $("#cards .card:nth-child(8n)").after("<div style=\"clear: both; page-break-after: always;\"></div>");

    $("#cards").append("<div style=\"clear: both\"></div>")
    
    $("table").hide();
});
