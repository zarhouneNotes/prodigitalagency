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
    const homepageServices = [
        {
          img: 'https://www.globalclinic.be/images/medecine-esthtetique-1.webp',
          title: 'Médecine Esthétique Globale',
          desc: 'Des solutions personnalisées pour sublimer votre visage et votre corps, grâce à des traitements innovants et sûrs.',
          features: [
            'Rajeunissement et embellissement du visage',
            'Soins corporels et sculptants',
            'Technologies modernes et non invasives'
          ]
        },
        {
          img: 'https://i0.wp.com/drmariemilan.com/wp-content/uploads/2024/03/mesotherapie-crop.jpg?w=600&ssl=1',
          title: 'Rajeunissement Naturel',
          desc: 'Des techniques régénératives pour redonner éclat, tonicité et hydratation à votre peau.',
          features: [
            'Mésothérapie et Microneedling',
            'PRP, Exosomes et Biostimulateurs',
            'Cellules souches pour une régénération naturelle'
          ]
        },
        {
          img: 'https://eu-images.contentstack.com/v3/assets/blt5088c07559fc83f1/bltba2fe03e5562a915/67775f65ec35032381f9d7c3/shutterstock_425042167-1.jpg?width=1908&height=1274&format=webp&quality=80',
          title: 'Soins Intimes et Capillaires',
          desc: 'Des traitements spécialisés pour votre bien-être intime et la vitalité de vos cheveux.',
          features: [
            'Laser gynécologique pour confort et tonicité',
            'Stimuler la repousse et renforcer la chevelure',
            'Solutions personnalisées et efficaces'
          ]
        },
        {
          img: 'https://picsum.photos/300/200?random=14',
          title: 'Performance et Vitalité',
          desc: 'Des soins pour revitaliser votre corps et booster votre énergie au quotidien.',
          features: [
            'Vitaminothérapie intraveineuse et perfusions revitalisantes',
            'Hydratation, détoxification et énergie',
            'Bien-être général et éclat naturel'
          ]
        }
      ];
      
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
        Découvrez l’ensemble des soins proposés par notre cabinet de médecine esthétique et anti-âge à Marrakech, conçus pour sublimer votre beauté naturelle et votre bien-être.
      </Typography>
       
    </Box>
    {/* <Box
      sx={{
          m : 1 ,
        overflowX: "auto",
        display: "flex",
        gap: 3,
        py: 4,
        px: { xs: 2, md: 8 },
        scrollSnapType: "x mandatory",
        "&::-webkit-scrollbar": { display: "none" }, // hide scrollbar
    }}
    >

        
      {services.map((service, idx) => (
        <Card
          key={idx}
          sx={{
            width: { xs: "230px", sm: "300px", md: "350px" },
            flexShrink: 0,
            scrollSnapAlign: "start",
            // borderRadius: 3,
            // boxShadow: 3,
        }}
        >
          <CardMedia
            component="img"
            height="180"
            image={service.img}
            alt={service.title}
          />
          <CardContent>
            <Typography
                color={theme.palette.primary.dark}
                variant="h6"
              component="div"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              {service.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {service.desc}
            </Typography>

            <Stack spacing={0.5}>
              {service.features.map((feature, i) => (
                  <Typography
                  key={i}
                  variant="body2"
                  sx={{ fontSize: "0.85rem", color: "#555" }}
                >
                  • {feature}
                </Typography>
              ))}
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Box> */}

   <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
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
            // boxShadow : "unset"
          }}
        >
          <CardMedia
            component="img"
            height="200"
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
              {service.desc}
            </Typography>

            {/* --- Features --- */}

            <Stack spacing={1}>
              {service.features.map((feature, i) => (
                <Typography
                 color="text.secondary"

                  variant="body2"
                  sx={{ textTransform: "none" }}
           
                >
                   <BsInfoSquareFill style={{color : theme.palette.primary.dark}} /> &nbsp; {feature}

                </Typography>
              ))}
            </Stack>
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
