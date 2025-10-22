import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function CtaButton({vr , content , color  , ...rest} ) {
  // const nav = useNavigate()
  return (
    // <Link href={ } >
    <Button color={color ? color : "primary"} size='large' variant={vr ? vr  :"outlined"} sx={{px : 4 }}  {...rest} >
        {content}
    </Button>
    // </Link>
  )
}

export default CtaButton