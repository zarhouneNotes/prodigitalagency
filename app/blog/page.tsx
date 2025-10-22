"use client";
import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import Link from "next/link";
import { grey } from "@mui/material/colors";

const blogPosts = Array.from({ length: 20 }, (_, i) => ({
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
          Explorez Nos Articles
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
                 Plongez dans nos publications autour de la médecine esthétique, de la santé, du bien-être et des nouvelles tendances beauté.

        </Typography>
      </Box>
    </Box>
    <Box sx={{ py: 8, px: { xs: 2, md: 12 } }}>
    

      <Masonry columns={{ xs: 1, sm: 2, md: 4 }} sx={{bgcolor: "" }} spacing={3}>
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            sx={{
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.03)" },
            }}
          >
            <CardMedia
              component="img"
              image={post.image}
              alt={post.title}
              sx={{
                width: "100%",
                display: "block",
              }}
            />
            <CardContent
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                bgcolor: "rgba(0,0,0,0.45)",
                color: "#fff",
                py: 1,
                px: 2,
              }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                {post.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Masonry>


      
    </Box>
     <Box
     sx={{
       py: 8,
       px: 3,
       textAlign: "center",
       bgcolor: "#fce4ec", // soft pink background
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
       Et bien plus encore...
     </Typography>

     <Typography
       variant="body1"
       color="text.secondary"
       mb={4}
       sx={{ maxWidth: 600, mx: "auto", lineHeight: 1.6 }}
     >
       Nous proposons une large gamme de soins esthétiques et anti-âge pour répondre à tous vos besoins de beauté et bien-être. Découvrez tous nos services personnalisés pour sublimer votre visage et votre corps.
     </Typography>

     <Link href="/services" passHref legacyBehavior>
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
