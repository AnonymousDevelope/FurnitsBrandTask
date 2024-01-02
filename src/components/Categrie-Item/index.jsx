import React from 'react'
import { NavLink } from 'react-router-dom'
const index = ({img,type}) => {
  return (
    <NavLink to={`/category/${type}`}>
        <div  className="category-item" style={{background: `url(${img}) lightgray 50% / cover no-repeat`}}>
            <span className="type">
            {type}
        </span>
        </div>
    </NavLink>
  )
}

export default index