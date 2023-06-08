import React from 'react'
import './Global.scss'

const GlobalPage = ({name, subtitle}) => {
  return (
    <div className='page-wrapper'>
      <h5 className='global-header'>{name}</h5>
      <h6 className='h6'>{subtitle}</h6>
    </div>
  )
}

export default GlobalPage
