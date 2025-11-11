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
    
    bgcolor={"#fff"} 
    sx={{
      px: { xs: 2, md: 8 },
      py: { xs: 6, md: 12 }
    }}>

          <Typography
                    variant={"h3"}
                    sx={{
                      fontWeight: "bold",
                      mb: 4,
                      fontSize: { xs: "2rem", md: "3rem" },
                      color: theme.palette.secondary.main,
                      textAlign :'center' , 
                      px :1 ,
                    }}
        >
          Qui sommes-nous ?
        </Typography>
        {/* <Typography></Typography> */}
       <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "100vh",
        // width: "100%",
       
        overflowX : 'hidden'
      }}
    >
        

      {/* --- Texte --- */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "left", md: "left" },
        //   color: theme.palette.secondary.main,
          // px :1 ,
          maxWidth: { md: "600px" , xs : "100%" }
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { md: "3rem" },
            color: theme.palette.primary.dark,
            
          }}
        >
          Pro Digital Agency
        </Typography>

        <Typography
          variant="h6"
          sx={{
            // px :1 ,
            color: theme.palette.secondary.main,

            mb: 3,
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
         Cabinet de formation et accompagnement en marketing digital
        </Typography>

        <Typography
            sx={{
              color: grey[600],
              mb: 4,
              
            }}
          >
              Découvrez une nouvelle façon d’apprendre et de faire évoluer votre présence en ligne.  
              &nbsp;
              <strong style={{ color: theme.palette.primary.main }}>Pro Digital Agency</strong> 
              est un cabinet de formation et d’accompagnement en marketing digital qui aide 
              les entreprises, entrepreneurs et professionnels à développer leurs compétences 
              et à maîtriser les leviers du digital : 
              <em>SEO, publicité en ligne, réseaux sociaux, stratégie de contenu et analyse de performance</em>, ainsi que 
              <b> <em>le marketing, les techniques de vente et l’e-commerce</em> </b>.<br />
              Notre approche allie pédagogie, expertise et accompagnement personnalisé pour 
              vous permettre d’atteindre vos objectifs de visibilité, de croissance et de réussite numérique.
    </Typography>

        {/* <StatsSection /> */}

        <Stack
        
          direction={ "row" }
          // mx={{ xs: 5  }}
          width={'100%'}
          sx={{scale  : {xs : 0.8 , md : 1} }}

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
          component="img"src={"https://images.pexels.com/photos/8068875/pexels-photo-8068875.jpeg"}
          // src="https://scontent.cdninstagram.com/v/t51.82787-15/553358347_17963346134988553_858032646162623737_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzcyODkwNjU4NTUzNzEwNzA4Ng%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNDd4MTY3OS5zZHIuQzMifQ%3D%3D&_nc_ohc=Ih7UgJUozEcQ7kNvwEXl1hp&_nc_oc=AdlV7w1HQhNpHE_6l7MHJU4QVy3AQom7tuTPfRSKqRGVqlmovM8L9gB4YeARvVwL2RY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=v70gbU64LEu66GHnNFE0Fg&oh=00_Aff-ll7dY1FgayHOIpt4ou69m7LTFYLj0krfcTyKAoMmLA&oe=68F2BEAA"
          alt="Cabinet de formation et accompagnement en marketing digital"
          sx={{
            width: { xs: "100%", md: "85%" },
            maxHeight: "80vh",
            objectFit: "cover",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            aspectRatio :"4/5"
          }}
        />

        {/* <Image src={"https://scontent.cdninstagram.com/v/t51.82787-15/553358347_17963346134988553_858032646162623737_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzcyODkwNjU4NTUzNzEwNzA4Ng%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNDd4MTY3OS5zZHIuQzMifQ%3D%3D&_nc_ohc=Ih7UgJUozEcQ7kNvwEXl1hp&_nc_oc=AdlV7w1HQhNpHE_6l7MHJU4QVy3AQom7tuTPfRSKqRGVqlmovM8L9gB4YeARvVwL2RY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=v70gbU64LEu66GHnNFE0Fg&oh=00_Aff-ll7dY1FgayHOIpt4ou69m7LTFYLj0krfcTyKAoMmLA&oe=68F2BEAA"}  width={"100%"} height = "100%"  />    */}


      </Box>
    </Box>
    </Box>
  );
}
