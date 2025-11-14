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

    <Box component="section" sx={{             p : { md  : 10 , xs : 0} ,  pb : 8  , bgcolor : grey[200]}}>
      {/* === SECTION 1 : APPRENDRE ET ÉVOLUER === */}
   

      {/* === SECTION 2 : NOTRE APPROCHE === */}
      <Stack
          sx={{
            display: "flex",
            // gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },:
            gap: 6,
            alignItems: "center",
            // mb: 10,
            justifyContent :"center" , 
            bgcolor : '#fff' , 
            p : { md  : 10 , xs : 1} , 
            width :{md :  "90vw" , xs : "100vw"} , 
            flexDirection :{ md :   "row" , xs : "column" }, 
            mx :'auto',
            pb : 0
          }}
      >
     

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
<b>           Notre approche combine pédagogie, expertise et accompagnement personnalisé pour vous aider à atteindre vos objectifs de visibilité et de croissance.
</b>            Chaque formation est pensée pour être pratique, humaine et orientée résultats, avec des exercices concrets et un suivi adapté à votre niveau.
            Nous vous donnons les outils essentiels pour maîtriser les leviers du digital et progresser avec confiance, que vous soyez étudiant, entrepreneur ou entreprise.
          </Typography>
        </Box>

           {/* Image */}
           <Box
          sx={{
            flex: 1,
            // borderRadius: "20px",
            overflow: "hidden",
            width: "100%",
            maxWidth: 550,
          }}
        >
          <img
            src="/images/salle.png"
            alt="Approche pédagogique et accompagnement"
            
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Stack>
    </Box>


    <QuoteSection />
    </>
  )
}

export default page