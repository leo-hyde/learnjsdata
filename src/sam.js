jQuery( document ).ready(function($){

  console.log("File sam.js loaded, jQuery working, all is well.");

  // Convert data in CSV to JSON
  d3.csv("/data/cities.csv").then(function(citydata) {
    console.log(citydata);
    // Initialise array for headers
    var cityheaders = [];
    // Get headers
    for (header in citydata[0]) {
      // Add header to table
      $('#citiestable thead tr').append('<td>' + header + '</td>');
      // Add header to array of headers
      cityheaders.push(header);
    };
    console.log(cityheaders);
    console.log(citydata.length);
    // Loop through citydata and plot table (this is jQuery notation)
    $.each(citydata, function(i, item) {
      var $tr = $('<tr>').append(
        $('<td>').text(item.city),
        $('<td>').text(item.state),
        $('<td>').text(item.population)
      );
      $('#citiestable tbody').append($tr);
    });

    }); // End d3 function

});
