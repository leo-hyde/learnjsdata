d3.csv("/data/cities.csv").then(function(data) {
    data.forEach(function(d) {
      d.population = +d.population;
      d["land area"] = +d["land area"];
    });
    console.log(data[0]);
  });


  d3.json("/data/employees.json").then(function(data) {
    console.log(data[0]);
  });


  Promise.all([
    d3.csv("/data/cities.csv"),
    d3.tsv("/data/animals.tsv")
  ]).then(function(data) {
    console.log(data[0][0])  // first row of cities
    console.log(data[1][0])  // first row of animals
  });
  

