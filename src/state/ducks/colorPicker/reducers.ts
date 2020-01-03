import { Action, PayloadAction, TypeConstant } from "typesafe-actions";
import { IColorPickerState, ColorPickerActionTypes } from "./types";
export const initialState: IColorPickerState = {
  paletteMenuIsOpened: false,
  colorTunerMenuIsOpened: false,
  hexCode: ""
};
export const colorPickerReducer = (
  state: IColorPickerState = initialState,
  action: Action<TypeConstant> & PayloadAction<TypeConstant, string>
): IColorPickerState => {
  switch (action.type) {
    case ColorPickerActionTypes.TOGGLE_PALETTE_MENU: {
      return { ...state, paletteMenuIsOpened: !state.paletteMenuIsOpened };
    }
    case ColorPickerActionTypes.TOGGLE_COLOR_TUNER_MENU: {
      return {
        ...state,
        colorTunerMenuIsOpened: !state.colorTunerMenuIsOpened
      };
    }
    case ColorPickerActionTypes.SET_HEX_CODE: {
      return {
        ...state,
        hexCode: action.payload
      };
    }
    default:
      return state;
  }
};
