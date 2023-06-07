import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './SideLinks.scss'

const StyledLink = styled(Link)`
color: #038fde;
font-family:  Lexend,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
font-size: 15px;
padding: 10px;
width: 100%;
display: flex;
align-items: center;
gap: 10px;

&:hover, .active{
  color: #fa8c15;
}
`

const SideLinks = ({name, icon, to}) => {

  return (
    <div>
      <StyledLink to={to}>
      <div className='icons'>{icon}</div>
       <div>{name}</div>
      </StyledLink>
    </div>
  )
}

export default SideLinks
