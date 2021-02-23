import React, { useState, useEffect } from "react";
import { Typography, Card } from "@material-ui/core";
import "../styles/home.css";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataFromApi();
  }, []);

  function getDataFromApi() {
    axios
      .get("http://192.168.1.100:5000/bank/")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div style={{ background: "#dadada", height: "100vh" }}>
      <Typography align="center" variant="h3">
        My Bank
      </Typography>
      <div className="view-point">
        <Card className="card-items">
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Aakash MiniBank Info:-
          </Typography>
          <div className="card-div">
            <p>
              <span style={{ color: "black" }}>Total</span>
              <span style={{ color: "green" }}>:-{100}</span>
            </p>
            <p>
              <span style={{ color: "black" }}>Due</span>
              <span style={{ color: "red" }}>:-{30}</span>
            </p>
          </div>
        </Card>
        <Card className="card-items">
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Rojesh MiniBank Info:-
          </Typography>
          <div className="card-div">
            <p>
              <span style={{ color: "black" }}>Total</span>
              <span style={{ color: "green" }}>:-{100}</span>
            </p>
            <p>
              <span style={{ color: "black" }}>Due</span>
              <span style={{ color: "red" }}>:-{20}</span>
            </p>
          </div>
        </Card>
      </div>
      <br />
      <Card className="watch-point">
        <div className="card-div">
          <p>
            <span style={{ color: "black" }}>Total</span>
            <span style={{ color: "green" }}>:-{200}</span>
          </p>
          <p>
            <span style={{ color: "black" }}>Left</span>
            <span style={{ color: "red" }}>:-{50}</span>
          </p>
        </div>
      </Card>
    </div>
  );
}
