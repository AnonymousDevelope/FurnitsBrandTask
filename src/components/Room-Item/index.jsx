import React from 'react'
import { NavLink } from 'react-router-dom'

const index = ({ img, room }) => {
  return (
    <NavLink style={{width:"fit-content"}} to={`/room/${room}`}>
      <div className="room" style={{ background: `url(${img}) no-repeat` }}>
        <h3>
          {room}
        </h3>
      </div>
    </NavLink>
  )
}

export default index