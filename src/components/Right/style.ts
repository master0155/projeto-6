import styled from "styled-components";
import { colors } from "../../style";
export const Container = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.72);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 9;
`
export const Component = styled.div`
  width: 360px;
  max-width: 100vw;
  height: 100vh;
  background-color: ${colors.salmon};
  padding: 16px 8px;
  overflow-y: auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`
