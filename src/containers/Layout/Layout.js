import React from "react";
import { Component } from "react";

import classes from "./Layout.module.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

class Layout extends Component {
  render() {
    return <div className={classes.Layout}><NavigationBar/>Layout</div>;
  }
}

export default Layout;
