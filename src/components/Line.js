import React, {Component} from 'react'
import Chart from 'react-apexcharts'
class Line extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          chart: {
            id: "basic-bar",
            type: "area"
          },
          xaxis: {
            categories: ['IA1','IA2', 'IA3']
          }
        },
        fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 90, 100]
            }
          },
        series: [
          {
            name: "your marks",
            data: [30, 40, 45]
          },
          {
            name: "Class average",
            data: [40, 42, 40]
          }

        ]
      };
    }
  
    render() {
  
      return (
        
                <div className="line container-fluid border">
                      <h5>
              Performance SEM-6
          </h5>
          <Chart options={this.state.options} series={this.state.series} type="area" width="360" />
        
        </div>
           
        
      );
    }
  }
export default Line
