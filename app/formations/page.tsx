import CTASection from '@/Components/CTASection'
import ServicesGrid from '@/Components/ServicesCards'
import { Box, Button, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import Link from 'next/link'
import React from 'react'

function page() {
  
  return (
    <>
    {/* head */}
      <Box
      sx={{
        display: "flex",
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
          Apprenez. Progressez. Réussissez dans le digital.
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
            Formations en <strong>marketing</strong>, <strong>techniques de vente </strong> 
           et <strong>e-commerce</strong> pour renforcer vos compétences et développer 
          votre présence en ligne.
        </Typography>
      </Box>
    </Box>
    {/* content */}
    <ServicesGrid />

    {/* more */}
   
    {/* <CTASection /> */}

    




    </>
  )
}

export default page