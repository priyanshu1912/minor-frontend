import React from "react";
import { Link } from "react-router-dom";
import bull from "../src/assets/bull-image.png";
import "./index.css";

function StocksPage() {
  const list = [
    {
      name: "Tata Motors",
      url: "tata-motors-ltd",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/2231px-Tata_logo.svg.png",
      stock: "tata-motors-ltd",
    },
    // {
    //   name: "SBI",
    //   url: "state-bank-of-india",
    // },
    {
      name: "Reliance",
      url: "reliance-industries",
      img: "https://1000logos.net/wp-content/uploads/2021/09/Reliance-Industries-Limited-Logo.png",
      stock: "reliance-industries",
    },
    {
      name: "Infosys",
      url: "infosys",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png",
      stock: "infosys",
    },
    {
      name: "Hindustan Unilever",
      url: "hindustan-unilever",
      img: "https://cdn.sanity.io/images/92ui5egz/production/ba0e8bde098aa99fc24c647fe3cb85affb7243bd-1920x1080.jpg?rect=0,36,1920,1008&w=1200&h=630&fm=jpg",
      stock: "hindustan-unilever",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#fff5f5",
        padding: "1vh 5vw",
        boxSizing: "border-box",
      }}
    >
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
          <input
            type="text"
            placeholder="Search stocks here"
            className="web-search"
          />
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
      <input
        type="text"
        placeholder="Search stocks here"
        className="mobile-search"
      />
      <div className="grid">
        {list.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/stocks/${item.url}`}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <div
                style={{
                  marginBottom: "10px",
                 // border: "2px solid lightgrey",
                  width: "150px",
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderRadius: "10px",
                  background: "white",
                  gap: "5px",
                  boxShadow: "0 5px 5px #E0E0E0",
                }}
              >
                <img
                  src={item.img}
                  alt="img"
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "100%",
                    objectFit: "contain",
                    border: "1px solid lightgrey",
                    padding: "5px",
                  }}
                />
                <div style={{ textAlign: "center" }}>
                  <div>{item.name}</div>
                  <div style={{ color: "grey", fontSize: "12px" }}>
                    {item.stock}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default StocksPage;
