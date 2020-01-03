import styled from "styled-components";
import React, { useState } from "react";
import RangeInput from "./RangeInput";

interface colorRangeInputArgs {
  color: string;
  label: string;
  setRgbValue: Function;
  index: number;
  initialValue: number;
}

const ColorRangeInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px 0;
  span {
    padding-right: 10px;
  }
`;

export default (props: colorRangeInputArgs) => {
  const { color, label, setRgbValue, index, initialValue } = props;
  const [value, setValue] = useState(initialValue);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value);
    setValue(value);
    setRgbValue((prevState: Array<number>) => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
  }

  return (
    <ColorRangeInput>
      <span>{label}</span>
      <RangeInput
        type="range"
        color={color}
        name="red-color-input"
        value={value}
        min="0"
        max="255"
        onChange={handleChange}
      />
    </ColorRangeInput>
  );
};
