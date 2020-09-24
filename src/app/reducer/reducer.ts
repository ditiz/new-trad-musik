import { UserData } from "../../types/userData";
import { reducerActions } from "../actions/action";

export type ReducerAction = {
  type: reducerActions.SET_USER;
  userData: UserData;
};

export interface ReducerState {
  userData?: UserData;
}

export const defaultState = {};

export const reducer = (
  state: ReducerState = defaultState,
  action: ReducerAction
): ReducerState => {
  console.log(action, state);
  switch (action.type) {
    case reducerActions.SET_USER:
      return { ...state, userData: action.userData };
    default:
      return state;
  }
};
