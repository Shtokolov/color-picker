import styled from "styled-components";

export default styled.button`
  display: block;
  padding: 15px;
  background-color: transparent;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  line-height: 0;
  cursor: pointer;
  & > svg {
    line-height: 0;
    width: 15px;
    height: 15px;
    max-height: 15px;
    fill: rgba(255, 255, 255, 0.5);
  }
`;
