import styled from "styled-components";
import { Box } from "./GlobalStyles";
import { Darktheme } from "../components/Utils/Colors";


export const GlobalBox = styled(Box)`
flex-direction: column;
height: 10%;
padding: 10px;
background-color: ${Darktheme.primary}; 
`

export const PageHeader = styled.h5`
font-size: 20px !important;
padding: 5px;
font-family: 'Archivo Narrow', sans-serif;
color: white;
`
export const VariantH6 = styled.h6`
    padding-left: 10px;
    font-family: 'Lato', sans-serif;
    font-style: italic;
    font-family: "Roboto", sans-serif;
    color: white;
`


export const CardBox = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 7px;
background-color: ${Darktheme.accent}; 

`

export const MinBox = styled.div`
height: 40%;
padding: 10px;
display: flex;
flex-direction: column;
`

export const PagesRenderBox = styled.div`
height: 100%;
overflow: auto;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`