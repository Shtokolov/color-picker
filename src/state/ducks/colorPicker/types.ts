export interface IColorPickerState {
  paletteMenuIsOpened: boolean;
  colorTunerMenuIsOpened: boolean;
  hexCode: string;
}

export const ColorPickerActionTypes = {
  TOGGLE_PALETTE_MENU: "@@colorPicker/TOGGLE_PALETTE_MENU",
  TOGGLE_COLOR_TUNER_MENU: "@@colorPicker/TOGGLE_COLOR_TUNER_MENU",
  SET_HEX_CODE: "@@colorPicker/SET_HEX_CODE"
};

export interface IDispatchToProps {
  setHexCode: Function;
  toggleColorTunerMenu: Function;
}

export interface IColorPickerPalette {
  colors: Array<object>;
}

export interface IColorPickerProps {
  value: string;
  onChange: Function;
  colors: Array<object>;
}


export interface IPaletteState {
  paletteMenuIsOpened: boolean;
  hexCode: string;
}
