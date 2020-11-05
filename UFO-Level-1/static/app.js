// from data.js
var tableData = data;

// Use D3 to select the table body 
var tbody = d3.select("tbody");

// // Use d3 to update each cell's text with
// // Ufo Sightings values (date/time, city, country, shape, and comment)
data.forEach(function(UfoSightings) {
  console.log(UfoSightings);
  var row = tbody.append("tr");
  Object.entries(UfoSightings).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the Ufo Sightings object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Getting a reference to the button on the page with the id property set to `filter-btn` and 'form-control

var button = d3.select("#filter-btn");
var input = d3.select('.form-control')


// Use D3 `.on` to attach a click handler to use it to filter upon clicking a button
button.on('click', function(){
    var dateInput = d3.select('#datetime').property("value");
    var filteredData = tableData.filter(item => item.datetime === dateInput);
    console.log("dateInput",dateInput)
    console.log(this)
    console.log(filteredData.length)
});


// clear the existing output
input.protperty("value", "")



