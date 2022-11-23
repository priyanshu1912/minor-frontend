import "./App.css";
import logo from "../src/assets/landing-image.jpg";
import bull from "../src/assets/bull-image.png";
import background from "../src/assets/background-image.jpg";
import { Link } from "react-router-dom";
import { FaRegHandPointRight } from "react-icons/fa";

const images = [
  "https://little-invest-town.vercel.app/reliance.png",
  "https://little-invest-town.vercel.app/hdfc.png",
  "https://little-invest-town.vercel.app/wipro.png",
  "https://little-invest-town.vercel.app/tcs.png",
  "https://little-invest-town.vercel.app/infosys.png",
  "https://little-invest-town.vercel.app/kotak.png",
  "https://little-invest-town.vercel.app/asian_paints.png",
  "https://little-invest-town.vercel.app/airtel.svg",
  "https://little-invest-town.vercel.app/maruti.png",
  "https://little-invest-town.vercel.app/whirpool.png",
];

function App() {
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
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: "40px",
            fontWeight: "600",
            width: "50%",
            letterSpacing: "1px",
            marginTop: "22vh",
            color: "black",
          }}
        >
          Analyze Indian stocks as easily as buying a coffee.
          <div
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#696969",
              marginTop: "3vh",
            }}
          >
            InvestingIQ transforms complicated financial statements of companies
            into an imaginary character's personal finances. It's easier to
            analyse personal finances than that of businesses. No Sign Up
            Required.
          </div>
          <Link
            to="/stocks"
            style={{
              fontSize: "14px",
              color: "white",
              background: "#fdc55e",
              borderRadius: "5px",
              padding: "10px 30px",
              cursor: "pointer",
              width: "fit-content",
              marginTop: "20px",
              textDecoration: "none",
            }}
          >
            View Stocks
          </Link>
        </div>
        <img
          src="https://little-invest-town.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flanding.0817528e.png&w=1920&q=75"
          width="500px"
          style={{ paddingTop: "100px" }}
        />
      </div>{" "}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "150px",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img
              src="https://little-invest-town.vercel.app/coffee.png"
              style={{ width: "150px" }}
            />
            <div style={{ fontSize: "16px", fontWeight: "500" }}>
              Cafe Coffee Day @ 48.80 INR
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img
              src="https://little-invest-town.vercel.app/mobile.png"
              style={{ width: "150px" }}
            />
            <div style={{ fontSize: "16px", fontWeight: "500" }}>Iphone @</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img
              src="https://little-invest-town.vercel.app/laptop.png"
              style={{ width: "150px" }}
            />
            <div style={{ fontSize: "16px", fontWeight: "500" }}>Lenovo @</div>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div style={{ fontWeight: "600", fontSize: "35px" }}>
            How does InvestingIQ work?
          </div>
          <div
            style={{
              fontSize: "15px",
              color: "#696969",
              fontWeight: "500",
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaRegHandPointRight
                color="red"
                size={25}
                style={{ flexShrink: "0" }}
              />
              InvestingIQ scales down company profile to a personal level
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaRegHandPointRight
                color="red"
                size={25}
                style={{ flexShrink: "0" }}
              />
              Each company is represented by a character with similar finances
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaRegHandPointRight
                color="red"
                size={25}
                style={{ flexShrink: "0" }}
              />
              InvestingIQ flattens the learning curve to understand company
              portfolios by converting complex financial jargon into simple
              everyday words
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaRegHandPointRight
                color="red"
                size={25}
                style={{ flexShrink: "0" }}
              />
              InvestingIQ simplifies decision making while buying shares for
              people with a non-finance background
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaRegHandPointRight
                color="red"
                size={25}
                style={{ flexShrink: "0" }}
              />
              Add stocks you like to your personal plan (saved locally)
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "150px", marginBottom: "50px" }}>
        <div
          style={{
            fontSize: "25px",
            fontWeight: "600",
            color: "black",
            textAlign: "center",
          }}
        >
          Analyze the <span style={{ color: "red" }}>top companies</span> of the
          stock market
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          {images.map((item) => {
            return <img src={item} style={{ width: "80px" }} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
