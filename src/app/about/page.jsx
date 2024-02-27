"use client"

import React, { useState } from 'react'

const page = () => {
    const [name,setName] = useState(2)

    console.log(name)
  return (
    <div  className='hi'>
        <button onClick={()=>setName("hi")}> {name}</button>
    </div>
  )
}

export default page