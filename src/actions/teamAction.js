import { FETCH_TEAM } from "./types";

export const fetchTeam = () => dispatch => {
  fetch("/team")
    .then(res => res.json())
    .then(team =>
      dispatch({
        type: FETCH_TEAM,
        team: team
      })
    );
};
