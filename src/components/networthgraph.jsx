import React, { Component } from "react";
import Chart from "react-apexcharts";

class NetWorthGraph extends Component {
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.props.options}
              series={this.props.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NetWorthGraph;
