import styled from 'styled-components'
import { colors } from '../../style'

export const BannerContainer = styled.div<{ $backgroundImage?: string }>`
    width: 100%;
    height: 280px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.$backgroundImage ?? ''});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: 60px;
    color: ${colors.begie};

    .container {
    padding: 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

span {
    font-size: 32px;
    font-weight: 100;
}

    h3 {
        font-size: 32px;
        line-height: 38px;
    }

    @media (max-width: 768px) {
        height: 220px;
        margin-top: 32px;

        .container {
            padding: 16px;
        }

        span {
            font-size: 24px;
        }

        h3 {
            font-size: 24px;
            line-height: 30px;
        }
    }
`
