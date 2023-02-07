import React from 'react'
import { Button } from '@mui/material'

const FormButton = (props) => {
  return (
    <div>
    <Button type={props.type} variant="contained" color="success">
  {props.name}
</Button>
      
    </div>
  )
}

export default FormButton
