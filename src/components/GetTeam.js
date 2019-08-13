import React, { Component } from "react";
import teamStyles from "../modules/team.module.scss";
import { connect } from "react-redux";

class GetTeam extends Component {
  render() {
    return (
      <div>
        <ol className={teamStyles.container}>
          {this.props.team.map(team => (
            <li className={teamStyles.flexbox} key={team.id}>
              <div className={teamStyles.titleDiv}>
                <h1 className={teamStyles.flexTitle}>{team.name}</h1>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    team: state.team.team
  };
}
export default connect(mapStateToProps)(GetTeam);
