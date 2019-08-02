// from data.js
var tableData = data;

// select table body and table row from index
var tbody = d3.select("tbody");

// select the button
var button = d3.select("#filter-btn");

// turn on listener at click of button
button.on("click", function() {     

    // select the date input and get the value
    var dateInput = d3.select("#datetime");
    var date = dateInput.property("value");
  
    // clear any table data previously rendered
    tbody.html("");

    // filter data to just those objects that match the input date
    var filteredData = tableData.filter(ufo => ufo.datetime === date);

// loop through the data
    filteredData.forEach(function(ufo) {

        // create a new table row in each iteration
        var row = tbody.append("tr");

        // for each key/value pair in each iteration...
        Object.entries(ufo).forEach(function([key, value]) {
        console.log(key, value);

        // create a 'td'...
        var cell = row.append("td");

        // and add the values of each key to each 'td'.
        cell.text(value);
        });
    });
});