import styled from 'styled-components'
import { colors } from '../../style'
import fundo from '../../assets/images/fundo.png'

export const HeaderContainer = styled.header`
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${colors.salmon};
  position: relative;
  img {
    margin-bottom: 138px;
  }
  h1 {
    font-size: 36px;
    line-height: 46px;
    width: 540px;
    text-align: center;
  }
`
