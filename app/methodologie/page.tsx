"use client";
import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import Link from "next/link";
import { grey, purple } from "@mui/material/colors";
import Meth from "@/Components/Meth";

const blogPosts = Array.from({ length: 4 }, (_, i) => ({
  title: `Article Beauté #${i + 1}`,
  image: `https://picsum.photos/600/800?random=${i + 1}`,
}));

export default function page() {
  return (<>


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
           Notre Méthodologie
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
               Une approche structurée, humaine et orientée résultats.  
          Chez <strong>Pro Digital Agency</strong>, nous combinons expertise, accompagnement et innovation
          pour vous aider à atteindre vos objectifs digitaux de façon durable.
        </Typography>
      </Box>
    </Box>



    <Meth />
   
     <Box
     sx={{
       py: 8,
       px: 3,
       textAlign: "center",
       bgcolor: purple[100], // soft pink background
       // borderRadius: 3,
       // mx: 2,
     }}
   >
     <Typography
       variant="h5"
       fontWeight={700}
       color="primary.main"
       mb={2}
     >
       Comprendre notre méthode pas à pas
     </Typography>

     <Typography
       variant="body1"
       color="text.secondary"
       mb={4}
       sx={{ maxWidth: 600, mx: "auto", lineHeight: 1.6 }}
     >

    Une approche claire, structurée et adaptée à vos besoins pour progresser sereinement dans le digital.
     </Typography>

     <Link href="/formations" passHref legacyBehavior>
       <Button
         variant="contained"
         color="primary"
         sx={{ px: 5, py: 1.5, borderRadius: 3, textTransform: "none" }}
       >
         Voir tous les services
       </Button>
     </Link>
   </Box>

   </>

  );
}
