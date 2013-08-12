var barPadding = 5;
var dataset = [];
var numDataPoints = 6;
var xRange = Math.random() * 1000;
var dataset = [5, 13, 15, 20, 25, 30, 21, 75];

var svg = d3.selectAll(".my-class")
.append("svg")
.attr("width", "100%") // express width and height as % to fit responsive container
.attr("height", "50%");

var w = $(".my-class").width(); //jQuery call to use CSS selector 'width'
var h = $(".my-class").height();



svg.selectAll("rect")
.data(dataset)
.enter()
.append("rect")
.attr("x", function(d, i){
 return i * (w / dataset.length);
})
.attr("y", function(d){ //TODO: fix this to make chart smaller in vertical direction
 return h - d * 4; // this was initially  return h - d * 4
})
.attr("width", w / dataset.length - barPadding)
.attr("height", function(d){
 return d * 4;
});