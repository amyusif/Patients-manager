import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { RiNotification4Line } from 'react-icons/ri'
import './IconList.scss'
import { VscSettingsGear } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const IconList = () => {
  return (
    <div className='icon-list'>
      <Link to='/notifications'><RiNotification4Line /></Link>
      <Link to='/settings'><VscSettingsGear /></Link>
      <Link to='/profile'><BiUserCircle /></Link>
    </div>
  )
}

export default IconList
