import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import bull from "../src/assets/bull-image.png";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useParams } from "react-router-dom";
import styles from "./Stocks.module.css";

function Stocks() {
  const params = useParams();
  const [tableData, setTableData] = useState(null);
  const [stock, setStock] = useState(null);
  const [about, setAbout] = useState(null);
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    operatingCost: null,
    nonCurrentLiability: null,
    totalEquity: null,
    revenue: null,
    grossProfit: null,
    currentAsset: null,
    currentLiability: null,
    inventory: null,
    receivables: null,
    creditSales: null,
    purchases: null,
    payables: null,
    financeCost: null,
    ordinaryFunds: null,
  });

  useEffect(() => {
    setInterval(() => {
      axios
        .get(`https://minor-project-backend.herokuapp.com/${params.id}`)
        .then((response) => {
          setImage(response.data.image);
          setAbout(response.data.data1);
          let arr = response.data.data2.newTable.concat(
            response.data.data2.table
          );
          setTableData(arr);
          setStock(response.data.data2.stock);
        })
        .catch((err) => console.log(err));
    }, 1000);
  }, []);

  useEffect(() => {
    tableData?.map((item) => {
      if (item["Period Ending:"] === "Total Current Assets") {
        setData({ ...data, currentAsset: parseInt(item["202231/03"]) });
      }
      if (item["Period Ending:"] === "Total Current Liabilities") {
        setData({ ...data, currentLiability: parseInt(item["202231/03"]) });
      }
      if (item["Period Ending:"] === "Total Inventory") {
        setData({ ...data, inventory: parseInt(item["202231/03"]) });
      }
      if (item["Period Ending:"] === "Total Equity") {
        setData({ ...data, totalEquity: parseInt(item["202231/03"]) });
      }
      if (item["Period Ending:"] === "Total Receivables, Net") {
        setData({ ...data, receivables: parseInt(item["202231/03"]) });
      }
    });
  }, [tableData]);

  return (
    <div
      style={{
        padding: "1vh 5vw",
        fontSize: "14px",
        boxSizing: "border-box",
        color: "black",
        background: "#fff5f5",
        minHeight: "100vh",
        boxSizing: "border-box",
        color: "black",
        paddingBottom: "30px",
      }}
    >
      {tableData && data && stock ? (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "25px",
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
          <div
            style={{
              fontWeight: "600",
              fontSize: "20px",
              marginBottom: "30px",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}
            >
              <img src={image} width="150px" />
              <div>
                {stock?.name}
                <div
                  style={{
                    fontSize: "30px",
                    display: "flex",
                    gap: "5px",
                  }}
                >
                  {stock?.price}{" "}
                  <div
                    style={
                      stock?.change.split("")[0] === "+"
                        ? {
                            fontSize: "18px",
                            color: "#0ea600",
                            display: "flex",
                            alignItems: "center",
                          }
                        : {
                            fontSize: "18px",
                            color: "red",
                            display: "flex",
                            alignItems: "center",
                          }
                    }
                  >
                    {stock?.change.split("")[0] === "+" ? (
                      <MdArrowDropUp color="#0ea600" size={30} />
                    ) : (
                      <MdArrowDropDown color="red" size={30} />
                    )}
                    {stock?.change}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.about}>{about}</div>
          </div>
          <div className={styles.tables}>
            {tableData && (
              <div>
                <div
                  style={{
                    fontWeight: "600",
                    marginBottom: "15px",
                    textDecoration: "underline",
                    fontSize: "15px",
                    width: "fit-content",
                  }}
                >
                  Balance Sheet :
                </div>
                <table className={styles.table} cellSpacing={0}>
                  <tr>
                    {Object.keys(tableData[0]).map((item) => {
                      return (
                        <th
                          style={{
                            textAlign: "left",
                            border: "1px solid grey",
                            padding: "5px",
                            background: "lightgrey",
                          }}
                        >
                          {item}
                        </th>
                      );
                    })}
                  </tr>
                  {tableData.map((item) => (
                    <tr key={item.id}>
                      {Object.values(item).map((val) => (
                        <td
                          style={{ border: "1px solid grey", padding: "5px" }}
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </table>
              </div>
            )}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                fontSize: "12px",
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: "600",
                    marginBottom: "15px",
                    textDecoration: "underline",
                    fontSize: "14px",
                  }}
                >
                  Formulaes :
                </div>
                <div style={{ fontWeight: "bold" }}>
                  Return on Capital employed (ROCE) :
                </div>
                <div>
                  ROCE = operating profit / (non-current liabilites + total
                  equity) %
                </div>
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>
                  Return on Sales (ROS) :
                </div>
                <div>ROS = operating profit / revenue %</div>
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>Gross Margin :</div>
                <div>Gross Margin = gross profit / revenue %</div>
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>
                  Current ratio :{" "}
                  <span style={{ fontWeight: "600", color: "blue" }}>
                    {(data.currentAsset / data.currentLiability).toFixed(1)}
                  </span>
                </div>
                <div>Current ratio = current assets / current liabilities</div>
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>
                  Quick ratio :{" "}
                  <span style={{ fontWeight: "600", color: "blue" }}>
                    {(
                      (data.currentAsset - data.inventory) /
                      data.currentLiability
                    ).toFixed(1)}
                  </span>
                </div>
                <div>
                  Quick ratio = (current assets - inventory) / current
                  liabilities
                </div>
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>Asset turnover :</div>
                <div>
                  Asset turnover = revenue / (non-current liabilities + total
                  equity)
                </div>
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>Receivables days :</div>
                <div>
                  Receivables days = receivables / credit sales * 365 days
                </div>
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>Inventory days :</div>
                <div>Inventory days = inventory / cost of sales * 365 days</div>
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>Payables days :</div>
                <div>
                  Payables days = payables / purchases (or cost of sales) * 365
                  days
                </div>
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>Debt-to-equity :</div>
                <div>
                  Debt-to-equity = non-current liabilities / ordinary
                  shareholders fund %
                </div>
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>Interest cover :</div>
                <div>Interest cover = operating profit / finance costs</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          style={{ textAlign: "center", marginTop: "30px", fontWeight: "600" }}
        >
          Loading...
        </div>
      )}
    </div>
  );
}

export default Stocks;
