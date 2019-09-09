import React, {Component} from 'react';
import * as d3 from "d3";
import './LineGraph.css';

class SignalGraph extends Component {

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
              "translate(" + margin.left + "," + margin.top + ")");
                    

        // X Axis
        var x = d3.scaleLinear()
                .domain([0, 50])
                .range([ 0, width ]);
        
            
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x)
            .ticks(8));
        
        
        // label for x axis
        svg.append("text")             
            .attr("transform",
                  "translate(" + (width/2) + " ," + 
                                 (height + margin.top + 20) + ")")
            .style("text-anchor", "middle")
            .style("font-size","12px")
            .text("ms");

        //  Y axis
        var y = d3.scaleLinear()
            .domain( [0, 1.5])
            .range([ height, 0 ]);
            svg.append("g")
            .call(d3.axisLeft(y) 
            .ticks(15));

            // label for y axis
            svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left + 10 )
            .attr("x",0 - (height / 2) )
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .style("font-size","12px")
            .text("Signal");



        // Plotting line
        svg.append("path")
        .datum(data)
        .attr("fill", "#cce5df")
        .attr("stroke", "#69b3a2")
        .attr("stroke-width", 1.5)
        .attr("d", d3.area()
          .x(function(d, i) { return x(i+1) })
          .y0(y(0))
          .y1(function(d) { return y(d) })
          )
    
            
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

export default SignalGraph;