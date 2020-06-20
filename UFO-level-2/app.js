// from data.js
let tableData = data;
console.log(tableData);

//Loop Through `data` and console.log each UFO report object
// Console.log the UFO data from data.js
//console.log(data);

// YOUR CODE HERE!
let tbody = d3.select("tbody");

//Use d3 to append one table row `tr` for each Ufo report object
//Don't worry about adding cells or text yet, just try appending the `tr` elements.

function updateTable(data) {
    //clears the table
    tbody.html("");
    data.forEach(function (ufoData) {
        console.log(ufoData);
        let row = tbody.append("tr");
        //Use d3 to append one table row`tr` for each Ufo report object
        Object.entries(ufoData).forEach(function ([key, value]) {
            console.log(key, value);
            let cell = row.append("td");
            cell.text(value);
        });
    });
}


// Select the button
// let button = d3.select("#filter-btn");

// Select the form
//let form = d3.select("#form");

// Create event handlers for clicking the button or pressing the e
//button.on("click", runEnter);

//form.on("filter-btn", runEnter);

//Create the function to run for both events
function ufoFilter() {

    //Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#input").property("value");

    console.log(inputElement)
    let filteredData = tableData;
    if (inputElement) {
        filteredData = filteredData.filter(ufo => ufo.datetime === inputElement);
        filteredData = filteredData.filter(ufo => ufo.datetimeufo.city === inputElement);
        filteredData = filteredData.filter(ufo => ufo.datetimeufo.state === inputElement);
        filteredData = filteredData.filter(ufo => ufo.datetimeufo.country === inputElement);
        filteredData = filteredData.filter(ufo => ufo.datetimeufo.shape === inputElement);

        updateTable(filteredData);
    }
    d3.select("#filter-btn").on("click", ufoFilter);
};
// Get the value property of the input element
//let inputValue = inputElement.property("value");
//console.log(inputValue);
//}
updateTable(tableData)