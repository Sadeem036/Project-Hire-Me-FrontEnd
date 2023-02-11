import React from 'react'
import { Button } from '@mui/material'

const FormButton = (props) => {
  return (
    <div>
    <Button onClick={props.onClick} type={props.type} variant="contained" color="secondary">
  {props.name}
</Button>
      
    </div>
  )
}

export default FormButton
