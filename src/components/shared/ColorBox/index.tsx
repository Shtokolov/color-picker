import styled from "styled-components";
import React from "react";

const Color = styled.div.attrs<{ hexCode: string }>(props => ({
  style: {
    backgroundColor: props.hexCode
  }
}))<{ hexCode: string }>`
  height: 15px;
  width: 15px;
  cursor: pointer;
`;

const Box = styled.div`
  padding: 15px;
`;

interface IColorBox {
  onClick: any;
  hexCode: string;
}

export default (props: IColorBox) => (
  <Box onClick={props.onClick}>
    <Color hexCode={props.hexCode} />
  </Box>
);
