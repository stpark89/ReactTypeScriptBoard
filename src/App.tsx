import React from "react";
import Header from "./components/header";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <Header />
        </div>
        <div className="col-sm-12" style={{ minHeight: "700px" }}>
          <Body />
        </div>
        <div className="col-sm-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
