import React, { Component } from "react";

class StockCount extends Component {
  render() {
    return (
      <button type="button" className={this.getButtonClasses()}>
        You own{" "}
        <span className="badge bg-light bg-lg">{this.props.stockCount}</span>
        {" " + this.checkPlural()}
      </button>
    );
  }

  checkPlural() {
    if (this.props.stockCount <= 1) return "stock";
    return "stocks";
  }

  getButtonClasses() {
    let classes = "btn ";
    if (this.props.stockCount <= 0) {
      classes += " btn-outline-secondary";
    } else classes += " btn-outline-success";

    return classes;
  }
}

export default StockCount;
