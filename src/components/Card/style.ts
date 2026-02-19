import styled from 'styled-components'
import { colors } from '../../style'

export const Container = styled.div`
  width: 472px;
  background-color: #fff;
  color: ${colors.salmon};
  display: flex;
  flex-direction: column;
  position: relative;
  div {
    border-radius: 0 0 8px 8px;
    border: 1px solid ${colors.salmon};
    border-top: none;
    padding: 8px;
    height: 100%;
    a {
      padding: 4px 6px;
      font-size: 14px;
      background-color: ${colors.salmon};
      color: ${colors.begie};
      border: 2px solid ${colors.salmon};
      font-weight: 700;
      transition: 200ms ease;
      border-radius: 8px;
      line-height: 18px;
      :hover {
        cursor: pointer;
        color: ${colors.salmon};
        background-color: transparent;
      }
    }
  }

  img {
    border-radius: 8px 8px 0 0;
    height: 218px;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  span {
    svg {
      color: ${colors.yellow};
    }
  }
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`
export const Tag = styled.span`
  background-color: ${colors.salmon};
  color: ${colors.begie};
  position: absolute;
  top: 16px;
  right: 16px;
  border-radius: 8px;
  padding: 8px 12px;
`
