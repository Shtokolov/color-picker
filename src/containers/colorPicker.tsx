import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ColorPicker from "../components/ColorPicker";
import { IApplicationState } from "../state/ducks";
import {
  setHexCode,
  toggleColorTunerMenu
} from "../state/ducks/colorPicker/actions";
import { IColorPickerState } from "../state/ducks/colorPicker/types";

export interface IColorPickerContainer {
  value: string;
  onChange: Function;
  colors: Array<object>;
}

const ColorPickerContainer = (props: IColorPickerContainer) => {
  const dispatch = useDispatch();

  const stateToProps: IColorPickerState = useSelector(
    ({ colorPicker }: IApplicationState) => ({
      paletteMenuIsOpened: colorPicker.paletteMenuIsOpened,
      colorTunerMenuIsOpened: colorPicker.colorTunerMenuIsOpened,
      hexCode: colorPicker.hexCode
    })
  );

  const dispatchToProps = {
    setHexCode: useCallback(action => dispatch(setHexCode(action)), [dispatch]),
    toggleColorTunerMenu: useCallback(() => dispatch(toggleColorTunerMenu()), [
      dispatch
    ])
  };

  return <ColorPicker {...stateToProps} {...dispatchToProps} {...props} />;
};

export default ColorPickerContainer;
