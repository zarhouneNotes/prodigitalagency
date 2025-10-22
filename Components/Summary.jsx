"use client";
import { Box, Typography, Button, Stack, useTheme } from "@mui/material";
import { grey, pink } from "@mui/material/colors";
import Image from "next/image";
import ContactButton from "./ContactButton";
import ServicesButton from "./ServicesButton";
import StatsSection from "./StatsSection";

export default function Summary() {
    const theme = useTheme()
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#f9f9f9",
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 8 },
      }}
    >
      {/* --- Texte --- */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "left", md: "left" },
        //   color: theme.palette.secondary.main,
          px : 1,
          maxWidth: { md: "600px" }
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "2rem", md: "3rem" },
            color: theme.palette.secondary.main,
          }}
        >
          Dr. Dounia Chehaibou
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: theme.palette.secondary.main,

            mb: 3,
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          Spécialiste en Médecine Esthétique & Anti-âge — Marrakech
        </Typography>

        <Typography
          sx={{
            color: grey[600],
            mb: 4,
            lineHeight: 1.6,
            fontSize: { xs: "0.95rem", md: "1.1rem" },
          }}
        >
          Découvrez une approche moderne de la beauté et du bien-être.  
          &nbsp; <strong style={{color : pink[700]}} >Dr. Dounia Chehaibou</strong> vous accompagne avec des soins sur mesure :  
          <em>médecine esthétique et anti-âge, gynécologie esthétique et lasers médicaux</em>, pour sublimer votre peau et restaurer votre confiance. <br />
          Chaque intervention est conçue pour révéler l’harmonie de votre visage et de votre corps, tout en respectant votre singularité.
Qu’il s’agisse d’injections, de lasers médicaux, de peelings ou de soins régénératifs, la Dr. Chehaibou met à votre service les dernières technologies pour sublimer votre peau, corriger les signes du temps et restaurer votre éclat naturel.
        </Typography>

        <StatsSection />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          <ContactButton />

         <ServicesButton color={"secondary"} />
        </Stack>
      </Box>

      {/* --- Image --- */}
      <Box
        sx={{
          flex: 1,
          mt: { xs: 5, md: 0 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"src={"/images/dr.jpeg"}
          // src="https://scontent.cdninstagram.com/v/t51.82787-15/553358347_17963346134988553_858032646162623737_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzcyODkwNjU4NTUzNzEwNzA4Ng%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNDd4MTY3OS5zZHIuQzMifQ%3D%3D&_nc_ohc=Ih7UgJUozEcQ7kNvwEXl1hp&_nc_oc=AdlV7w1HQhNpHE_6l7MHJU4QVy3AQom7tuTPfRSKqRGVqlmovM8L9gB4YeARvVwL2RY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=v70gbU64LEu66GHnNFE0Fg&oh=00_Aff-ll7dY1FgayHOIpt4ou69m7LTFYLj0krfcTyKAoMmLA&oe=68F2BEAA"
          alt="Médecine esthétique Marrakech"
          sx={{
            // width: { xs: "100%", md: "85%" },
            maxHeight: "90vh",
            objectFit: "cover",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            aspectRatio :"4/5"
          }}
        />

        {/* <Image src={"https://scontent.cdninstagram.com/v/t51.82787-15/553358347_17963346134988553_858032646162623737_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzcyODkwNjU4NTUzNzEwNzA4Ng%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNDd4MTY3OS5zZHIuQzMifQ%3D%3D&_nc_ohc=Ih7UgJUozEcQ7kNvwEXl1hp&_nc_oc=AdlV7w1HQhNpHE_6l7MHJU4QVy3AQom7tuTPfRSKqRGVqlmovM8L9gB4YeARvVwL2RY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=v70gbU64LEu66GHnNFE0Fg&oh=00_Aff-ll7dY1FgayHOIpt4ou69m7LTFYLj0krfcTyKAoMmLA&oe=68F2BEAA"}  width={"100%"} height = "100%"  />    */}


      </Box>
    </Box>
  );
}
