import styled from 'styled-components'
import { HeaderContainer } from '../../components/Header/style'
import { colors } from '../../style'

export const Container = styled.div`
  ${HeaderContainer} {
    padding: 60px 0;
    font-size: 18px;
    font-weight: 900;
    padding-bottom: 0;
    .links {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .container {
        padding: 0;
        align-items: center;
        img {
          margin: 0 auto;
          text-align: center;
        }
      }
      a {
        color: ${colors.salmon};
        text-align: left;
      }
    }
    :nth-child(2) {
      width: 100%;
      color: ${colors.white};
    }
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 32px;
  }
`
export const Button = styled.button`
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  text-align: end;
  color: ${colors.salmon};
  font-weight: bold;
`
export const Description = styled.div<{ $backgroundImage?: string }>`
  width: 100vw;
  height: 280px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.$backgroundImage ?? ''});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: 60px;
  color: ${colors.begie};
  .container{
    padding: 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

 }
  span{
    font-size: 32px;
    font-weight: 100;
  }
`
