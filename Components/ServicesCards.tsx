"use client";

import { Box, Button, Card, CardContent, CardMedia, ListItem, ListItemIcon, Typography } from "@mui/material";
import { grey, pink } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import { BiCalendar } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { PiPlusFill } from "react-icons/pi";
import { TfiShine } from "react-icons/tfi";

const topServices = [
    {
      title: "LASERS MÉDICAUX",
      img: "https://i.pinimg.com/736x/e4/18/9c/e4189c5cedceee8261e81bcaf9a65e03.jpg",
      content:
        "Traitements par laser Fotona SP Dynamis (Nd:YAG / Er:YAG) : épilation durable, rajeunissement cutané, cicatrices, acné, rosacée, varicosités, lipolyse, raffermissement et plus. Technologie de précision non invasive pour une peau lisse, ferme et éclatante.",
      features: [
        "Épilation durable et sûre pour tous types de peau",
        "Rajeunissement cutané sans chirurgie",
        "Traitement des cicatrices et de l’acné",
        "Réduction des rougeurs et varicosités",
        "Raffermissement et remodelage du visage et du corps"
      ]
    },
    {
      title: "TOXINE BOTULIQUE (BOTOX)",
      img: "https://i.pinimg.com/736x/aa/56/39/aa56399ee25d0870c9196fddfa2879bb.jpg",
      content:
        "Le Botox détend les muscles responsables des rides d’expression (front, pattes d’oie, rides du lion) et permet de sculpter le visage : sourire gingival, pointe du nez, ovale du visage, cou ou hyperhidrose. Résultat naturel, harmonieux et rajeuni, sans chirurgie.",
      features: [
        "Lissage des rides d’expression",
        "Redéfinition de l’ovale et du cou",
        "Correction du sourire gingival et de la pointe du nez",
        "Traitement de l’hyperhidrose (transpiration excessive)",
        "Résultat naturel sans figer les traits"
      ]
    },
    {
      title: "FILLERS (ACIDE HYALURONIQUE)",
      img: "https://i.pinimg.com/1200x/8a/ad/be/8aadbed964f8c2330fdc2126c70d2d37.jpg",
      content:
        "Injections pour restaurer les volumes du visage : pommettes, lèvres, menton, jawline, cernes, tempes, mains. Redonnent structure, équilibre et hydratation, pour un effet lift naturel et un visage harmonieux sans modifier les expressions.",
      features: [
        "Restauration des volumes perdus",
        "Redéfinition du menton et de la jawline",
        "Comblement des cernes et tempes",
        "Hydratation profonde et éclat du visage",
        "Résultats immédiats et naturels"
      ]
    },
    {
      title: "SOINS DE RÉJUVENATION",
      img: "https://i.pinimg.com/1200x/27/e2/9f/27e29fe9e39f14f2744068dff24b6562.jpg",
      content:
        "Mésothérapie, microneedling, PRP/PRF, exosomes, skinboosters, biostimulateurs et cellules souches pour raviver l’éclat, raffermir la peau et stimuler la régénération cellulaire. Des soins naturels et personnalisés pour un rajeunissement durable.",
      features: [
        "Stimulation naturelle du collagène",
        "Hydratation et éclat du teint",
        "Régénération cellulaire profonde",
        "Méthodes 100 % biocompatibles",
        "Effet lift et rajeunissement durable"
      ]
    },
    {
      title: "PEELING",
      img: "https://i.pinimg.com/736x/f5/3d/c2/f53dc2f3b6bdca19959f2628d03d912f.jpg",
      content:
        "TCA, AHA, BHA ou laser Fotona pour exfolier, lisser et unifier la peau. Corrige les taches, rides fines et imperfections, ravive le teint et stimule le renouvellement cellulaire pour un effet peau neuve immédiat.",
      features: [
        "Exfoliation douce ou profonde selon le besoin",
        "Correction des taches pigmentaires",
        "Amélioration du grain et de la texture de la peau",
        "Stimulation du renouvellement cellulaire",
        "Éclat immédiat et peau lisse"
      ]
    },
    {
      title: "SOINS CAPILLAIRES",
      img: "https://i.pinimg.com/1200x/83/11/6c/83116cff9037172c6c49d25d22294ff6.jpg",
      content:
        "Laser HairRestart™, mésothérapie, PRP, exosomes, polynucléotides et cellules souches pour stimuler la repousse, renforcer la chevelure et ralentir la chute. Traitements naturels et efficaces pour des cheveux denses et brillants.",
      features: [
        "Stimulation de la repousse capillaire",
        "Renforcement du cuir chevelu",
        "Ralentissement de la chute des cheveux",
        "Amélioration de la densité et de la brillance",
        "Protocoles naturels et sans douleur"
      ]
    },
    {
      title: "VITAMINOTHÉRAPIE INTRAVEINEUSE",
      img: "https://i.pinimg.com/736x/a9/91/b3/a991b366f492bdf358716793836bc57b.jpg",
      content:
        "Perfusions de vitamines, minéraux, Glutathion et NAD+ pour revitaliser l’organisme, booster l’énergie, renforcer l’immunité et illuminer la peau. Un soin de bien-être global pour corps et esprit.",
      features: [
        "Hydratation et nutrition cellulaires profondes",
        "Détoxification du corps",
        "Booste l’énergie et la concentration",
        "Renforce l’immunité",
        "Illumine la peau de l’intérieur"
      ]
    },
    {
      title: "ENDOLIFT",
      img: "https://i.pinimg.com/1200x/27/56/2b/27562b2ef4b0337fa647c1595ed0ee20.jpg",
      content:
        "Lifting non chirurgical par fibre optique laser Nd:YAG. Réduit les graisses localisées et raffermit la peau du visage (pommettes, ovale, double menton). Effet sculptant et tenseur sans cicatrices ni éviction sociale.",
      features: [
        "Lifting sans chirurgie",
        "Réduction du double menton et des graisses localisées",
        "Raffermissement cutané visible",
        "Stimulation du collagène",
        "Résultats progressifs et naturels"
      ]
    },
    {
      title: "LASER GYNÉCOLOGIQUE",
      img: "https://i.pinimg.com/736x/57/28/51/5728510f4eca9a68272f5566bf8ce125.jpg",
      content:
        "Soin intime non invasif pour l’incontinence, la laxité ou la sécheresse vaginale. Le laser Fotona stimule la régénération du collagène pour restaurer le tonus et le confort intime, en toute sécurité.",
      features: [
        "Traitement de l’incontinence urinaire légère",
        "Amélioration de la laxité et de la sécheresse vaginale",
        "Stimulation du collagène vaginal",
        "Aucune douleur ni éviction sociale",
        "Résultats durables et confort intime retrouvé"
      ]
    }
  ];
  
  

export default function ServicesSection() {
  return (
    <Box sx={{ py: { xs : 4 ,   md :10}, px: { xs : 1 ,   md :5}, backgroundColor: grey[200] }}>
    

      {/* GRID USING BOX */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "2fr 1fr",
            md: "repeat(3, 1fr)"
          },
          gap: 3,
        }}
      >
         
                {topServices.map((service, i) => (
                   <Card
                   sx={{
                    display :'flex' , 
                    flexDirection : 'column' ,
                     
                    //  borderRadius: 4,
                     boxShadow: "0 6px 20px rgba(255,105,180,0.02)",
                     overflow: "hidden",
                     transition: "all 0.3s ease",
                     "&:hover": {
                       transform: "translateY(-8px)",
                    //    boxShadow: "0 10px 25px rgba(255,105,180,0.3)",
                     },
                   }}
                 >
                   {/* Image */}
                   <CardMedia
                     component={Image}
                     height="230"
                     image={service.img }
                     alt={service.title}
                     sx={{
                       objectFit: "cover",
                       transition: "transform 0.3s ease",
                       "&:hover": { transform: "scale(1.05)" },
                     }}
                   />
             
                   {/* Content */}
                   <CardContent sx={{ p: 3 }}>
                     <Typography
                       variant="h6"
                       fontWeight={700}
                       color="primary.main"
                       mb={1}
                     >
                       {service.title}
                     </Typography>
             
                     <Typography
                       variant="body2"
                       color="text.secondary"
                       mb={2}
                       sx={{ lineHeight: 1.6 }}
                     >
                       {service.content}
                     </Typography>
             
                     <Box
                       sx={{
                         listStyle: "none",
                         p: 0,
                         m: 0,
                         display: "flex",
                         flexDirection: "column",
                         gap: 0.5,
                        
                       }}
                     >
                       {service.features.map((f, i) => (
                         <ListItem key={i}  >
                            <ListItemIcon color="primary.main">
                                <BsStars color={pink[500]}   />
                            </ListItemIcon>


                           <Typography variant="body2" color="text.secondary">
                             {f}
                           </Typography>
                         </ListItem>
                       ))}
                     </Box>


                   </CardContent> 
                   <Link href={'/contact'} style={{margin :'auto' , marginTop : 'auto'  , marginBottom :"10px" }}>
                       <Button  endIcon={<BiCalendar />}  variant="outlined" size="small">
                            Rendez-vous
                       </Button>
                   </Link>
                  

                 </Card>
                ))}
         
      </Box>
    </Box>
  );
}
