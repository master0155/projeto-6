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
    max-width: 100%;
    height: auto;
  }

  h1 {
    font-size: 36px;
    line-height: 46px;
    width: min(540px, 100%);
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 32px 0;

    img {
      margin-bottom: 56px;
      width: min(140px, 42vw);
    }

    h1 {
      font-size: 26px;
      line-height: 34px;
      width: 100%;
      padding: 0 16px;
    }
  }
`
