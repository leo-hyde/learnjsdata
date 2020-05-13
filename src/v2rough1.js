// Get data 
d3.csv("/data/SteelTimber1.csv").then(function (cities) {
  console.log("cities", cities[0]);

  // Get unique values to use in drop down menus 
  var uniqueOption = [... new Set(cities.map(a => a.Option))]
  var uniqueID = [... new Set(cities.map(a => a.ID))]
  var uniquePrimarySpan = [... new Set(cities.map(a => a['Primary beam span (m)']))]
  var uniqueSecondarySpan = [... new Set(cities.map(a => a['Secondary beam span (m)']))]
  var uniqueBeamDepth = [... new Set(cities.map(a => a['Beam Depth']))]

  // Populate dropdown menus with data 
  $.each(uniquePrimarySpan, function (val, text) {
    $('#Dropdown2').append($('<option></option>').val(val).html(text))
  });

  $.each(uniqueSecondarySpan, function (val, text) {
    $('#Dropdown3').append($('<option></option>').val(val).html(text))
  });

  $.each(uniqueBeamDepth, function (val, text) {
    $('#Dropdown4').append($('<option></option>').val(val).html(text))
  });

  // When dropdown menu gets changed: 
  var IDSelected = uniqueID[0];
  $(".form-control").change(function () {
    // Get dropdown value 
    var primarySelected = $(Dropdown2).children("option:selected").text();
    var secondarySelected = $(Dropdown3).children("option:selected").text();
    var beamDepthSelected = $(Dropdown4).children("option:selected").text();
    // console.log("primarySelected", primarySelected);
    // console.log("secondarySelected", secondarySelected);
    // console.log("beamDepthSelected", beamDepthSelected);

    // filter data based on dropdown menu value 
    var filteredData1 = cities.filter(function (obj) {
      return (obj['Primary beam span (m)'] == primarySelected) && (obj['Secondary beam span (m)'] == secondarySelected) && (obj['Beam Depth'] == beamDepthSelected);
      //return (obj['ID'] == IDSelected);
    });

    // console.log("filteredData1", filteredData1);
    // console.log("Object.keys(foo)", Object.keys(filteredData1[0]));

    // get subset of data to graph from filtered data 
    var xdata = filteredData1.map(a => a.Option);
    var totalCarbon = filteredData1.map(a => a['Total Embodied Carbon [kgCO2e/m2]']);
    var timberCarbon = filteredData1.map(a => a['Timber Embodied Carbon [kgCO2e/m2] ']);
    var steelCarbon = filteredData1.map(a => a['Steel Embodied Carbon [kgCO2e/m2]']);
    var reinforcementCarbon = filteredData1.map(a => a['Reinforcement Embodied Carbon [kgCO2e/m2] ']);
    var concreteCarbon = filteredData1.map(a => a['Concrete Embodied Carbon [kgCO2e/m2] ']);
    var foundationsCarbon = filteredData1.map(a => a['Foundations Embodied Carbon [kgCO2e/m2] ']);

    // console.log("timberCarbon", timberCarbon);
    // console.log("xdata", xdata);
    // console.log("ydata", ydata);

    // Graph of total embodied carbon for 1 option 
    var plotly1Data = [
      {
        x: xdata,
        y: totalCarbon,
        type: 'bar'
      }
    ];
    Plotly.newPlot('Plotly1', plotly1Data);

    // breakdown of embodied carbon by material 
    var trace1 = { x: xdata, y: timberCarbon, name: 'Timber', type: 'bar' };
    var trace2 = { x: xdata, y: steelCarbon, name: 'Steel', type: 'bar' };
    var trace3 = { x: xdata, y: reinforcementCarbon, name: 'Reinforcement', type: 'bar' };
    var trace4 = { x: xdata, y: concreteCarbon, name: 'Concrete', type: 'bar' };
    var trace5 = { x: xdata, y: foundationsCarbon, name: 'Foundations', type: 'bar' };

    Plotly.newPlot('Plotly2', [trace2, trace3, trace4, trace5, trace1], { barmode: 'relative' });

  });

  // Convert data into 1D Arrays 
  var xdata = cities.map(a => a.ID);
  var ydata = cities.map(a => a['Total Embodied Carbon [kgCO2e/m2]']);

  // Create Plotly Overview Chart 
  var data2 = [
    {
      x: xdata,
      y: ydata,
      type: 'bar'
    }
  ];

  Plotly.newPlot('myDiv', data2);

});