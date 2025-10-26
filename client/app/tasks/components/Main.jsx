"use client"
import React, { useState } from 'react'
import Header from './Header'
import Filter from './Filter'
import Tasks from './Tasks'

const Main = () => {
  const [view, setview] = useState("list")
  return (
    <div className='md:p-20 w-full'>
      <Header view={view} setview={setview}/>
      <Filter />
      <Tasks view={view}/>
    </div>
  )
}

export default Main