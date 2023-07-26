import React from 'react'

const FullDate = () => {
    const date = new Date().toUTCString();
  return (
    <div className='text-slate-400 text-xs'>
      {date}
    </div>
  )
}

export default FullDate
