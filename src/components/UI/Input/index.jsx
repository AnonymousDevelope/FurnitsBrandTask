import React from 'react'

const index = ({ value, ...props }) => {
  return (
      <>
        <input type="text" value={value} {...props} />
      </>
  )
}

export default index