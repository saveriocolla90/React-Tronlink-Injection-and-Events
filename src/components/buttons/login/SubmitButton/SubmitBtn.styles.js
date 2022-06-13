import styled from "styled-components";

export const SubmitBtn = styled.button`
  width: 100%;
  margin-top: 50px;
  min-width: 280px;
  color: ghostwhite;
  padding: 12px;
  font-size: 14px;
  font-weight: bold;
  border: solid 2px black;
  border-radius: 5px;
  background-color: darkcyan;
  cursor: pointer;

  :hover {
    width: 100%;
    margin-top: 50px;
    min-width: 280px;
    color: ghostwhite;
    padding: 12px;
    font-size: 14px;

    border: solid 2px black;
    border-radius: 5px;
    background-color: rgb(247, 90, 155);
    cursor: pointer;
  }
  @keyframes animateBtn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
