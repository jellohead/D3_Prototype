var barPadding = 5;
var dataset = [];
var numDataPoints = 6;
var xRange = Math.random() * 1000;
var dataset = [5, 13, 15, 20, 25, 30, 21, 75];

var svg = d3.selectAll(".barchart")
.append("svg")
.attr("width", "100%") // express width and height as % to fit responsive container
.attr("height", "50%");

var w = $(".barchart").width(); //jQuery call to use CSS selector 'width'
var h = $(".barchart").height();

yScale = d3.scale.linear()
               /*.domain(0, d3.max(dataset, function (d) {
                return d;
               }))
               .range(h - padding, padding)*/;



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

var yAxis = d3.svg.axis()
              .scale(yScale)
              .orient("left")
              .ticks(5);

svg.append("g")
   .attr("class", "axis")
   /*.attr("width", w)
   .attr("height", h)*/
   .attr("transform", "translate(0, 30)")
   .call(yAxis);