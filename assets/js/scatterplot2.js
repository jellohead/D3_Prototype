var dataset = [
        [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
        [410, 12], [475, 44], [25, 67], [85, 21], [220, 88],
        [600, 150],[0,0]
        ];

//Create SVG element
var svg = d3.select(".scatterplot2")
      .append("svg")
      .attr("width", "100%")
      .attr("height", "50%");

var margin = {top: 20, right: 10, bottom: 20, left: 10},
    padding = {top: 10, right: 10, bottom: 10, left: 10},
    outerWidth = $(".scatterplot2").width(),
    outerHeight = $(".scatterplot2").height(),
    innerWidth = outerWidth - margin.left - margin.right,
    innerHeight = outerHeight - margin.top - margin.bottom,
    width = outerWidth - margin.left - margin.right,
    height = outerHeight - margin.top - margin.bottom;

    svg.attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate (" + margin.left + "," + margin.top +   ")");

//Create scale functions
var xScale = d3.scale.linear()
           .domain([0, d3.max(dataset, function(d) { return d[0]; })])
           .range([padding.left, width - padding.right * 2]);

var yScale = d3.scale.linear()
           .domain([0, d3.max(dataset, function(d) { return d[1]; })])
           .range([height - padding.top, padding.bottom]);

var rScale = d3.scale.linear()
           .domain([0, d3.max(dataset, function(d) { return d[1]; })])
           .range([2, 5]);

//Create circles
svg.selectAll(".scatterplot2.circle")
   .data(dataset)
   .enter()
   .append("scatterplot2.circle")
   .attr("cx", function(d) {
      return xScale(d[0]);
   })
   .attr("cy", function(d) {
      return yScale(d[1]);
   })
   .attr("r", function(d) {
      return rScale(d[1]);
   });

//Create labels
svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(function(d) {
      return d[0] + "," + d[1];
   })
   .attr("x", function(d) {
      return xScale(d[0]);
   })
   .attr("y", function(d) {
      return yScale(d[1]);
   })
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "red");

//Define X axis
var xAxis = d3.svg.axis()
              .scale(xScale)
              .orient("bottom")
              .ticks(5);

//Create X axis
svg.append("g")
   .attr("class", "axis")
   .attr("transform", "translate(" +(padding.left + 15) +"," + innerHeight + ")")
   .call(xAxis);

//Define Y axis
var yAxis=d3.svg.axis()
            .scale(yScale)
            .orient("left")
            .ticks(5);

//Create Y axis
// TODO: fix padding for axis to get it to line up at (0,0)
svg.append("g")
   .attr("class", "axis")
   .attr("transform", "translate(" + (padding.left + 15) +"," + padding.top + ")")
   .call(yAxis);