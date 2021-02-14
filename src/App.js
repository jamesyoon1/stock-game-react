import React, { Component, useState, useEffect } from "react";
import "./App.css";
import { changePrice, formatDollar } from "./functions.js";
import Button from "./components/button";
import NavBar from "./components/navbar";
import NetWorth from "./components/networth";
import Cash from "./components/cash";
import Stock from "./components/stock";
import Graph from "./components/graph";

class App extends Component {
  state = {
    netWorth: 100,
    cash: 100,
    price: 5,
    stockCount: 0,

    stockGraph: {
      series: [
        {
          name: "Price History",
          data: [10],
        },
      ],
    },

    netWorthGraph: {
      series: [
        {
          name: "Net Worth History",
          data: [100],
        },
      ],
    },
  };

  start = () => {
    this.interval = setInterval(
      () => this.handleFluctuate(),
      500
    );
  }
  pause = () => {
    clearInterval(this.interval);
  }

  handleBuy = () => {
    let cash = this.state.cash;
    let price = this.state.price;
    let stockCount = this.state.stockCount;

    if (cash >= price) {
      cash = formatDollar(cash - price);
      stockCount++;

      this.setState({
        cash,
        stockCount,
      });
    }
  };

  handleSell = () => {
    let cash = this.state.cash;
    let price = this.state.price;
    let stockCount = this.state.stockCount;

    if (stockCount >= 1) {
      cash = formatDollar(cash + price);
      stockCount--;
      let netWorth = formatDollar(cash + stockCount * price);

      this.setState({
        netWorth,
        cash,
        stockCount,
      });
    }
  };

  handleFluctuate = () => {
    let cash = this.state.cash;
    let price = this.state.price;
    let stockCount = this.state.stockCount;
    let volatility = 0.1;

    price = changePrice(price, volatility);
    let netWorth = formatDollar(cash + stockCount * price);

    let series = this.state.stockGraph.series[0];
    let stockHistory = [...series.data];
    stockHistory.push(price);
    series = this.state.netWorthGraph.series[0];
    let netWorthHistory = [...series.data];
    netWorthHistory.push(netWorth);

    this.setState({
      netWorth,
      price,

      stockGraph: {
        series: [{ data: stockHistory }],
      },

      netWorthGraph: {
        series: [{ data: netWorthHistory }],
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div class="row justify-content-center">
          <NetWorth netWorth={this.state.netWorth} />
          <Cash cash={this.state.cash} />
          <Stock price={this.state.price} onFluctuate={this.handleFluctuate} />
        </div>
        <Graph
          series={this.state.stockGraph.series}
          netSeries={this.state.netWorthGraph.series}
        />
        <Button
          onBuy={this.handleBuy}
          onSell={this.handleSell}
          onStart={this.start}
          onPause={this.pause}
          stockCount={this.state.stockCount}
          cash={this.state.cash}
          stockPrice={this.state.price}
        />
      </React.Fragment>
    );
  }
}

export default App;
//        labels: this.props.priceHistory.map((price) => 0),
//        StockGraph graph={this.state.stockGraph} /
        //<Graph graph={this.state.stockGraph} data={this.state.history}/>
