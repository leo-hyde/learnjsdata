jQuery( document ).ready(function($){

  // Convert data in CSV to JSON
  d3.csv("/data/cities.csv").then(function(citydata) {

    var headers = [];
    for (key in citydata[0]) {
      var header = {
        title: key,
        field: key
      };
      headers.push(header);
    };

    //create Tabulator on DOM element with id "example-table"
    var table = new Tabulator("#example-table", {
     	layout:"fitColumns", //fit columns to width of table (optional)
     	columns:headers
    });

    //load sample data into the table
    table.setData(citydata);

    }); // End d3 function

});
