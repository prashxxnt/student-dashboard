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
            categories: ['Y1','Y2', 'Y3', 'Y4']
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
            name: "First Class",
            data: [30, 40, 45, 50]
          },
          {
            name: "Lower Class",
            data: [70, 60, 55, 65]
          }

        ]
      };
    }
  
    render() {
  
      return (
        
                <div className="line container-fluid border">
                      <h5>
              Performance
          </h5>
          <Chart options={this.state.options} series={this.state.series} type="area" width="360" />
        
        </div>
           
        
      );
    }
  }
export default Line
