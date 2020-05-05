jQuery( document ).ready(function($){

  $("#dataSelect").change(function(){
    var source = this.value;

    // Convert data in CSV to JSON
    d3.csv("/data/" + source + ".csv").then(function(data) {

      var headers = [];
      for (key in data[0]) {
        var header = {
          title: key,
          field: key
        };
        headers.push(header);
      };

      var table = new Tabulator("#data-table", {
       	layout:"fitColumns", //fit columns to width of table (optional)
       	columns:headers
      });

      table.setData(data);

    });

  });

});
