//Width and height
      var w = 300;
      var h = 300;

      var dataset = [ 5, 10, 20, 45, 6, 25 ];

      var outerRadius = w / 2;
      var innerRadius = h/3;
      var arc = d3.svg.arc()
              .innerRadius(innerRadius)
              .outerRadius(outerRadius);

      var pie = d3.layout.pie();

      //Easy colors accessible via a 10-step ordinal scale
      var color = d3.scale.category10();

      //Create SVG element
      var svg = d3.select(".piechart")
            .append("svg")
            .attr("width", "100%")
            .attr("height", "50%");

      //Set up groups
      var arcs = svg.selectAll("g.arc")
              .data(pie(dataset))
              .enter()
              .append("g")
              .attr("class", "arc")
              .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

      //Draw arc paths
      arcs.append("path")
          .attr("fill", function(d, i) {
            return color(i);
          })
          .attr("d", arc);

      //Labels
      arcs.append("text")
          .attr("transform", function(d) {
            return "translate(" + arc.centroid(d) + ")";
          })
          .attr("text-anchor", "middle")
          .text(function(d) {
            return d.value;
          });