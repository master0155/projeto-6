import styled from "styled-components";
import { colors } from "../../style";

export const Container = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
`
export const Label = styled.label`
  color: ${colors.begie};

`
export const InputContainer = styled.input`
  width: 100%;
  margin-bottom: 8px;
  margin-top: 6px;
  color: #000;
  background-color: ${colors.begie};
  border-radius: 8px;
  padding: 8px;
  border: transparent;
  font-weight: bold;
  outline: none;
`

export const ErrorText = styled.small`
  display: block;
  color: ${colors.begie};
  margin-top: -4px;
  margin-bottom: 8px;
  font-size: 12px;
`
