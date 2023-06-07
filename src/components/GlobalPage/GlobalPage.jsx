import { Box, Typography } from '@mui/material'
import React from 'react'

const GlobalPage = ({name, subtitle}) => {
  return (
    <Box display='flex' flexDirection='column'>
      <Typography variant="h3">{name}</Typography>
      <Typography variant='h6'>{subtitle}</Typography>
    </Box>
  )
}

export default GlobalPage
