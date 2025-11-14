import ContactCards from '@/Components/ContactCards'
import ContactForm from '@/Components/ContactForm'
import QuoteSection from '@/Components/QuoteSection'
import { Box, Typography } from '@mui/material'
import { grey, purple } from '@mui/material/colors'
import React from 'react'

function page() {
  return (
    <>
      <Box
        sx={{
          display: { md : "flex"  , xs : "none"},
          flexDirection: "column",
          // alignItems: "center",
          // justifyContent: "center",
          textAlign: "center",
          backgroundColor : "primary.dark" ,
          color: "info.main",
        }}
      >
        <Box
          sx={{
            // backdropFilter: "brightness(0.5)",
            py: { xs: 6, md: 8 },
            px: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
          Contactez-nous
          </Typography>

          <Typography
            variant="subtitle2"
            
            sx={{
              maxWidth: 700,
              mx: "auto",
              color:grey[400],
              lineHeight: 1.6,
            }}
          >
  Découvrez ce qui fait notre différence : expertise, innovation et une attention sincère portée à votre bien-être et à votre beauté naturelle.
          </Typography>
        </Box>
      </Box>
      {/* <ContactCards /> */}
      <ContactForm />

   

      <Box
        sx={{
          // p  : {md : 10 , xs :0} ,
          width: {md :   "100%" , xs : '100%'},
          height: { xs: 300, md: 500 },
          overflow: "hidden",
          // borderRadius: 3,
          // boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
        }}
      >
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.816918609665!2d-7.6339391999999995!3d33.5841025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3d922083525%3A0xb0431891256344c!2sPro%20digital%20agency!5e0!3m2!1sfr!2sma!4v1763127619496!5m2!1sfr!2sma" width="100%" height={ '100%'} loading="lazy" ></iframe>
     
    </Box>
    {/* <QuoteSection /> */}


    </>
  )
}

export default page