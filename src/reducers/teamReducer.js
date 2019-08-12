import { FETCH_TEAM } from "../actions/types";

const initialState = {
  team: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TEAM:
      return {
        ...state,
        team: action.team
      };
    default:
      return state;
  }
}
