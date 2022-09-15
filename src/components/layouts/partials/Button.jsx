import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({buttonName, className}) => {
  return (
      <>
          <Link to='' className={`btn-purple ${className} text-white`}>{ buttonName }</Link>
      </>
  )
}

export default Button