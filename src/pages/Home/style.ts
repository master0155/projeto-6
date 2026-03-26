import styled from 'styled-components'
import { colors } from '../../style'

export const Section = styled.section`
  padding-top: 48px;

  @media (max-width: 768px) {
    padding-top: 32px;
  }
`

export const SectionTitle = styled.h2`
  color: ${colors.salmon};
  margin-bottom: 24px;
  font-size: 28px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 16px;
  }
`

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 48px 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`
