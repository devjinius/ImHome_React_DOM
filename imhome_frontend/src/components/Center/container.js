import React, { Component } from "react";
import Center from "./presenter";

class Container extends Component {

  state = {
    username: "",
    password: ""
  };

  render() {
    return <Center showTable={this._showTable} showPopup={this._showPopup} {...this.props} />;
  }

  _showTable = e => {

    let arrowAction = e.currentTarget.lastChild;
    let currentTargetStyle = e.currentTarget.style;
    let targetDisplay = e.currentTarget.nextElementSibling.style;

    if (targetDisplay.display === "none" || targetDisplay.display === "") {
      currentTargetStyle.backgroundColor = "#000";
      currentTargetStyle.color = "#fff";
      targetDisplay.display = "block";
      arrowAction.innerHTML = "▲";
    } else {
      currentTargetStyle.backgroundColor = "#fff";
      currentTargetStyle.color = "#000";
      targetDisplay.display = "none";
      arrowAction.innerHTML = "▼";
    }
  };

  _showPopup = e => {

    let popUpStyle = document.getElementById("popUp").style;

    if (popUpStyle.display === "none" || popUpStyle.display === "") {
      popUpStyle.display="block";
    } else {
      popUpStyle.display="none";
    }
  };
}

export default Container;
