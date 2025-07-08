import Event from '@mui/icons-material/Event';
import React from 'react'

const InputBoxData = () => {
  return (
    <div>
      <h1>Input Box Data</h1>
      <input type="text" onChange={()=>console.log(Event.Target.Value)}   placeholder="Enter your name"/>
    </div>
  )
}

export default InputBoxData;
