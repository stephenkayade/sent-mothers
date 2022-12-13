import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({buttonName, className, to}) => {
  return (
      <>
          <Link to={to} className={` ${className} text-white d-inline-block button-sm`}>{ buttonName }</Link>
      </>
  )
}

export default Button