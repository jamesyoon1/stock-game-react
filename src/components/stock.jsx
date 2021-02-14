import React, { Component } from "react";

class Stock extends Component {
  render() {
    return (
      <button
        type="button"
        className="btn btn-outline-primary btn-lg m-2"
        onClick={() => this.props.onFluctuate()}
      >
        Stock Price
        <span className="badge rounded-pill bg-warning m-1">
          {" $" + this.props.price}
        </span>
      </button>
    );
  }
}

export default Stock;
