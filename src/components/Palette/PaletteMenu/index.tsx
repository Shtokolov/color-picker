import React, { useCallback, useEffect, useRef } from "react";
import Triangle from "../../shared/Triangle";
import Wrapper from "./Wrapper";
import ColorList from "./ColorList";

interface IPaletteMenu {
  setHexCode: Function;
  togglePaletteMenu: Function;
  paletteMenuIsOpened: boolean;
  colors: Array<object>;
}

export default ({
  setHexCode,
  togglePaletteMenu,
  paletteMenuIsOpened,
  colors
}: IPaletteMenu) => {
  const ref = useRef(null);
  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current! as any).contains(e.target)) {
        if (paletteMenuIsOpened) togglePaletteMenu();
      }
    },
    [ref, paletteMenuIsOpened, togglePaletteMenu]
  );

  useEffect(() => {
    document.addEventListener("click", clickListener);
    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, [clickListener]);

  return (
    <Wrapper ref={ref}>
      <div style={{ position: "relative" }}>
        <Triangle />
        <ColorList
          colors={colors}
          setHexCode={setHexCode}
          togglePaletteMenu={togglePaletteMenu}
        />
      </div>
    </Wrapper>
  );
};
