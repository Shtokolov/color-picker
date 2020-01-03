import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Palette from "../components/Palette";
import { IApplicationState } from "../state/ducks";
import {
  setHexCode,
  togglePaletteMenu
} from "../state/ducks/colorPicker/actions";
import {
  IColorPickerPalette,
    IPaletteState
} from "../state/ducks/colorPicker/types";

const PaletteContainer = ({ colors }: IColorPickerPalette) => {
  const dispatch = useDispatch();

  const stateToProps: IPaletteState = useSelector(
    ({ colorPicker }: IApplicationState) => ({
      paletteMenuIsOpened: colorPicker.paletteMenuIsOpened,
      hexCode: colorPicker.hexCode
    })
  );

  const dispatchToProps = {
    setHexCode: useCallback(action => dispatch(setHexCode(action)), [dispatch]),
    togglePaletteMenu: useCallback(() => dispatch(togglePaletteMenu()), [
      dispatch
    ])
  };

  return <Palette {...stateToProps} {...dispatchToProps} colors={colors} />;
};

export default PaletteContainer;
