//var data = [979697,1020765,1033328,1040270,1029889,1087355,1034462]
var data = [1 , 0, 0.02499287, 0.08542083, 0.03429387,0.25203994, 0.72504993]

var svg = d3.select(".VIOLENCE_week")
    .append("svg")
    .attr("width", 1200)
    .attr("height", 400)
    .attr('transform', 'translate(350,0)')

var xAxis = svg.append("line")
        .attr("x1", 50)
        .attr("y1", 330)
        .attr("x2", 650)
        .attr("y2", 330)
        .style("stroke", "black")
        .style("stroke-width", 1.0)

    //y
var yAxis = svg.append("line")
        .attr("x1", 50)
        .attr("y1", 330)
        .attr("x2", 50)
        .attr("y2", 20)
        .style("stroke", "black")
        .style("stroke-width", 1.0)

for (var i = 0; i < 6; i++) {
          svg.append("line") // y 눈금
              .attr("x1", 50)
              //y축 50만큼 차이나게
              .attr("y1", 330 - i * 50)
              .attr("x2", 55)
              .attr("y2", 330 - i * 50)
              .style("stroke", "black")
              .style("stroke-width", 0.6)
              .attr('transform', 'translate(0,-25)')

        }

    //x축 label
svg.append('text')
          .attr('x', 300)
          .attr('y', 370)
          .text("Day of the week")
          .style('font-size', '12px')
          .attr("font-family", "sans-serif")
          .attr("font-weight", "bold")
          .attr("fill", "gray")

svg.append('text')
          .attr('x', 25)
          .attr('y', 13)
          .text("Crime incidence")
          .style('font-size', '14px')
          .attr("font-family", "sans-serif")
          .attr("font-weight", "bold")
          .attr("fill", "gray")
          .attr("transform", "translate(12,240) rotate(-90)")


// x시간 추가
// x시간 추가
svg.append('text') // x 레전드
          .attr('x', 40)
          .attr('y', 355)
          .text("sun")
          .style('font-size', '10px')
          .attr("font-family", "sans-serif")
          .attr("fill", "gray")

svg.append('text') // x 레전드
          .attr('x', 90 + 40)
          .attr('y', 355)
          .text("mon")
          .style('font-size', '10px')
          .attr("font-family", "sans-serif")
          .attr("fill", "gray")

svg.append('text') // x 레전드
          .attr('x', 90*2 + 40)
          .attr('y', 355)
          .text("tue")
          .style('font-size', '10px')
          .attr("font-family", "sans-serif")
          .attr("fill", "gray")


svg.append('text') // x 레전드
          .attr('x', 90*3 + 40)
          .attr('y', 355)
          .text("wed")
          .style('font-size', '10px')
          .attr("font-family", "sans-serif")
          .attr("fill", "gray")

svg.append('text') // x 레전드
          .attr('x', 90*4 + 40)
          .attr('y', 355)
          .text("thu")
          .style('font-size', '10px')
          .attr("font-family", "sans-serif")
          .attr("fill", "gray")

svg.append('text') // x 레전드
          .attr('x', 90*5 + 40)
          .attr('y', 355)
          .text("fri")
          .style('font-size', '10px')
          .attr("font-family", "sans-serif")
          .attr("fill", "gray")

svg.append('text') // x 레전드
          .attr('x', 90*6 + 40)
          .attr('y', 355)
          .text("sat")
          .style('font-size', '10px')
          .attr("font-family", "sans-serif")
          .attr("fill", "gray")


data.forEach((d, i) => {
          if (i == 6) {
              return;
          }

            svg.append("line") // x 눈금
              .attr("x1", (i + 1) * 90)
              .attr("y1", 330)
              .attr("x2", (i + 1) * 90)
              .attr("y2", 340)
              .style("stroke", "black")
              .style("stroke-width", 0.6)
              .attr('transform', 'translate(50,0)')


  })


data.forEach((d, i) => {

          if (i == 6) {
            var rect = svg.append('rect')
                .attr('x', 530)
                .attr('y', 20)
                .attr('width', 80)
                .attr('height', 310)
                .style("fill", "#D8CEF6")
                .style("opacity", 0.5);

            var rect = svg.append('rect')
                .attr('x', 50)
                .attr('y', 20)
                .attr('width', 50)
                .attr('height', 310)
                .style("fill", "#D8CEF6")
                .style("opacity", 0.5);

              return;
          }

          var line = svg.append("line")
              .attr("x1", i * 90)
              .attr("y1", 150-(data[i]*70))
              .attr("x2", (i + 1) * 90)
              .attr("y2", 150-(data[i+1]*70))
              .attr("transform", "translate(50,25)")
              .style("stroke", "#BE81F7")
              .style("stroke-width", 3)


          var circle = svg.append('circle')
              .attr('cx', (i + 1) * 90)
              .attr('cy',  150-(data[i + 1]*70))
              .attr('r', 3)
              .attr("transform", "translate(50,25)")
              .style('fill', '#A901DB')


})
