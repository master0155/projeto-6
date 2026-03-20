import styled from "styled-components";
import { colors } from "../../style";

export const Container= styled.ul`
  width: 100%;
  color: ${colors.salmon};
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 100%;
`
export const PlateComponent = styled.li`
  padding: 8px 10px;
  display: flex;
  gap: 8px;
  background-color: ${colors.begie};
  border-radius: 2px;
  position: relative;
  border: 1px solid rgba(230, 103, 103, 0.35);

  img{
    width: 84px;
    height: 84px;
    object-fit: cover;
    border-radius: 2px;
  }
`
export const Title = styled.h3`
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
`
export const Price = styled.span`
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
  display: inline-block;
`
export const Trash = styled.button`
  font-size: 16px;
  position: absolute;
  right: 6px;
  bottom: 6px;
  background-color: transparent;
  border:  transparent;
  color: ${colors.salmon};
  cursor: pointer;
  transform: scale(0.8);
  transition: 100ms all;
  :hover{
    transform: scale(1);
  }
`
export const Comfirm = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-top: auto;
  padding-top: 16px;

  button {
    margin-top: 8px;
    border-radius: 2px;
    padding: 5px 0;
    font-size: 12px;
    line-height: 14px;
  }
  `
export const ValueToPay = styled.div`
  color: ${colors.begie};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  span {
    font-weight: 700;
  }
`

