import React from "react";
import { Link } from "react-router-dom";

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
    <ul style={{ fontWeight: "bold" }}>
      {list.map((item, index) => {
        return (
          <li key={index}>
            <Link to={`/stocks/${item.url}`}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default StocksPage;
