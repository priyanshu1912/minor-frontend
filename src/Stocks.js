import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import bull from "../src/assets/bull-image.png";
import { MdArrowDropDown, MdArrowDropUp, MdHelpOutline } from "react-icons/md";
import { useParams } from "react-router-dom";
import styles from "./Stocks.module.css";
import { Triangle } from "react-loader-spinner";
import ReactApexChart from "react-apexcharts";

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
  const [graphData, setGraphData] = useState([]);
  const [label, setLabel] = useState([]);
  const [activeBtn, setActiveBtn] = useState("btn1");

  useEffect(() => {
    setInterval(() => {
      axios
        //.get(`https://minor-project-backend.herokuapp.com/${params.id}`)
        .get(`http://localhost:8000/${params.id}`)
        .then((response) => {
          setImage(response.data.image);
          setAbout(response.data.data1);
          let arr = response.data.data2.newTable.concat(
            response.data.data2.table
          );
          setTableData(arr);
          setStock(response.data.data2.stock);
          setGraphData((oldArr) => [
            ...oldArr,
            parseFloat(response.data.data2.stock.price),
          ]);
          setLabel((oldArr) => [...oldArr, response.data.data2.stock.price]);
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

  const series = [
    {
      name: "STOCK ABC",
      data: graphData,
    },
  ];
  const basicoptions = {
    chart: {
      toolbar: {
        show: false,
      },
      id: "Chart",
      type: "area",
      height: 350,
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },

    // title: {
    //   text: "Fundamental Analysis of Stocks",
    //   align: "left",
    // },
    // subtitle: {
    //   text: "Price Movements",
    //   align: "left",
    // },
    labels: [
      "13 Nov 2017",
      "14 Nov 2017",
      "15 Nov 2017",
      "16 Nov 2017",
      "17 Nov 2017",
      "20 Nov 2017",
      "21 Nov 2017",
      "22 Nov 2017",
      "23 Nov 2017",
      "24 Nov 2017",
      "27 Nov 2017",
      "28 Nov 2017",
      "29 Nov 2017",
      "30 Nov 2017",
      "01 Dec 2017",
      "04 Dec 2017",
      "05 Dec 2017",
      "06 Dec 2017",
      "07 Dec 2017",
      "08 Dec 2017",
    ],
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
      },
    },
    yaxis: {
      show: false,
      opposite: true,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
      },
    },
    legend: {
      horizontalAlign: "left",
    },
    grid: {
      show: true,
    },
  };

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
      {tableData && data && stock && graphData ? (
        <>
          <img
            src="https://stock-screener.org/images/articles/tradingview-chart.png"
            style={{
              background: "white",
              width: "100%",
              height: "180px",
              position: "absolute",
              zIndex: 1,
              top: 0,
              left: 0,
              objectFit: "cover",
            }}
          />
          <div
            style={{
              width: "100%",
              height: "180px",
              position: "absolute",
              zIndex: 1,
              top: 0,
              left: 0,
              backdropFilter: "blur(2px)",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "25px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", zIndex: 100 }}>
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
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src={image}
                style={{
                  zIndex: 100,
                  width: "130px",
                  height: "130px",
                  borderRadius: "100%",
                  objectFit: "contain",
                  padding: "5px",
                  border: "2px solid lightgrey",
                  background: "white",
                }}
              />
              <div style={{ zIndex: 100 }}>
                {stock?.name}
                <div
                  style={{
                    fontSize: "30px",
                    display: "flex",
                    gap: "5px",
                    zIndex: 100,
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
                            zIndex: 100,
                          }
                        : {
                            fontSize: "18px",
                            color: "red",
                            display: "flex",
                            alignItems: "center",
                            zIndex: 100,
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

          {/* <div style={{ width: "100%", height: "150px" }}>
            <ReactApexChart
              options={basicoptions}
              series={series}
              type="area"
              height="100%"
            />
          </div> */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              margin: "40px 0",
            }}
          >
            <div
              className={
                activeBtn === "btn1" ? styles.activebtn : styles.unactivebtn
              }
              onClick={() => setActiveBtn("btn1")}
            >
              Balance Sheet
            </div>
            <div
              className={
                activeBtn === "btn2" ? styles.activebtn : styles.unactivebtn
              }
              onClick={() => setActiveBtn("btn2")}
            >
              Button 2
            </div>
            <div
              className={
                activeBtn === "btn3" ? styles.activebtn : styles.unactivebtn
              }
              onClick={() => setActiveBtn("btn3")}
            >
              Button 3
            </div>
          </div>

          <div className={styles.tables}>
            {activeBtn === "btn1" && (
              <>
                {tableData && (
                  <div>
                    {/* <div
                      style={{
                        fontWeight: "600",
                        marginBottom: "15px",
                        textDecoration: "underline",
                        fontSize: "15px",
                        width: "fit-content",
                      }}
                    >
                      Balance Sheet :
                    </div> */}
                    <table className={styles.table} cellSpacing={0}>
                      <tr>
                        {Object.keys(tableData[0]).map((item) => {
                          return (
                            <th
                              style={{
                                textAlign: "left",
                                padding: "5px",
                                background: "#87CEFA",
                                color: "#00308F",
                                padding: "10px",
                                border: "1px solid #00308F",
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
                              style={{
                                border: "1px solid grey",
                                padding: "5px",
                                background: "white",
                              }}
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
                    {/* <div
                      style={{
                        fontWeight: "600",
                        marginBottom: "15px",
                        textDecoration: "underline",
                        fontSize: "14px",
                      }}
                    >
                      Formulaes :
                    </div> */}
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
                    <div>
                      Current ratio = current assets / current liabilities
                    </div>
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
                      Asset turnover = revenue / (non-current liabilities +
                      total equity)
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
                    <div>
                      Inventory days = inventory / cost of sales * 365 days
                    </div>
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold" }}>Payables days :</div>
                    <div>
                      Payables days = payables / purchases (or cost of sales) *
                      365 days
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
              </>
            )}

            {activeBtn === "btn2" && (
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
                  <div>
                    Current ratio = current assets / current liabilities
                  </div>
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
                  <div>
                    Inventory days = inventory / cost of sales * 365 days
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: "bold" }}>Payables days :</div>
                  <div>
                    Payables days = payables / purchases (or cost of sales) *
                    365 days
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
            )}
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            minHeight: "100vh",
          }}
        >
          <Triangle
            height="80"
            width="80"
            color="black"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
    </div>
  );
}

export default Stocks;
