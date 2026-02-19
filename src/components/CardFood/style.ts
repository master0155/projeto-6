import styled from 'styled-components'
import { colors } from '../../style'

export const Container = styled.div`
  width: 320px;
  padding: 8px;
  background-color: ${colors.salmon};
  border-radius: 8px;
  display: grid;
  gap: 8px;
  img {
    width: 100%;
    max-height: 167px;
    border-radius: 8px 8px 0 0;
  }
`
export const Title = styled.h3`
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  margin-top: 8px;
  color: ${colors.begie};
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.begie};
`
export const Button = styled.button`
  padding: 4px 6px;
  font-size: 14px;
  background-color: ${colors.begie};
  color: ${colors.salmon};
  border: 2px solid ${colors.begie};
  font-weight: 700;
  transition: 200ms ease;
  border-radius: 8px;
  :hover {
    cursor: pointer;
    color: ${colors.begie};
    background-color: transparent;
  }
`
