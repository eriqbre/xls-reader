/**
 * Created by eriq on 10/12/15.
 * this file creates an http server configured for port 3030
 */
var reader = require('node-xlsx');

// reads the xls/xlsx file from local directory
var workbook = reader.parse(__dirname + "/data.xlsx");

// check that the workbook was loaded properly
if (workbook && workbook.length) {
	// workbook is an array of "sheets" from the xls file, use the array syntax to access the proper sheet
	var sheet = workbook[0];
	// sheet.data is an array of rows
	var rows = sheet.data;

	// now you can iterate over the rows and work with each one
	rows.forEach(function (row) {
		// the columns in a row are also an array
		var column1 = row[0];
		var column2 = row[1];
		var column3 = row[2];

		// outputs each cell to the console log
		console.log(row);
	});
}