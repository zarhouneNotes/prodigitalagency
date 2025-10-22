"use client";
import { Box, Typography, Button, Stack } from "@mui/material";
import CtaButton from "./CtaButton";
import { grey } from "@mui/material/colors";
import CtaButtons from "@/Components/CtaButtons"

export default function HeroSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
        width: "100%",
        backgroundImage:
          "url('https://images.pexels.com/photos/6663371/pexels-photo-6663371.jpeg?_gl=1*bq42dj*_ga*MTA3MzQ4NzM0OC4xNzUwODg0Njc2*_ga_8JE65Q40S6*czE3NjAzNTMxMTkkbzEyJGcxJHQxNzYwMzU0MDE5JGoxMSRsMCRoMA..')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        px: 2,
      }}
    >
         <Typography
        variant="h2"
        sx={{
          fontWeight: "400",
          mb: 2,
          fontSize: { xs: "2.5rem", md: "4.5rem" },
        //   textShadow: "0px 2px 10px rgba(0,0,0,0.4)",
        }}
      >
        Redéfinissez votre <br />
         beauté naturelle
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mb: 4,
          color: grey[300],
          fontSize: { xs: "1rem", md: "1.25rem" },
          maxWidth: "900px",
        }}
      >
        Médecine esthétique et anti-âge — pour un visage éclatant, une peau
        régénérée et une confiance retrouvée. Découvrez nos soins personnalisés
        pour révéler le meilleur de vous-même.
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
      >
        {/* <CtaButton vr={"contained"} content="Rendez-vous" color={'primary'} />
        <CtaButton vr={"outlined"} content="Voir nos services" color='info' />
          */}
          <CtaButtons />

      
      </Stack>
    </Box>
  );
}
