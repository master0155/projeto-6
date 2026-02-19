import styled from "styled-components";
import { colors } from "../../style";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.8);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Card = styled.div`
  border-radius: 8px;
  height: 344px;
  max-width: 1024px;
  width: 100%;
  padding: 32px;
  background-color: ${colors.salmon};
  color: ${colors.begie};
  display: flex;
  gap: 24px;
  position: relative;
  img{
    width: 280px;
    height: 280px;
    object-fit: cover;
    border-radius: 8px;
  }
  >div{
    >div{
      margin-bottom: 16px;
    }
    span, p{
      font-size: 14px;
    }
    p{
      margin: 16px 0;
    };
  }
  animation: fadein 500ms;
  @keyframes fadein{
    from{
      opacity: 0;
      transform: scale(0.8);
    }
    to{
      opacity: 1;
      transform: scale(1);
    }
  }
`
export const ButtonClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: 1px solid transparent;
  color: ${colors.begie};
  font-size: 24px;
  cursor: pointer;
  padding: 4px 6px 0 6px;
  :hover{
    border-color: ${colors.begie};
    border-radius: 8px;
  }
`
