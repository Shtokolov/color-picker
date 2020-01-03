import { action } from "typesafe-actions";
import { ColorPickerActionTypes } from "./types";

export const togglePaletteMenu = () =>
  action(ColorPickerActionTypes.TOGGLE_PALETTE_MENU);

export const toggleColorTunerMenu = () =>
  action(ColorPickerActionTypes.TOGGLE_COLOR_TUNER_MENU);

export const setHexCode = (hexCode: string) =>
  action(ColorPickerActionTypes.SET_HEX_CODE, hexCode);
