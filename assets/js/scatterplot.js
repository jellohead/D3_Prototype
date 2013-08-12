  // D3 scatterplot
  // Uses % for width and height to make the SVG
  // responsive to changes in container dimensions.
  //
  // Requires jQuery.

  var padding = 20;
  var dataset = [
                [ 5,     20 ],
                [ 480,   90 ],
                [ 250,   50 ],
                [ 100,   33 ],
                [ 330,   95 ],
                [ 410,   12 ],
                [ 475,   44 ],
                [ 25,    67 ],
                [ 85,    21 ],
                [ 220,   88 ],
                [ 600,   150]
  ];

  var svg = d3.select(".scatterplot") // rename to match HTML element tied to
              .append("svg")
              .attr("width", "100%")
              .attr("height", "50%");

  var w = $(".scatterplot").width(); //jQuery call to use CSS selector 'width'
  var h = $(".scatterplot").height();

  var xScale = d3.scale.linear()
                       .domain([0, d3.max(dataset, function (d) {
                        return d[0];
                       })])
                       .range([padding, w - padding * 2]);

  var yScale = d3.scale.linear()
                       .domain([0, d3.max(dataset, function (d) {
                        return d[1];
                       })])
                       .range([h - padding, padding]);

  var rScale = d3.scale.linear()
                       .domain([0, d3.max(dataset, function (d){
                        return d[1];
                       })])
                       .range([2, 5]);
  svg.selectAll("circle")
     .data(dataset)
     .enter()
     .append("circle")
     .attr("cx", function(d){
       return xScale(d[0]);
     })
     .attr("cy", function(d){
       return yScale(d[1]);
     })
     .attr("r", function(d){
      return rScale(d[1]);
     });

  svg.selectAll("text")
     .data(dataset)
     .enter()
     .append("text")
     .text(function(d){
      return d[0] + "," + d[1];
     })
     .attr("x", function(d){
      return xScale(d[0]);
     })
     .attr("y", function(d){
      return yScale(d[1]);
     })
     .attr("font-family", "sans-serif")
     .attr("font-size", "11px")
     .attr("fill", "red");