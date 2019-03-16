// from data.js
var tableData = data;
//var tableDataFiltered;
// YOUR CODE HERE!
var filter_btn = d3.select("#filter-btn");

// Input fields can trigger a change event when new text is entered.
filter_btn.on("click", function() {
  //console.log("Entro");
	d3.event.preventDefault();
  	let filter_date = d3.select("#datetime").property("value");
  	let filter_city = d3.select("#city").property("value");
  	let filter_state= d3.select("#state").property("value");
  	let filter_country = d3.select("#country").property("value"); 
  	let filter_shape = d3.select("#shape").property("value");  	
  	//console.log("filtro" + filter);
  	if( filter_date == '' && filter_city == '' && filter_state == '' && filter_country == '' && filter_shape == ''){
  		console.log("Sin filtros");
  		tableDataFiltered = tableData;
  	}else{
  		console.log("Filtros")
  		var tableDataFiltered = tableData;

  		if( filter_date != '' ){
  			console.log("Filtro Fecha");
	  		tableDataFiltered = tableDataFiltered.filter(function(data){
		  		//console.log("DDate: " + data.datetime + " Filter: " + filter);
		  		return data.datetime == filter_date;
	  		});
		}

		if( filter_city != '' ){
			console.log("Filtro Ciudad");
			tableDataFiltered = tableDataFiltered.filter(function(data){
				//console.log("DDate: " + data.datetime + " Filter: " + filter);
			  	return data.city == filter_city;
	  		});
		}

		if( filter_state != '' ){
			console.log("Filtro State");
			tableDataFiltered = tableDataFiltered.filter(function(data){
				//console.log("DDate: " + data.datetime + " Filter: " + filter);
			  	return data.state == filter_state;
	  		});
		}

		if( filter_country != '' ){
			console.log("Filtro Country");
			tableDataFiltered = tableDataFiltered.filter(function(data){
				//console.log("DDate: " + data.datetime + " Filter: " + filter);
			  	return data.country == filter_country;
	  		});
		}

		if( filter_shape != '' ){
			console.log("Filtro Shape");
			tableDataFiltered = tableDataFiltered.filter(function(data){
				//console.log("DDate: " + data.datetime + " Filter: " + filter);
			  	return data.shape == filter_shape;
	  		});
		}						
  	}

	//console.log(tableData);
	//tableData = tableDataFiltered
	//console.log(tableDataFiltered);
	d3.select("tbody").selectAll("tr").remove();
	tbody = d3.select("tbody");//.selectAll("tr");
	tableDataFiltered.forEach(function(data){
	//console.log("Leyendo Tabla");
	// Append one table row `tr` to the table body
		var row = tbody.append("tr");

		Object.entries(data).forEach(function([key, value]) {	     
			var cell = row.append("td");
		  	cell.text(value);
			});

	});

});


// Use D3 to select the table
var table = d3.select("table");

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// Use D3 to select the table body
var tbody = d3.select("tbody");

tableData.forEach(function(data){
	//console.log("Leyendo Tabla");
	// Append one table row `tr` to the table body
	var row = tbody.append("tr");

	// Append one cell for the student name
	//row.append("td").text(data.datetime);

	// Append one cell for the student grade
	//row.append("td").text(data.city);

	// Append one cell for the student name
	//row.append("td").text(data.state);

	// Append one cell for the student grade
	//row.append("td").text(data.country);

	// Append one cell for the student grade
	//row.append("td").text(data.shape);

	// Append one cell for the student grade
	//row.append("td").text(data.durationMinutes);

	// Append one cell for the student grade
	//row.append("td").text(data.comments);

	Object.entries(data).forEach(function([key, value]) {	     
	  var cell = row.append("td");
	  cell.text(value);
	});

});


//d3.select("#city").on("input", function() {
  //update(+this.value);
  //console.log(this.value);
//});