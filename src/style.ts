import { createGlobalStyle } from 'styled-components'

export const colors = {
  begie: '#FFEBD9',
  salmon: '#E66767',
  white: '#FFF8F2',
  yellow: '#FFB930'
}

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Roboto", sans-serif;
        text-decoration: none;
    }
    body{
        background: ${colors.white};
    }
    .container{
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        padding: 80px 0 120px 0;
    }
`
