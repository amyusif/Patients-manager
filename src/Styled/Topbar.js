import styled from "styled-components";
import { Box } from "./GlobalStyles";


export const TopBox = styled(Box)`
justify-content: space-between;
height: 100%;
align-items: center;
height: 5%;
background-color: #ffff;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
padding: 5px;
`

export const Search = styled.input`
width: 250px;
height: 35px;
font-family:  Lexend,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;;
background: transparent;
font-size: 12px;
border-radius: 0.5rem;
padding: 5px;
border: 2px solid transparent;
color: rgb(44, 41, 41);

&:focus{
  outline: none;
}
`

export const SearchBar = styled(Box)`
background-color: #05060f0a;
align-items: center;
padding: 0 10px 0 3px;
border-radius: 8px;
margin-left: 20px;
width: 250px;
`

export const IconsContainer = styled(Box)`
margin-right: 30px;
gap: 30px;
font-size: 25px;
color: #474E68;
align-items: center;
`