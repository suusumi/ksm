import Button from '@mui/material/Button';
import React from 'react'

interface WelcomePhraseButtonProps {
    slogan: string;
}

const WelcomePhraseButton: React.FC<WelcomePhraseButtonProps> = (props) => {
  return (
        <Button color="primary" sx={{color: '#288e81', backgroundColor:'#white', border: '2px solid #288e81', borderRadius:'30px', fontSize: '15px', textTransform: 'none', padding: '8px 20px', display: { xs: 'flex', sm: 'none', lg: 'flex' }, whiteSpace: 'nowrap'}}>

        {props.slogan}</Button>
  )
}

export default WelcomePhraseButton