"use client";
import { Box, Typography, Grid, Button, Card, CardContent, Stack } from "@mui/material";
import ContactButton from "./ContactButton";




export default function WhyUsSection() {
    const points = [
        {
          title: "Écoute & Diagnostic",
          desc: "Une première consultation dédiée à comprendre vos besoins et vos attentes.",
        },
        {
          title: "Plan Personnalisé",
          desc: "Chaque traitement est conçu sur mesure selon votre morphologie et vos objectifs.",
        },
        {
          title: "Technologies Modernes",
          desc: "Des équipements médicaux de dernière génération pour des résultats sûrs et naturels.",
        },
        {
          title: "Suivi & Accompagnement",
          desc: "Un suivi attentif avant, pendant et après vos soins pour garantir votre satisfaction.",
        },
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
        py: 10,
        px: { xs: 2, md: 8 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 6,
      }}
    >
      {/* --- Image Left --- */}
      <Box
        component="img"
        src="https://images.pexels.com/photos/29648642/pexels-photo-29648642.jpeg?_gl=1*dzl822*_ga*MTA3MzQ4NzM0OC4xNzUwODg0Njc2*_ga_8JE65Q40S6*czE3NjA0NDc2NDQkbzE0JGcxJHQxNzYwNDQ5MDE2JGoxMiRsMCRoMA.."
        alt="Médecine esthétique Marrakech"
        sx={{
          flex: 1,
          borderRadius: 4,
          width: { md : "50%" , xs : "100%"   },
          objectFit: "cover",
          boxShadow: 3,
          aspectRatio : "1/1"
        }}
      />

      {/* --- Cards Right --- */}
      <Box >
        {/* <Typography variant="h4" fontWeight="bold" mb={1}>
          Votre Parcours Beauté & Confiance
        </Typography> */}
        {/* <Typography variant="body2" color="text.secondary" mb={4}>
          Un accompagnement complet, du diagnostic au résultat final, pour révéler votre éclat naturel avec sérénité.
        </Typography> */}

        <Grid container spacing={3} sx={{ display : "flex"  , justifyContent : "end"}}>
          {points.map((step, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                // elevation={2}
                sx={{ 
                    boxShadow:  "0px 0px 13px -8px #000000" , 
                    border : "0px" , 
                     width: { md : "90%" , xs : "100%"   },
                    
                  borderRadius: 0,
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 3 },
                }}
              >
                <CardContent>
                  <Stack spacing={1}>
                    <Typography variant="subtitle1" fontWeight="bold" color="primary.main">
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.desc}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    

      <Typography variant="body2" color="text.secondary" my={4}>
          Un accompagnement complet, du diagnostic au résultat final, pour révéler votre éclat naturel avec sérénité.
        </Typography>

      {/* --- Call to Action Button --- */}
      <ContactButton />
    </Box>
  );
}
