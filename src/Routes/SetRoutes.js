import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Notification from '../Pages/Notification/Notification'
import VisitorsLog from '../Pages/Visitor Log/VisitorsLog'
import Blacklist from '../Pages/BlackList/Blacklist'
import NewVisitors from '../Pages/New Visitors/NewVisitors'
import Invite from '../Pages/Invite/Invite'
import Room from '../Pages/Room/Room'
import Schedule from '../Pages/Schedule/Schedule'
import QmDashboard from '../Pages/Queue management/Dashboard/QmDashboard'
import Tokens from '../Pages/Queue management/Token/Tokens'
import Reports from '../Pages/Queue management/Reports/Reports'
import Management from '../Pages/Queue management/Management/Management'
import Meeting from '../Pages/Meeting/Meeting'
import Service from '../Pages/Services/Service'
import Users from '../Pages/Users/Users'
import { PagesRenderBox } from '../Styled/Pages'

const SetRoutes = () => {
  return (
    <PagesRenderBox>
      <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/notifications' element={<Notification />} />
    <Route path='/visitorslog' element={<VisitorsLog />} />
    <Route path='/blacklist' element={<Blacklist />} />
    <Route path='/new-visitors' element={<NewVisitors />} />
    <Route path='/invite' element={<Invite />} />
    <Route path='/room' element={<Room />} />
    <Route path='/schedule' element={<Schedule />} />
    <Route path='/qmdashboard' element={<QmDashboard />} />
    <Route path='/tokens' element={<Tokens />} />
    <Route path='/reports' element={<Reports />} />
    <Route path='/management' element={<Management />} />
    <Route path='/hosts' element={<Meeting />} />
    <Route path='/services' element={<Service />} />
    <Route path='/users' element={<Users />} />
    
      </Routes>
    </PagesRenderBox>
  )
}

export default SetRoutes
