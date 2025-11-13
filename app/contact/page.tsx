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

      <Box   sx={{ background : purple[100] ,  width: "100%" , display : 'flex' , alignItems : 'center', flexDirection : { md :"row" , xs :'column'}  }}>
      {/* Optional title */}
      <Typography

        variant="h5"
        sx={{
          textAlign: "center",
          fontWeight: 600,
          color: "#D81B60",
          p: 4,
          width: {md :   "50%" , xs : '100%'},
         

        }}
      >
        Passez nous voir au centre Pro Digital Agency, un espace dédié à la formation, à la créativité et à l’innovation digitale.
      </Typography>

      <Box
        sx={{
          // p  : {md : 10 , xs :0} ,
          width: {md :   "50%" , xs : '100%'},
          height: { xs: 300, md: 500 },
          overflow: "hidden",
          // borderRadius: 3,
          // boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.021875746924!2d-8.011478484809852!3d31.63183798135233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdae5adbe95d4567%3A0xa11e6d43344d0c4e!2s35%20Bd%20Abdelkrim%20Khattabi%2C%20Marrakech%2C%20Morocco!5e0!3m2!1sen!2sus!4v1705758981234!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
    {/* <QuoteSection /> */}


    </>
  )
}

export default page