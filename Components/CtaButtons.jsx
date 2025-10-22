import React from 'react'
import CtaButton from '../Components/CtaButton'
import ContactButton from '@/Components/ContactButton'
import ServicesButton from '@/Components/ServicesButton'  

function CtaButtons() {
  return (
    <>
    <ContactButton />
    <ServicesButton />
    {/* <CtaButton to={'/services'} vr={"outlined"} content="Voir nos services" color='info' /> */}
    </>
     
  )
}

export default CtaButtons