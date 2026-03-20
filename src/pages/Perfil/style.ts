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
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        gap: 12px;

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
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 32px 16px;
  }

  @media (max-width: 900px) {
    .container {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 24px 12px;
    }

    ${HeaderContainer} {
      .links {
        .container {
          grid-template-columns: 1fr;
          justify-items: center;
          gap: 8px;
        }

        a,
        button {
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .container {
      grid-template-columns: 1fr;
      gap: 16px;
    }
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
