import styled from "styled-components";
import { colors } from "../../style";

export const Container= styled.ul`
  width: 100%;
  color: ${colors.salmon};
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const PlateComponent = styled.li`
  padding: 8px 10px;
  display: flex;
  gap: 8px;
  background-color: ${colors.begie};
  border-radius: 8px;
  position: relative;
  img{
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`
export const Title = styled.h3`
  font-size: 18px;
`
export const Price = styled.span`
  margin-top: 16px;
  font-size: 14px;
  line-height: 22px;
`
export const Trash = styled.button`
  font-size: 18px;
  position: absolute;
  right: 8px;
  bottom: 8px;
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
  margin-top: 40px;
  `
export const ValueToPay = styled.div`
  color: ${colors.begie};
  display: flex;
  justify-content: space-between;
`

