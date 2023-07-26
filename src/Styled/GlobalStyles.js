import styled from "styled-components";
import { Darktheme } from "../components/Utils/Colors";

export const Box = styled.div`
  display: flex;
  width: ${({w}) => w}%;
  height: 100%;
  gap: ${({g}) => g}px;
  flex-direction: ${({fd}) => fd};
`

export const Typo = styled.h6`
    color: #1B2430;
    font-family: 'Roboto';
`

export const AppContainer = styled.div`
height: 100%;
display: flex;
background-color: ${Darktheme.primary};
gap: 10px;
`
export const Para = styled.p`
  
`
