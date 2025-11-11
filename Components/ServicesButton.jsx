import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { FcServices } from 'react-icons/fc'
import { MdCategory } from 'react-icons/md'

function ServicesButton({color}) {
  return (
    <>
        <Link  href={'/services'}>
        {/* <CtaButton color={color} vr={vr}  content={'Contactez-nous'} endIcon={<BsArrowFromLeft />} /> */}
            <Button color={ color ? color :   'info'} variant='outlined' endIcon={ <BiCategory />} >
            Voir nos formations
            </Button>
        </Link>
    </>
  )
}

export default ServicesButton