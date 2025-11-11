"use client";
import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Stack, useTheme, Chip, Button } from "@mui/material";

import { BsArrowRightShort, BsInfo, BsInfoSquare, BsInfoSquareFill } from "react-icons/bs";
import CtaButton from "./CtaButton";
import ServicesButton from "./ServicesButton";
import Link from "next/link";
import { BiArrowToRight } from "react-icons/bi";
import { MdArrowForward } from "react-icons/md";

export default function ServicesCarousel( ) {
    const theme  = useTheme()
    const homepageServices =  [
      {
        id: 1,
        title: "Techniques de vente",
        description:
          "Apprenez à maîtriser les méthodes de vente modernes : prospection, argumentaire, négociation et fidélisation client. Une formation conçue pour renforcer votre confiance et améliorer vos performances commerciales, que vous soyez débutant ou professionnel expérimenté.",
        img: "https://images.pexels.com/photos/5239812/pexels-photo-5239812.jpeg", // chemin exemple
        cta: "Découvrir la formation",
      },
      {
        id: 2,
        title: "Marketing digital",
        description:
          "Développez vos compétences dans le monde numérique : stratégies de contenu, réseaux sociaux, publicité en ligne, SEO et analyse de données. Idéal pour les entrepreneurs et les entreprises souhaitant renforcer leur présence en ligne.",
        img: "https://images.pexels.com/photos/6476187/pexels-photo-6476187.jpeg",
        cta: "Voir le programme",
      },
      {
        id: 3,
        title: "E-commerce",
        description:
          "Apprenez à créer, gérer et optimiser une boutique en ligne performante. De la création du site jusqu’à la gestion des ventes, du référencement et de la relation client, cette formation vous guide vers la réussite de votre activité en ligne.",
        img: "https://images.pexels.com/photos/6214452/pexels-photo-6214452.jpeg",
        cta: "Commencer la formation",
      },
    ];;
      
  return (
    <Box sx={{backgroundColor: "#f9f9f9" , py : 14 }}>
    <Box pb={8}>
        <Typography color="primary.dark" variant="h4" align="center" sx={{  fontWeight: "bold" }}>
            Nos Services
        </Typography>
        <Typography
        variant="subtitle1"
        align="center"
        sx={{ color: "text.secondary", maxWidth: 800 , mx: "auto"  , p : 2}}
      >
      Des parcours pratiques et adaptés pour renforcer vos compétences
      en vente, marketing digital et e-commerce. Apprenez avec des experts
      du terrain et développez des savoir-faire concrets pour réussir vos projets.
      </Typography>
       
    </Box>
    
   <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
        gap: 2,
        px: { xs: 2, md: 10 },
        // py: 6,
      }}
    >
      {homepageServices.map((service, idx) => (
        <Card
          key={idx}
          sx={{
            // borderRadius: 3,
            boxShadow: "-webkit-box-shadow: -3px 0px 23px -8px #000000", 
            boxShadow: "0px 0px 13px -8px #000000" ,
            
            // p: 2,
            
            transition: "transform 0.3s",
            "&:hover": { transform: "translateY(-5px)" },
            display: "flex",
            flexDirection: "column",
            justifyContent : "space-between" ,
            border  : '2px dashed purple'
            // boxShadow : "unset"
          }}
        >
          <CardMedia
            component="img"
            height="240"
            image={service.img}
            alt={service.title}
            // sx={{ borderTopLeftRadius: 12, borderTo'''pRightRadius: 12 }}
          />
          <CardContent sx={{py : 3 , px : 1.5 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 1 }}
              color={theme.palette.primary.dark}
            >
              {service.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              {service.description}
            </Typography>

            {/* --- Features --- */}

            {/* <Stack spacing={1}>
              {service.features.map((feature, i) => (
                <Typography
                 color="text.secondary"

                  variant="body2"
                  sx={{ textTransform: "none" }}
           
                >
                   <BsInfoSquareFill style={{color : theme.palette.primary.dark}} /> &nbsp; {feature}

                </Typography>
              ))}
            </Stack> */}
          </CardContent>
          <Link href={'/services'} style={{ margin : "0px auto" , marginTop :"auto"}} >
          <Button   size="small" variant="text" sx={{mx : "auto" , my : 2 , marginTop : 'auto'}} endIcon={<MdArrowForward /> } >
            Voir plus
          </Button>
          </Link>
        </Card>
      ))}
    </Box>

       <Box sx={{ display : "flex" , justifyContent :"center" , pt : 8 }}>

            <ServicesButton  color="primary" />

        </Box>          


      </Box>
  );
}
