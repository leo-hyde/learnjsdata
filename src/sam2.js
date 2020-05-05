jQuery( document ).ready(function($){

  // Convert data in CSV to JSON
  d3.csv("/data/cities.csv").then(function(citydata) {
    console.log(citydata);

    //create Tabulator on DOM element with id "example-table"
    var table = new Tabulator("#example-table", {
     	layout:"fitColumns", //fit columns to width of table (optional)
     	columns:[ //Define Table Columns
    	 	{title:"City", field:"city"},
    	 	{title:"State", field:"state"},
    	 	{title:"Population", field:"population"},
    	 	{title:"Area (km^2)", field:"land area"}
     	]
    });

    //load sample data into the table
    table.setData(citydata);

    }); // End d3 function

});
