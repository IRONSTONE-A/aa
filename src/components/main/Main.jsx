import React from 'react'
import "./main.css"
import Card from '../cards/Card'
import {data} from "../../helper/data.js"


const Main = () => {

  console.log(data)

  return (
    <div className='main-wrapper'>
      <input type="search" className='main-input'placeholder='Search Player...'/>

    <div className='main-container'>  

      {data.map((datas, i) => {
        return <Card key={i}  
        {...datas}
        />
       
      })}
    </div>

    
      
        
    </div>
  )
}

export default Main