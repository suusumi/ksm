import Button from '@mui/material/Button'
import React from 'react'

interface PrimaryButtonProps {
    buttonText: string;
}
const PrimaryButton: React.FC<PrimaryButtonProps> = ({buttonText}) => {
  return (
    <Button color="primary" sx={{color: 'white', backgroundColor:'#288e81', borderRadius:'30px', fontSize: '14px', textTransform: 'none', padding: '8px 36px', display: { xs: 'flex', sm: 'none', lg: 'flex' }, whiteSpace: 'nowrap'}}>
    {buttonText}
    </Button>
  )
}

export default PrimaryButton