import styled from 'styled-components'
import { colors } from '../../style'

export const Container = styled.footer`
  background-color: ${colors.begie};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 32px;
  }
`
export const Sotials = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 80px;
`
export const Link = styled.a`
  text-decoration: none;
`
export const Description = styled.p`
  width: 480px;
  color: ${colors.salmon};
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`
