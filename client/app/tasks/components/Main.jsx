import React from 'react'
import Header from './Header'
import Filter from './Filter'
import Tasks from './Tasks'

const Main = () => {
  return (
    <div className='md:p-20 w-full'>
      <Header />
      <Filter />
      <Tasks />
    </div>
  )
}

export default Main