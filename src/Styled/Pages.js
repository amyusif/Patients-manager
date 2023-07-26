import styled from "styled-components";
import { Box } from "./GlobalStyles";


export const GlobalBox = styled(Box)`
flex-direction: column;
height: 10%;
padding: 10px;
`

export const PageHeader = styled.h5`
font-size: 20px !important;
padding: 5px;
font-family: 'Archivo Narrow', sans-serif;
color: #6b6969;
`
export const VariantH6 = styled.h6`
    padding-left: 10px;
    font-family: 'Lato', sans-serif;
    font-style: italic;
    font-family: "Roboto", sans-serif;
    color: rgb(133, 130, 130);
`


export const CardBox = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 7px;
`

export const MinBox = styled.div`
height: 40%;
padding: 10px;
display: flex;
flex-direction: column;
`