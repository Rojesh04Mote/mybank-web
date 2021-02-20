import React from "react";
import { Typography, Card } from "@material-ui/core";
import "../styles/home.css";

export default function Home() {
  return (
    <div style={{ background: "#dadada", height: "100vh" }}>
      <Typography align="center" variant="h3">
        My Bank
      </Typography>
      <div className="view-point">
        <div className="card-items">
          <Card>
            <Typography color="secondary">Aakash MiniBank Info:-</Typography>
            <Typography color="primary">Total : {"100"}</Typography>
            <Typography color="secondary">Due : {"20"}</Typography>
          </Card>
        </div>
        <div className="card-data">
          <Card>
            <Typography color="secondary">Rojesh MiniBank Info:-</Typography>
            <Typography color="primary">Total:{"200"}</Typography>
            <Typography color="secondary">Due:{"30"}</Typography>
          </Card>
        </div>
      </div>
      <br />
      <div className="card-core">
        <Card className="watch-point">
          <Typography color="secondary">Total:{500}</Typography>
          <Typography color="primary ">Left:{"200"}</Typography>
        </Card>
      </div>
    </div>
  );
}
