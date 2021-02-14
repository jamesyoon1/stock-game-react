import React, { Component } from "react";
import StockCount from "./stockcount";

class Button extends Component {
  render() {
    return (
      <div>
        <div class="row justify-content-center">
          <button
            onClick={() => this.props.onSell()}
            className={this.getButtonClasses("sell")}
          >
            SELL
          </button>

          <StockCount stockCount={this.props.stockCount} />

          <button
            onClick={() => this.props.onBuy()}
            className={this.getButtonClasses("buy")}
          >
            BUY
          </button>
        </div>
        <div className="row justify-content-center">
          <button
            onClick={() => this.props.onStart()}
            className={this.getButtonClasses("start")}
          >
            Start Game
          </button>

          <button
            onClick={() => this.props.onPause()}
            className={this.getButtonClasses("pause")}
          >
            Pause
          </button>
        </div>
      </div>
    );
  }

  getButtonClasses(option) {
    let classes = "";
    if (option == "sell") {
      classes = "btn btn-outline-danger btn-md m-3";
      if (this.props.stockCount <= 0) classes += " disabled";
    } else if (option == "buy") {
      classes = "btn btn-outline-primary btn-md m-3";
      if (this.props.stockPrice > this.props.cash) classes += " disabled";
    } else if (option == "pause") {
      classes = "btn btn-warning btn-lg m-3";
    } else {
      classes = "btn btn-primary btn-lg m-3";
    }

    return classes;
  }
}

export default Button;
