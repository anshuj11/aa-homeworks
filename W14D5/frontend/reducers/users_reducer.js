import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { merge } from "lodash";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  //debugger;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      console.log("In User Reducer")
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;
