import styled from "styled-components";
import { colors } from "../../style";

export const Container = styled.button`
   width: 100%;
  background-color: ${colors.begie};
  padding: 6px 0;
  margin-top: 16px;
  border: 2px solid ${colors.begie};
  border-radius: 8px;
  color: ${colors.salmon};
  font-weight: 700;
  cursor: pointer;
  transition: 200ms ease-in-out;
  :hover{
    background-color: transparent;
    color: ${colors.begie};
  }
`
