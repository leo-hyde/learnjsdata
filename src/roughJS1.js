var table = new Tabulator("#example-table", {
    height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    layout:"fitColumns", //fit columns to width of table (optional)
    columns:[ //Define Table Columns
        {title:"Name", field:"name", width:150},
        {title:"Age", field:"age", align:"left", formatter:"progress"},
        {title:"Favourite Color", field:"col"},
        {title:"Date Of Birth", field:"dob", sorter:"date", align:"center"},
    ],
    rowClick:function(e, row){ //trigger an alert message when the row is clicked
        alert("Row " + row.getData().id + " Clicked!!!!");
    },
});

//define some sample data
var tabledata = [
	{id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
	{id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
	{id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
	{id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
	{id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
];

var dataInViaD3Insitu = [
    {"name":"Andy Hunt",
     "title":"Big Boss",
     "age": 68,
     "bonus": true
    },
    {"name":"Charles Mack",
     "title":"Jr Dev",
     "age":24,
     "bonus": false
    }
   ]

var dataInViaD3 = d3.json("/data/employees.json", function(data) {
    console.log("error:", error)
    console.log(data);

    return(data);
});


// document.write("<br>", 'typeof tabledata', "<br>", typeof tabledata)
// document.write("<br>")
// document.write("<br>", 'typeof dataInViaD3', "<br>", typeof dataInViaD3)

console.log('dataInViaD3', typeof dataInViaD3,  dataInViaD3);
console.log(dataInViaD3['[[PromiseValue]]]']);
console.log(Promise.resolve(dataInViaD3));
console.log(dataInViaD3[0]);
//console.log('tabledata', typeof tabledata, tabledata);
//console.log(tabledata[0]);
console.log('dataInViaD3Insitu', typeof dataInViaD3Insitu, dataInViaD3Insitu);
console.log(dataInViaD3Insitu[0]);

var file = "/data/employees.json";

var URL1 = "https://people.sc.fsu.edu/~jburkardt/data/csv/addresses.csv";

console.log("PapaParse:");

var onlineCVS1 = Papa.parse(URL1, {
	download: true,
	complete: function(results) {
		console.log(results);
	}
});

console.log(Object.keys(onlineCVS1));

// // Parse local CSV file
// Papa.parse(file, {
// 	complete: function(results) {
// 		console.log("Finished:", results.data);
// 	}
// });

// Papa.parse(fileInput.files[0], {
// 	complete: function(results) {
// 		console.log(results);
// 	}
// });

var testdata1 = Object.entries(dataInViaD3);

//load sample data into the table
table.setData(dataInVionlineCVS1aD3Insitu);
