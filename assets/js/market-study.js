var width = 800,
    height = 500,
    margin = {top: 20, right: 20, bottom: 20, left: 60},
    xRange = d3.scale.linear().range([margin.left, width - margin.right]),
    yRange = d3.scale.linear().range([height - margin.top, margin.bottom]),
    rRange = d3.scale.linear().range(5,20),
    currentDataset,
    rawDataset,
    drawingData,
    colors = [ // array of colours for the data points. Each coaster type will have a differnet colour
      "#981C30",
      "#989415",
      "#1E4559",
      "#7F7274",
      "#4C4A12",
      "#ffffff",
      "#4B0612",
      "#1EAAE4",
      "#AD5E71",
      "#000000"
    ],
    xAxis = d3.svg.axis().scale(xRange).tickSize(16).tickSubdivide(true),
    yAxis = d3.svg.axis().scale(yRange).tickSize(10).orient("right").tickSubdivide(true);
//    vis;

function init(){
  vis = d3.select("#visualization");

  vis.append("svg:g")
     .attr("class", "x axis")
     .attr("transform", "translate(0," + height + ")")
     .call(xAxis);

  vis.append("sgv:g")
     .attr("class", "y axis")
     .call(yAxis);

update();
}

function redraw(){
  var plots = vis.selectAll("circle")
                 .data(rawDataset, function (d){
                  return d.id;
                 }),
      axes = getAxes();

  plots.enter()
       .insert("svg:circle")
       .attr("cx", function (d){
        return xRange (d[axes.xAxis]);
       })
       .attr("cy", function (d){
        return yRange (d[axes.yAxis]);
       })
       .style("opacity", 0)
       .style("fill", function (d) {
        return colors[d.type.id];
       });

}

// called every time a form field has changed
function update () {
  var dataset = "market-study2";
//  var dataset = getChosenDataset(), // filename of the chosen dataset csv
    processedData; // the data while will be visualised
  // if the dataset has changed from last time, load the new data file
  if (dataset != currentDataset) {
    d3.csv("data/" + dataset + ".csv", function (data) {
      // process new data and store it in the appropriate variables
      rawData = data;
      processedData = processData(data);
      currentDataset = dataset;
      generateTypesList(processedData);
      drawingData = cullUnwantedTypes(processedData);
      redraw();
    });
  } else {
    // process data based on the form fields and store it in the appropriate variables
    processedData = processData(rawData);
    drawingData = cullUnwantedTypes(processedData);
    redraw();
  }
}

/*// pulls data from csv file
function update(){
var rawDataset = [];
d3.csv("data/market-study2.csv", function (d){
  rawDataset = d;
  console.log(d);
});
  redraw();
}
*/
//get it all started
init();

// return an object containing the currently selected axis choices
function getAxes () {
  var x = document.querySelector("#x-axis input:checked").value,
    y = document.querySelector("#y-axis input:checked").value,
    r = document.querySelector("#r-axis input:checked").value;
  return {
    xAxis: x,
    yAxis: y,
    radiusAxis: r
  };
}

//listen for changes in the forms area
document.getElementById("controls").addEventListener("click",update,false);
