import Triangle from "../shared/Triangle";
import React from "react";
import PaletteMenu from "../../containers/paletteMenu";
import PaletteButton from "./PaletteButton";

interface IPalette {
  togglePaletteMenu: Function;
  paletteMenuIsOpened: boolean;
  colors: Array<object>;
}

export default ({
  togglePaletteMenu,
  paletteMenuIsOpened,
  colors
}: IPalette) => {
  return (
    <div>
      <PaletteButton onClick={(): void => togglePaletteMenu()}>
        <Triangle />
      </PaletteButton>
      {paletteMenuIsOpened && <PaletteMenu colors={colors} />}
    </div>
  );
};
