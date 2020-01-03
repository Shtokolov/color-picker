import React, { useEffect } from "react";
import HexText from "./HexText";
import ColorTuner from "../../containers/colorTuner";
import Wrapper from "./Wrapper";
import Palette from "../../containers/palette";
import {
  IDispatchToProps,
  IColorPickerState,
  IColorPickerProps
} from "../../state/ducks/colorPicker/types";
import isValidHex from "../../utils/isValidHex";

type AllProps = IColorPickerState & IDispatchToProps & IColorPickerProps;

const ColorPicker = ({
  hexCode,
  value,
  onChange,
  setHexCode,
  colors
}: AllProps) => {
  useEffect(() => {
    if (!isValidHex(value))
      throw Error(`"value":${value} is not color HEX code`);
    if (!hexCode) setHexCode(value);
    else onChange();
  }, [hexCode, setHexCode, onChange, value]);
  return (
    <Wrapper>
      <HexText hexCode={hexCode} />
      <ColorTuner />
      <Palette colors={colors} />
    </Wrapper>
  );
};

export default ColorPicker;
