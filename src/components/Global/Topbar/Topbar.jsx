import React from 'react'
import './Topbar.scss';
import SearchInput from '../../Input/SearchInput';
import FullDate from '../../CurrentDate/FullDate';
import IconList from '../../Utilities/IconList';

const Topbar = () => {
  return (
    <div className='top-bar'>
        <SearchInput />
        <FullDate />
        <IconList />
    </div>
  )
}

export default Topbar
