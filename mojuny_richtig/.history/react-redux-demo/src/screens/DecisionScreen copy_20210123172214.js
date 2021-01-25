import { Button as Button } from "../core-components/Button.jsx";
import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

export class DecisionScreen extends React.Component {
  render() {
    return (
      <div className="screen">
        <Button text="Fertig für jetzt"></Button>
        <Button text="Fertig für heute"></Button>
      </div>
    );
  }
}
