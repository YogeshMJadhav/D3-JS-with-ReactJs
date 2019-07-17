import React from 'react';
import { BarChart, BubbleChart, PieChart } from 'react-charts-d3';

class BarCharts extends React.Component {
  constructor(){
    super();
    this.state = {
      barChart : [
        { key: 'Group 1', values: [ { x: 'A', y: 23 }, { x: 'B', y: 8 } ] },
        { key: 'Group 2', values: [ { x: 'A', y: 15 }, { x: 'B', y: 37 } ] },
      ],
      bubbleChart : [
        { key: 'Group 1', values: [ { x: 'A', y: 23, r: 4 }, { x: 'B', y: 8, r: 19 } ] },
        { key: 'Group 2', values: [ { x: 'A', y: 15, r: 11 }, { x: 'B', y: 37, r: 21 } ] },
      ],
      pieChart : [
        { label: 'Group 1', value: 13 },
        { label: 'Group 2', value: 15 },
      ]
    }
  }

  render(){
    return(
      <div>
        <h3>BarChart</h3>
          <BarChart data = { this.state.barChart } />
        <h3>BubbleChart</h3>
          <BubbleChart data = { this.state.bubbleChart } />
        <h3>PieChart</h3>
          <PieChart data = { this.state.pieChart } />
      </div>
    )
  }
}
    
export default BarCharts;