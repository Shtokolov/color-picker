import styled from "styled-components";

export default styled.div<any>`
  display: flex;
  background-color: #32353c;
  min-height: 20px;
  position: absolute;
  transform: translate3d(0px, 60px, 0px);
  top: 0;
  right: 0;
  line-height: 1rem;
  border-radius: 3px;

  .triangle {
    width: 15px;
    height: 15px;
    max-height: 15px;
    fill: #32353c;
    position: absolute;
    transform: translate3d(0px, -9px, 0px) rotate(180deg);
    top: 0;
    right: 15px;
  }

  ul {
    list-style-type: none;
    li {
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      cursor: pointer;
      font-size: 0.85rem;
      line-height: 1.2rem;
      :last-child {
        border-bottom: none;
      }
      div {
        height: 15px;
        width: 15px;
      }
      span {
        padding-right: 30px;
      }
    }
  }
`;
