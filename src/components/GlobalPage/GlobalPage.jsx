import React from 'react'
import { GlobalBox, PageHeader, VariantH6 } from '../../Styled/Pages'

const GlobalPage = ({name, subtitle}) => {
  return (
    <GlobalBox>
      <PageHeader>{name}</PageHeader>
      <VariantH6>{subtitle}</VariantH6>
    </GlobalBox>
  )
}

export default GlobalPage
