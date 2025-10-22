import React from 'react'
import AboutSectionOne from "@/Components/AboutSectionOne"
import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import QuoteSection from '@/Components/QuoteSection'
import ClinicHighlights from '@/Components/ClinicHighlights'

function page() {
  return (
    <>

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
          À propos de nous 
        </Typography>

        <Typography
          
          sx={{
            maxWidth: 700,
            mx: "auto",
            color:grey[400],
            lineHeight: 1.6,
          }}
        >
          Découvrez des soins personnalisés en médecine esthétique,
          anti-âge et bien-être, conçus pour révéler votre beauté naturelle
          et sublimer votre peau.
        </Typography>
      </Box>
    </Box>
    <AboutSectionOne />
    <ClinicHighlights />
    <QuoteSection />
    </>
  )
}

export default page