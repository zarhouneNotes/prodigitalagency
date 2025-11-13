"use client"
import React from 'react'
import AboutSectionOne from "@/Components/AboutSectionOne"
import { Box, Stack, Typography, useTheme  } from '@mui/material'
import { grey } from '@mui/material/colors'
import QuoteSection from '@/Components/QuoteSection'
import ClinicHighlights from '@/Components/ClinicHighlights'


function page() {
  const theme = useTheme()
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
           À propos de <strong>Pro Digital Agency</strong>
        </Typography>

        <Typography
          
          sx={{
            maxWidth: 700,
            mx: "auto",
            color:grey[400],
            lineHeight: 1.6,
          }}
        >
          Cabinet de formation et d’accompagnement en marketing digital aidant entreprises, entrepreneurs et professionnels à développer leurs compétences et maîtriser les leviers du digital.
        </Typography>
      </Box>
    </Box>
    <AboutSectionOne />
    {/* <ClinicHighlights /> */}

    <Box component="section" sx={{   px: { xs: 1, md: 10 } , pb : 8  , bgcolor : grey[200]}}>
      {/* === SECTION 1 : APPRENDRE ET ÉVOLUER === */}
   

      {/* === SECTION 2 : NOTRE APPROCHE === */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        spacing={6}
        sx={{
          backgroundColor: theme.palette.background.default,
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 4 },
          boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
        }}
      >
        {/* Image */}
        <Box
          sx={{
            flex: 1,
            borderRadius: "20px",
            overflow: "hidden",
            width: "100%",
            maxWidth: 550,
          }}
        >
          <img
            src="/images/salle.png"
            alt="Approche pédagogique et accompagnement"
            width={600}
            height={400}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        {/* Texte */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 2,
            }}
          >
            Notre approche
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              lineHeight: 1.8,
            }}
          >
            Notre approche allie <strong>pédagogie, expertise et accompagnement
            personnalisé</strong> pour vous permettre d’atteindre vos objectifs
            de visibilité, de croissance et de réussite numérique.
            <br />
            Chaque formation est conçue pour être pratique, humaine et orientée
            résultats, afin de vous donner les outils nécessaires pour réussir
            dans le monde digital d’aujourd’hui.
          </Typography>
        </Box>
      </Stack>
    </Box>


    <QuoteSection />
    </>
  )
}

export default page