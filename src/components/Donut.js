import React, {Component} from 'react'
import Chart from 'react-apexcharts'
class Donut extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        options: {},
        series: [15,6],
        labels: ['Complete', 'Pending'],
        legend: {
            position: 'bottom',
        },
        
       
      }
    }
  
    render() {
  
      return (
        
                <div className="donut">
          <Chart options={this.state.options} series={this.state.series} type="donut" width="300" />
          <h5>
              Assignments <font style={{float:"right"}}> 21</font>
          </h5>
        </div>
           
        
      );
    }
  }
export default Donut
