import React, { useEffect } from "react";
import api from "../lib/api";

const Jumbotron = () => {
  useEffect(() => {
    api.get("/").then(() => {
      console.log("Ready");
    });
  }, []);

  return (
    <div className="jumbotron-section wrapper">
      <h1 className="jumbotron-section title">BioDetect</h1>
    </div>
  );
};

export default Jumbotron;
