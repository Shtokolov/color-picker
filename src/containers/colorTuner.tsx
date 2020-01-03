import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ColorTuner from "../components/ColorTuner";
import { IApplicationState } from "../state/ducks";
import {
  setHexCode,
  toggleColorTunerMenu
} from "../state/ducks/colorPicker/actions";
import { IColorPickerState } from "../state/ducks/colorPicker/types";

const ColorTunerContainer = () => {
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

  // @ts-ignore
  return <ColorTuner {...stateToProps} {...dispatchToProps} />;
};

export default ColorTunerContainer;
