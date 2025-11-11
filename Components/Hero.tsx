"use client";
import { Box, Typography, Button, Stack, useTheme, useMediaQuery } from "@mui/material";
import CtaButton from "./CtaButton";
import { grey, purple } from "@mui/material/colors";
import CtaButtons from "@/Components/CtaButtons"

export default function HeroSection() {
  const theme = useTheme()
  const isMobile : boolean = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Box
      sx={{
        // bgcolor : purple[800] , 
        boxShadow :  isMobile ? '92px -300px 800px -2px rgba(0,0,0,1) inset'  :"", 
        position :'relative' , 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "100vh",
        width: "100%",
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2022/10/13/02/34/building-7517934_1280.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        // px: 2,
      }}
    >


      <Box bgcolor={!isMobile ?  "rgb(0,0,0,0.3)  " : ""} p={{md : 12 , xs : 2 }}>
                <Typography variant={ isMobile ? "h4"  : "h3"} sx={{ fontWeight: 600 }}>
        Cabinet de formation  <br /> et d’accompagnement en marketing digital
      </Typography>

      <Typography variant="body1" sx={{ my: 3 }}>
      Nous accompagnons les entreprises et les entrepreneurs  <br />pour maximiser leur impact en ligne grâce à des formations sur mesure et une stratégie digitale complète.

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


      <Box 
      zIndex={40}
      bgcolor={"rgb(0,55,0,0.4)"}
      style={{ 
        position : "absolute" , 
        top  : 0 , 
        height : '100vh' , 
      }}
      />
    </Box>
  );
}
