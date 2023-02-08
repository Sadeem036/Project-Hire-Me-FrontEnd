import React from 'react'

const Language = (props) => {
  return (
    <div>
    <select onChange={props.onChange} name={props.name} id="language" required value={props.value}>
    <option value="" disabled selected>Select Language</option>
    <option value="English">English</option>
    <option value="Urdu">Urdu</option>
    </select>
      
    </div>
  )
}

export default Language
