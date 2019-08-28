import React, { Component } from "react";

import "./styles.css";

import Header from "../Header";
import Installation from "../Installation";
import SimpleInstallation from "../SimpleInstallation";
import InstallationHTML from "../InstallationHTML";
import InstallationApp from "../InstallationApp";
import AfterInstallationSteps from "../AfterInstallationSteps";
import Channels from "../Channels";
import Footer from "../Footer";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Installation />
      <SimpleInstallation />
      <InstallationHTML />
      <InstallationApp />
      <AfterInstallationSteps />
      <Channels />
      <Footer />
    </div>
  );
}

export default App;
