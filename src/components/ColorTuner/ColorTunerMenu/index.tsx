import React, { useCallback, useEffect, useRef, useState } from "react";
import ColorRangeInput from "./ColorRangeInput";
import Buttons from "./Buttons";
import Triangle from "../../shared/Triangle";
import Wrapper from "./Wrapper";
import convert from "color-convert";

interface IColorTunerMenu {
  colorTunerMenuIsOpened: boolean;
  toggleColorTunerMenu: Function;
  hexCode: string;
  setTunedHexCode: Function;
  setHexCode: Function;
}


export default ({
  colorTunerMenuIsOpened,
  toggleColorTunerMenu,
  hexCode,
  setTunedHexCode,
  setHexCode
}: IColorTunerMenu) => {
  const ref = useRef(null);
  const [rgbValue, setRgbValue] = useState(convert.hex.rgb(hexCode));

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current! as any).contains(e.target)) {
        if (colorTunerMenuIsOpened) toggleColorTunerMenu();
      }
    },
    [ref, toggleColorTunerMenu, colorTunerMenuIsOpened]
  );

  useEffect(() => {
    document.addEventListener("click", clickListener);
    setTunedHexCode("#" + convert.rgb.hex(rgbValue));

    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, [rgbValue, setTunedHexCode, clickListener]);

  return (
    <Wrapper ref={ref}>
      <Triangle />
      <ColorRangeInput
        setRgbValue={setRgbValue}
        color={"red"}
        label={"R"}
        index={0}
        initialValue={rgbValue[0]}
      />
      <ColorRangeInput
        setRgbValue={setRgbValue}
        color={"limegreen"}
        label={"G"}
        index={1}
        initialValue={rgbValue[1]}
      />
      <ColorRangeInput
        setRgbValue={setRgbValue}
        color={"dodgerblue"}
        label={"B"}
        index={2}
        initialValue={rgbValue[2]}
      />
      <Buttons>
        <button
          onClick={() => {
            toggleColorTunerMenu();
          }}
          className={"cancel"}
        >
          cancel
        </button>
        <button
          onClick={() => {
            setHexCode("#" + convert.rgb.hex(rgbValue));
            toggleColorTunerMenu();
          }}
          className={"accept"}
        >
          ok
        </button>
      </Buttons>
    </Wrapper>
  );
};
