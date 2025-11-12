"use client"
import React from "react";
import { Box, Typography, Stack, Button, Divider, useTheme, ListItemIcon, ListItem  } from "@mui/material";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InsightsIcon from "@mui/icons-material/Insights";
import { grey } from "@mui/material/colors";
import { FaCheckDouble } from "react-icons/fa";
import Link from "next/link";

const FormationsPage = () => {
  const theme = useTheme();

  const formations = [
    {
      title: "Formation en Marketing Digital",
      icon: <InsightsIcon sx={{ fontSize: 55, color: theme.palette.primary.main }} />,
      description: `
        Une formation complète pour maîtriser les outils et stratégies du marketing digital moderne.
        Vous apprendrez à bâtir une présence forte sur le web, à comprendre le comportement de vos
        clients et à mettre en place des actions concrètes pour générer plus de visibilité et de ventes.
      `,
      objectifs: [
        "Comprendre les fondamentaux du marketing digital",
        "Optimiser la visibilité sur les moteurs de recherche (SEO/SEA)",
        "Créer et gérer des campagnes publicitaires en ligne (Meta Ads, Google Ads)",
        "Concevoir une stratégie de contenu efficace (réseaux sociaux, blog, e-mailing)",
        "Analyser la performance de vos actions marketing (Google Analytics, KPI)",
      ],
      durée: "4 semaines (en ligne ou présentiel)",
      niveau: "Débutant à intermédiaire",
      résultats: "À la fin de cette formation, vous serez capable de gérer une stratégie digitale complète et mesurable.",
      src : '/images/digi.jpg' 
    },

    {
      title: "Formation en Techniques de Vente",
      icon: <TrendingUpIcon sx={{ fontSize: 55, color: theme.palette.primary.main }} />,
      description: `
        Une formation pratique pour maîtriser l’art de vendre dans le monde moderne.
        De la prospection à la fidélisation, vous apprendrez à convaincre, négocier
        et conclure vos ventes avec confiance, tout en adaptant votre approche à chaque client.
      `,
      objectifs: [
        "Découvrir les étapes clés du processus de vente",
        "Maîtriser la communication persuasive et l’écoute active",
        "Gérer les objections et renforcer la confiance du client",
        "Utiliser la psychologie de l’achat pour mieux convaincre",
        "Mettre en place une stratégie de fidélisation client durable",
      ],
      durée: "3 semaines (formation intensive)",
      niveau: "Tous niveaux",
      résultats: "Vous repartirez avec des techniques concrètes pour améliorer vos ventes et renforcer votre relation client.",
      src : '/images/sell.jpg' 

    },
    {
      title: "Formation en E-commerce",
      icon: <ShoppingCartIcon sx={{ fontSize: 55, color: theme.palette.primary.main }} />,
      description: `
        Devenez autonome dans la création et la gestion de votre boutique en ligne.
        Cette formation vous guide pas à pas, de la conception à la conversion,
        avec des stratégies concrètes pour générer du trafic et des ventes durables.
      `,
      objectifs: [
        "Créer une boutique en ligne performante (Shopify, WooCommerce, etc.)",
        "Optimiser le parcours client et l’expérience utilisateur (UX/UI)",
        "Mettre en place des campagnes de marketing automatisées",
        "Analyser vos ventes et améliorer votre taux de conversion",
        "Construire une marque forte et identifiable en ligne",
      ],
      durée: "5 semaines (projet encadré)",
      niveau: "Intermédiaire",
      résultats: "Vous saurez gérer un site e-commerce complet, de la création à la stratégie de croissance.",
      src : '/images/ecom.webp' 

    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 10 } , bgcolor : grey[200] }}>
      {/* <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 6,
          color: theme.palette.primary.dark,
          fontSize: { xs: "2.2rem", md: "3rem" },
        }}
      >
        Nos Formations Professionnelles
      </Typography> */}

      <Stack spacing={10}>
        {formations.map((formation, index) => (
           
            <Box  bgcolor={"white"} p={5} >
            <Typography textAlign={"center"} fontWeight={'bold'} color="primary.dark"  variant="h3">
              {formation.title} 
            </Typography>
         <Stack 
            key={index}
            direction={{ xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
            alignItems="center"
            spacing={6}
            sx={{
              transition: "0.3s",
              "&:hover": { transform: "translateY(-4px)" },
             
            }}
          >
            <Box
              sx={{
                // bgcolor : 'primary.light' ,
                // flex: 1,
                width : {md : '50%' , xs : "100%"} ,
                textAlign: "center",
                bgcolor :'primary.light',
                display :'flex' , 
                alignItems :'center' , 
                borderRadius :"10px"
              }}
            >
              {/* {formation.icon}
              <Typography
                variant="h5"
                sx={{
                  mt: 2,
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                {formation.title}
              </Typography> */}

              <img style={{padding: "10px"  }} src={formation.src} alt=""  width={"100%"} height='100%' />
            </Box>

            <Box sx={{ flex: 2 ,  p : 6 }}>
              <Typography
                variant="body1"
                sx={{ mb: 2, color: theme.palette.text.secondary, lineHeight: 1.7 }}
              >
                {formation.description}
              </Typography>

              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                Objectifs :
              </Typography>
              <ul style={{ marginTop: 0, marginBottom: "1rem" }}>
                {formation.objectifs.map((obj, i) => (
                  <Box key={i} style={{ marginBottom: "0.4rem" }} sx={{display : 'flex' , alignItems: 'center' , gap : 2 }}>
                    <FaCheckDouble color={theme.palette.primary.dark} />
                     <Typography variant="body2" color="text.secondary">
                      {obj}
                    </Typography>
                  </Box>
                ))}
              </ul>

              <Stack direction="row" spacing={3} sx={{ mb: 2, flexWrap: "wrap" }}>
                <Typography variant="body2">
                  <strong>Durée :</strong> {formation.durée}
                </Typography>
                <Typography variant="body2">
                  <strong>Niveau :</strong> {formation.niveau}
                </Typography>
              </Stack>

              <Typography variant="body2" sx={{ mb: 3 }}>
                <strong>Résultat attendu :</strong> {formation.résultats}
              </Typography>
                  <Link href={"/contact"}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: "30px",
                  px: 4,
                  py: 1.2,
                  fontWeight: 600,
                  textTransform: "none",
                }}
              >
                S’inscrire à cette formation
              </Button>
                  </Link>
            </Box>
          </Stack>
          </Box>
        ))}
      </Stack>

      <Divider sx={{ my: 10 }} />

      <Typography
        variant="body1"
        align="center"
        sx={{
          fontWeight: 500,
          color: theme.palette.text.secondary,
          maxWidth: 700,
          mx: "auto",
          lineHeight: 1.6,
        }}
      >
        Toutes nos formations sont conçues pour être **pratiques, flexibles et orientées résultat**.  
        Vous bénéficiez d’un **accompagnement personnalisé** et d’outils concrets pour progresser à votre rythme.
      </Typography>
    </Box>
  );
};

export default FormationsPage;
