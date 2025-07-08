import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            border: "2px solid #333",
            padding: "30px",
            borderRadius: "10px",
            textAlign: "center",
            backgroundColor: "#f0f0f0",
            minWidth: "300px",
          }}
        >
          <p style={{ fontSize: "2rem", marginBottom: "20px" }}>
            Count: {this.state.count}
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            <button
              onClick={this.handleDecrement}
              style={{
                padding: "10px 20px",
                fontSize: "1rem",
                backgroundColor: "#dc3545", // red
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Decrease
            </button>
            <button
              onClick={this.handleIncrement}
              style={{
                padding: "10px 20px",
                fontSize: "1rem",
                backgroundColor: "#28a745", // green
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Increase
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyComponent;
