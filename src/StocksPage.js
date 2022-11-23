import React from "react";
import { Link } from "react-router-dom";
import bull from "../src/assets/bull-image.png";

function StocksPage() {
  const list = [
    {
      name: "Tata Motors",
      url: "tata-motors-ltd",
    },
    // {
    //   name: "SBI",
    //   url: "state-bank-of-india",
    // },
    {
      name: "Reliance",
      url: "reliance-industries",
    },
    {
      name: "Infosys",
      url: "infosys",
    },
    {
      name: "Hindustan Unilever",
      url: "hindustan-unilever",
    },
  ];

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#fff5f5" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={bull} style={{ width: "80px" }} />
          <div
            style={{
              fontWeight: "700",
              letterSpacing: "1px",
              fontSize: "18px",
              color: "black",
            }}
          >
            <span style={{ color: "red" }}>Investing</span>IQ
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2vw",
            color: "red",
            fontWeight: "bold",
          }}
        >
          {/* <div style={{ cursor: "pointer", letterSpacing: "1px" }}>
            <Link style={{ color: "red", textDecoration: "none" }} to="/stocks">
              Stocks
            </Link>
          </div>
          <div style={{ cursor: "pointer", letterSpacing: "1px" }}>About</div>
          <div style={{ cursor: "pointer", letterSpacing: "1px" }}>
            Features
          </div> */}
        </div>
      </div>
      <ul style={{ fontWeight: "bold" }}>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`/stocks/${item.url}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StocksPage;
