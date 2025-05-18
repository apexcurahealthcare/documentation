import { dynamicStateReducer } from "@apexcura/ui-builder";
import { combineReducers } from "@reduxjs/toolkit";
import { resetState } from "./actions";

const appReducer = combineReducers({
  dynamic: dynamicStateReducer,
});

const rootReducer = (state: RootState | undefined, action: any): RootState => {
  if (action.type === resetState.type) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof appReducer>;
