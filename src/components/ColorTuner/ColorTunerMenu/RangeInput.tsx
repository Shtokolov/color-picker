import styled from "styled-components";

export default styled.input`
  -webkit-appearance: none;
  width: 120px;
  height: 3px;
  background-image: linear-gradient(90deg, ${params => params.color}, gray);
  outline: none;
  margin: 0;
  border-radius: 2px;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border-radius: 50%;
    appearance: none;
    border: 1px solid gray;
    width: 8px;
    height: 8px;
    background: #32353c;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    border-radius: 50%;
    appearance: none;
    border: 1px solid gray;
    width: 8px;
    height: 8px;
    background: #32353c;
    cursor: pointer;
  }
`;
