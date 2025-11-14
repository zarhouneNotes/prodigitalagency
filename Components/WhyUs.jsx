"use client";
import { Box, Typography, Grid, Button, Card, CardContent, Stack, CardMedia } from "@mui/material";
import ContactButton from "./ContactButton";




export default function WhyUsSection() {
  const items = [
    {
      id: 1,
      title: "Encadrement professionnel",
      description:
        "Nos formateurs expérimentés accompagnent chaque apprenant avec une approche personnalisée. Leur objectif : vous guider pas à pas vers la maîtrise du digital, que vous soyez étudiant, entrepreneur ou déjà en activité.",
      cta: "Découvrir notre équipe",
      src: "https://images.pexels.com/photos/3184643/pexels-photo-3184643.jpeg"
    },
    {
      id: 2,
      title: "Programme de formation complet",
      description:
        "Nos parcours couvrent l’ensemble des compétences essentielles : marketing digital, techniques de vente, gestion de campagnes publicitaires, réseaux sociaux, SEO et e-commerce. Un contenu structuré, pratique et orienté résultats.",
      cta: "Voir les formations",
      src: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg"
    },
    {
      id: 3,
      title: "Accompagnement stratégique",
      description:
        "Nous aidons les entrepreneurs et entreprises à structurer leur présence en ligne grâce à des conseils stratégiques, des audits personnalisés et un suivi professionnel pour atteindre leurs objectifs de croissance.",
      cta: "Découvrir l’accompagnement",
      src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    },
    {
      id: 4,
      title: "Suivi transparent & résultats mesurables",
      description:
        "Nous privilégions une communication claire : avancement, recommandations, performances et axes d’amélioration. Chaque apprenant ou entreprise bénéficie d’un suivi détaillé pour progresser efficacement.",
      cta: "En savoir plus",
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    }
  ];
  

  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 8 },
        textAlign: "center",
        // backgroundColor: "background.default",
      }}
    >
      {/* --- Title & Subtitle --- */}
      <Typography variant="h4" fontWeight="bold" mb={2} color="secondary">
        Pourquoi Nous Choisir ?
      </Typography>
      <Typography variant="subtitle1" color="text.secondary"  maxWidth="600px" mx="auto">
        Découvrez ce qui fait notre différence : expertise, innovation et une attention sincère portée à votre bien-être et à votre beauté naturelle.
      </Typography>

      {/* --- Advantages --- */}


      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 0,
          justifyContent: "space-evenly",
          my : 5
        }}
      >
        {items.map((it) => (
          <Card
            key={it.id}
            elevation={0}
            sx={{
              width: { xs: "100%", sm: "calc(50% - 12px)", md: `calc(${100 / Math.min(items.length, 4)}% - 16px)` },
              boxShadow: "none",
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              // bgcolor :"red" , 
              // m : 0
            }}
          >
           
            

            <CardContent sx={{flex: 1 ,   display : 'flex' , flexDirection : 'column' , gap : 2  }}>
            <CardMedia
                  sx={{ height: 200  }}
                  image={it.src}
                  title="pro digital agency "
                />
              <Typography variant="" component="h3" gutterBottom color="primary.dark">
                {it.title}
              </Typography>
              <Typography variant="body2" color="text.secondary"  sx={{  }}>
                {it.description}
              </Typography>

              {/* optional CTA aligned bottom-left */}
              {/* <Box sx={{ mt: "auto" }}>
                <Button size="small">{it.cta ?? "En savoir plus"}</Button>
              </Box> */}
            </CardContent>
          </Card>
        ))}
      </Box>
     
    

      {/* <Typography variant="body2" color="text.secondary" my={4}>
          Un accompagnement complet, du diagnostic au résultat final, pour révéler votre éclat naturel avec sérénité.
        </Typography> */}

      {/* --- Call to Action Button --- */}
      <ContactButton />
    </Box>
  );
}
