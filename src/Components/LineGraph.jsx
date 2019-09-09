import React, {Component} from 'react';
import * as d3 from "d3";
import './LineGraph.css';

class LineGraph extends Component {


    drawGraph = () =>{
        const { data, index } = this.props;
        const dynamicId = "#line" + index;

        var margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 460 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;
        
        const svg = d3.select(dynamicId)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top  + ")");
                    

        // X Axis
        var x = d3.scaleLinear()
                .domain([0, 50])
                .range([ 0, width ]);
                
           
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x)
            .ticks(8));

        // label for  x axis
        svg.append("text")             
            .attr("transform",
                  "translate(" + (width/2) + " ," + 
                                 (height + margin.top + 20) + ")")
            .style("text-anchor", "middle")
            .style("font-size","12px")
            .text("ms");

        //  Y axis
        var y = d3.scaleLinear()
            .domain( [0, 20])
            .range([ height, 0 ]);
            svg.append("g")
            .call(d3.axisLeft(y));

        // label for y axis
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left + 10)
            .attr("x",0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .style("font-size","12px")
            .text("degree Celsius");




        // Plotting line
        svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
            .x((d, i) =>  x(i+1) )
            .y((d) =>   y(d) )
            );


        // Plotting points
        svg.append("g")
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
              .attr("class", "myCircle")
              .attr("cx", function(d, i) { return x(i+1) } )
              .attr("cy", function(d) { return y(d) } )
              .attr("r", 3)
              .attr("stroke", "#69b3a2")
              .attr("stroke-width", 2)
              .attr("fill", (d) => {
                 if(d>10) 
                 return "red";
                 else if(d>8)
                 return "yellow"
                 else
                 return "white"
               })
            .append("svg:title")
            .text(function(d, i) { const x = i+1;  const y =d; return (y +" degree C in " + x + "ms") });
            
    }

    componentDidMount() {
        this.drawGraph();
    }
    render() {
        const { index } = this.props;
        const dynamicId = "line" + index;
        return(
            <div id={dynamicId}>

            </div>
        );
    }
}

export default LineGraph;