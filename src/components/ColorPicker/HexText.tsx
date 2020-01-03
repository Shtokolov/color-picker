import React from "react";
import styled from "styled-components";

export const StyledHexText: React.FC = styled.div`
  font-size: 1rem;
  flex-grow: 2;
  padding-left: 15px;
`;

const HexText: React.FC<{ hexCode: string }> = ({ hexCode }) => {
  return <StyledHexText>{hexCode.toUpperCase()}</StyledHexText>;
};

export default HexText;
