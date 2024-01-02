import React from 'react'
import { plus } from '../../../assets/svgs'
const index = ({textAddToPlus,className,...props}) => {
  return (
    <button className={'add-btn' + ' ' + className} {...props}>
      {props.children || 
        <img src={plus}/> 
      }
      {
        textAddToPlus && <span>{textAddToPlus}</span>
      }
    </button>
  )
}

export default index