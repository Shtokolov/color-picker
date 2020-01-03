import styled from "styled-components";

export default styled.div`
  padding-top: 5px;
  button {
    border: 0;
    cursor: pointer;
    color: inherit;
    margin: 0;
    display: inline-flex;
    outline: 0;
    position: relative;
    align-items: center;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    padding: 0 7px;
    font-size: 0.78rem;
    min-width: 45px;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 3px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    :first-child {
      margin-right: 5px;
    }
  }

  .accept {
    background: rgba(0,200,0,0.43);
  }

  .cancel {
    background: rgba(150, 150, 150, 0.3);
  }
`;
