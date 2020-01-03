import { createStore, Store } from "redux";
import { IApplicationState, rootReducer } from "./ducks";

export default function configureStore(
  initialState: IApplicationState
): Store<IApplicationState> {
  return createStore(rootReducer, initialState);
}
