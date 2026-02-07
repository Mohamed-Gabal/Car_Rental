import React, { useEffect, useState } from 'react'
import Title from '../../components/Owner/Title'

const Dashboard = () => {

  const [ data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    resentBookings: [],
    monthlyRevenue: 0,
  })

  useEffect(() => {
  }, [])

  return (
    <div className=''>
      {/* IMPORT TITLE COMPONENT */}
      <Title />
    </div>
  )
}

export default Dashboard;
