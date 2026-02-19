import styled from "styled-components";
import { colors } from "../../style";

export const Container = styled.form`
  font-size: 14px;
`
export const Title = styled.h2`
  color: ${colors.begie};
  font-size: 16px;
  margin-bottom: 16px;
`
export const CepNumber = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px;
`
export const NumberAndCvv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 34px;
`

export const Last = styled.div`
  margin-top: 24px;
`
