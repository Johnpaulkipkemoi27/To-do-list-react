
import React from 'react'
const Input = (props) => {
  return (
    <input 
    placeholder={props.placeholder}
    type={props.type}
    id={props.id}
    className={props.className}
    required={props.required}
    checked={props.checked}
    onChange={props.onChange}
    value={props.value}
    />
  )
}

export default Input
