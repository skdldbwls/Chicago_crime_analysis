var svg = d3.select(".SUB_title1")
    .append("svg")
    .attr('width', 1100)
    .attr('height', 60)
    .attr('transform','translate(180,0)')

    svg.append('text')
    .attr('x', 0)
    .attr('y', 50)
    .text('[ Crime occurrence ]')
    .style('font-size', '20px')
    .attr("font-family", "sans-serif")
    .attr("fill", "black")

    svg.append('text')
    .attr('x', 700)
    .attr('y', 50)
    .text('[ Arrest Rate ]')
    .style('font-size', '20px')
    .attr("font-family", "sans-serif")
    .attr("fill", "black")