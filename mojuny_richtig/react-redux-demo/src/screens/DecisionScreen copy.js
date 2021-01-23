import { Button as Button } from "../core-components/Button.js";
import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

export function DecisionScreen(props) {
  return (
    <div className="screen">
      <Button text="Fertig für jetzt"></Button>
      <Button text="Fertig für heute"></Button>
    </div>
  );
}

export default DecisionScreen;
