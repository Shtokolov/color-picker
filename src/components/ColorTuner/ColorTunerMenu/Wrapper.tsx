import styled from "styled-components";

export default styled.div<any>`
  background-color: #32353c;
  min-height: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  position: absolute;
  padding: 5px 10px 10px;
  transform: translate3d(45px, 60px, 0);
  top: 0;
  right: 0;
  line-height: 1rem;
  will-change: transform;
  border-radius: 3px;
  .triangle {
    width: 15px;
    height: 15px;
    max-height: 15px;
    fill: #32353c;
    position: absolute;
    transform: translate3d(-45px, -9px, 0) rotate(180deg);
    top: 0;
    right: 15px;
  }
`;
