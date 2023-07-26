import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box } from "./GlobalStyles";
import { Darktheme } from "../components/Utils/Colors";

export const SideRoute = styled(Link)`
color: ${Darktheme.secondary};
font-family:  Lexend,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
font-size: 15px;
padding: 10px;
width: 100%;
display: flex;
align-items: center;
gap: 10px;
padding-left: 30px;

&:hover, .active{
  color: #fa8c15;
}
`

export const NavBox = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: ${Darktheme.primary};
  height: 100%;
  overflow: auto;
  padding: 10px;
  width: 15%;
`

export const Cover = styled(Box)`
    margin-top: 30px;
    flex-direction: column;
`

export const VariantH5 = styled.h5`
color: #819096;
padding: 10px;
margin-left: 20px;
`