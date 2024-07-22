import React from 'react'
import Button from './Button'

function ButtonList() {
        const buttonlist=["All","Gaming","Live","Songs","Popular","Cricket","fashion","Comedy","Tollywood","Python","Vlogs"]
  return (
    <div className='flex '>
        {buttonlist .map((button)=><Button key={button} name={button}/>)}
    </div>
  )
}

export default ButtonList