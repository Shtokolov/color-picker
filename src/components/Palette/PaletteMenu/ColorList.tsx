import React from "react";

interface IColor {
  label: string;
  hexCode: string;
}

const ColorNodes = (
  colors: Array<IColor>,
  setHexCode: Function,
  togglePaletteMenu: Function
) =>
  colors.map((color: IColor, i) => (
    <li
      key={i}
      onClick={() => {
        setHexCode(color.hexCode);
        togglePaletteMenu();
      }}
    >
      <span>{color.label}</span>
      <div style={{ backgroundColor: color.hexCode }}> </div>
    </li>
  ));

export default (props: any) => (
  <ul>{ColorNodes(props.colors, props.setHexCode, props.togglePaletteMenu)}</ul>
);
