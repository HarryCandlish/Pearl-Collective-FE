import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./layout/Nav";
import Team from "./pages/Team";

import { fetchTeam } from "./actions/teamAction";
import { connect } from "react-redux";

export class App extends Component {
  componentDidMount() {
    this.props.team();
  }
  render() {
    return (
      <div>
        <Nav />
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/team" component={Team} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    team: state.team
  };
};

const mapDispatchToProps = dispatch => {
  return {
    team: () => dispatch(fetchTeam())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
