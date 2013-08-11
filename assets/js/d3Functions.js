//Width and height
var w = 500;
var h = 300;
var barPadding = 25;

var dataset = [5, 10, 15, 24, 34, 12];

/*var svg = d3.select("body")*/
var svg = d3.select(".my-class")
.append("svg")
.attr("width", "100%") // express width and height as % to fit responsive container
.attr("height", "100%");

svg.selectAll("rect")
.data(dataset)
.enter()
.append("rect")
.attr("x", function(d, i){
 return i * (w / dataset.length);
})
.attr("y", function(d){
 return h - d * 4;
})
.attr("width", (w / dataset.length - barPadding)%)
.attr("height", function(d){
 return d * 4;
});