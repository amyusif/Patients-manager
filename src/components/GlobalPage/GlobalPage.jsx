import React from 'react'
import './Global.scss'
import { Box } from '@mui/material'

const GlobalPage = ({name, subtitle}) => {
  return (
    <Box display='flex' flexDirection='column' p='10px'>
      <h5 className='global-header'>{name}</h5>
      <h6>{subtitle}</h6>
    </Box>
  )
}

export default GlobalPage
