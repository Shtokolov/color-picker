import { combineReducers } from "redux";
import { colorPickerReducer } from "./colorPicker/reducers";
import { IColorPickerState } from "./colorPicker/types";
// The top-level state object
export interface IApplicationState {
  colorPicker: IColorPickerState;
}

export const rootReducer = combineReducers<IApplicationState>({
  colorPicker: colorPickerReducer
});

