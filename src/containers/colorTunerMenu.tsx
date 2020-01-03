import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ColorTunerMenu from "../components/ColorTuner/ColorTunerMenu";
import { IApplicationState } from "../state/ducks";
import {
  setHexCode,
  toggleColorTunerMenu
} from "../state/ducks/colorPicker/actions";
import { IColorPickerState } from "../state/ducks/colorPicker/types";

type IColorTunerMenuContainer = { setTunedHexCode: Function };
const ColorTunerMenuContainer = (props: IColorTunerMenuContainer) => {
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

  return (
    <ColorTunerMenu
      {...stateToProps}
      {...dispatchToProps}
      setTunedHexCode={props.setTunedHexCode}
    />
  );
};

export default ColorTunerMenuContainer;
