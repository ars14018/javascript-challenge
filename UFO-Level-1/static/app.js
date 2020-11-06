// from data.js
var tableData = data;

// Use D3 to select the table body 
var tbody = d3.select("tbody");

// Use d3 to update each cell's text with
// Ufo Sightings values (date/time, city, country, shape, and comment)
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

// Getting a reference to the button on the page with the id property set to `filter-btn` 
var button = d3.select("#filter-btn");

// Use D3 `.on` to attach a click handler to use it to filter upon clicking a button
button.on('click', function(){
      // Select the datetime input 
      var input = d3.select("#datetime");
      //Get the value of the datetime input
      var dateInput = input.property("value");
      console.log("input:", dateInput);
      
      var filteredData = tableData.filter(item => item.datetime === dateInput);
      console.log(this)
      console.log(filteredData.length)
      
      // Clear any rows and cells from prior 
      tbody.html("");

      filteredData.forEach((UfoSightings) => {
        var row = tbody.append("tr");
        Object.entries(UfoSightings).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
          });
        });
 });




