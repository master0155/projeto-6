import styled from 'styled-components'
import { colors } from '../../style'

export const Container = styled.div`
  width: 100%;
  max-width: 472px;
  background-color: #fff;
  color: ${colors.salmon};
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
    border-radius: 0 0 8px 8px;
    border: 1px solid ${colors.salmon};
    border-top: none;
    padding: 8px;

    a {
      align-self: flex-start;
      margin-top: auto;
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
    width: 100%;
    border-radius: 8px 8px 0 0;
    height: 218px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 100%;
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
  flex: 1;
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
