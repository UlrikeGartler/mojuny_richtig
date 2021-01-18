import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

export function SubCategoryScreen(props) {
  console.log(props);
  return (
    <div className="screen">
      <p>next side</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
  };
};

export default connect(mapStateToProps)(SubCategoryScreen);
