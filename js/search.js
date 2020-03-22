//create a lunr function
var searchIndex = lunr(function() {
    //creates the structure for lunr
    this.ref("id");
    this.field("title");
    this.field("content");
    this.field("excerpt");
    this.field("featured_img");

    //adds values for lunr to search through
    for (var key in window.pages) {
        this.add({
            "id": key,
            "title": pages[key].title,
            "content": pages[key].content,
            "excerpt": pages[key].excerpt,
            "featured_img": pages[key].featured_img
        });
    }
});

//function that processes the query passed from the HTML form
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] === variable) {
          return decodeURIComponent(pair[1].replace(/\+/g, "%20"));
      }
  }
}

//passing the query from HTML form for processing
var searchTerm = getQueryVariable("q");

// searching through the JSON using the processed query. Output is a map
var results = searchIndex.search(searchTerm);
var resultPages = results.map(function (match) {
  return pages[match.ref];
});

// building the resultsString that will be the HTML code inside the cards HTML container
resultsString = "";
resultPages.forEach(function (r) {
    resultsString += "<article class=\"card\">";
    resultsString +=  "<img src=\"" + r.featured_img + "\">";
    resultsString +=  "<section class=\"card-content\">"
    resultsString +=  "<a href='" + r.url + "?q=" + searchTerm + "'><h2>" + r.title + "</h2><br>";
    resultsString +=  "<p>" + r.excerpt.substring(0, 200) + "</p></section></a>";
    resultsString += "</article>"
});
//setting the content of the HTML container
document.querySelector("#cards").innerHTML = resultsString;