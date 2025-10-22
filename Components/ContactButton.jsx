import React from 'react'
import CtaButton from "./CtaButton"
import Link from 'next/link'
import { Button } from '@mui/material'
import { BsArrowRight } from 'react-icons/bs'

function ContactButton({ vr}) {
  return (
    <>
    <Link href={'/contact'}>
     {/* <CtaButton color={color} vr={vr}  content={'Contactez-nous'} endIcon={<BsArrowFromLeft />} /> */}
     <Button color='primary' variant={vr ? vr  : "contained"} endIcon={<BsArrowRight />}  >
     Contactez-nous
     </Button>
    </Link>
    </>
  )
}

export default ContactButton