import React, { useEffect, useState } from "react";
import ColorBox from "../shared/ColorBox";
import ColorTunerMenu from "../../containers/colorTunerMenu";
import Wrapper from "./Wrapper";

import {
  IDispatchToProps,
  IColorPickerState
} from "../../state/ducks/colorPicker/types";

interface IColorTunerProps {
  onClick: Function;
}

type AllProps = IColorPickerState & IDispatchToProps & IColorTunerProps;

export default ({
  hexCode,
  toggleColorTunerMenu,
  colorTunerMenuIsOpened
}: AllProps) => {
  const [tunedHexCode, setTunedHexCode] = useState(hexCode);
  useEffect(() => {
    if (!colorTunerMenuIsOpened) setTunedHexCode(hexCode);
  }, [colorTunerMenuIsOpened, hexCode]);

  return (
    <Wrapper>
      <ColorBox
        onClick={() => {
          if (!colorTunerMenuIsOpened) toggleColorTunerMenu();
        }}
        hexCode={tunedHexCode}
      />
      {colorTunerMenuIsOpened && (
        <ColorTunerMenu setTunedHexCode={setTunedHexCode} />
      )}
    </Wrapper>
  );
};
