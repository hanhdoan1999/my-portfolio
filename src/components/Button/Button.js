import React from 'react'
import "./Button.scss"

function Button({title,onClick,type = "primary" }) {
  return (
    <button className={`${'btn'} ${type === "primary" ? "btn-primary" : "btn-secondrary"}`} onClick = {onClick}>{title}</button>
  )
}

export default Button