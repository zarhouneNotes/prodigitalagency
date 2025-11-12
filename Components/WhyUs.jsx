"use client";
import { Box, Typography, Grid, Button, Card, CardContent, Stack, CardMedia } from "@mui/material";
import ContactButton from "./ContactButton";




export default function WhyUsSection() {
    const items = [
      {
        id: 1,
        title: "Encadrement attentionné",
        description:
          "Nos éducateurs accompagnent chaque enfant avec douceur et patience, favorisant la confiance et l’éveil. Nous créons un environnement chaleureux où chaque petit se sent écouté, encouragé et valorisé dans ses découvertes quotidiennes.",
        cta: "Découvrir notre approche",
        src :'https://images.pexels.com/photos/6457478/pexels-photo-6457478.jpeg?_gl=1*18dhn20*_ga*MTA3MzQ4NzM0OC4xNzUwODg0Njc2*_ga_8JE65Q40S6*czE3NjI4NjA1MDYkbzE5JGcxJHQxNzYyODYwNTUxJGoxNSRsMCRoMA..'
      },
      {
        id: 2,
        title: "Programme éducatif complet",
        description:
          "Nous proposons un programme riche qui combine apprentissage, créativité et motricité. Chaque activité est pensée pour stimuler la curiosité, développer les compétences clés et encourager l’autonomie dès le plus jeune âge.",
        cta: "Voir le programme",
        src :'https://images.pexels.com/photos/636246/pexels-photo-636246.jpeg'
      },
      {
        id: 3,
        title: "Sécurité et bien-être",
        description:
          "La sécurité et le confort des enfants sont au cœur de nos priorités. Nos locaux sont entièrement adaptés, équipés et surveillés, offrant un cadre sain et rassurant propice au développement harmonieux.",
        cta: "Nos engagements",
        src :'https://images.pexels.com/photos/8761328/pexels-photo-8761328.jpeg'
      },
      {
        id: 4,
        title: "Communication transparente",
        description:
          "Nous croyons qu’une relation de confiance passe par une communication claire et constante. Les parents sont régulièrement informés des activités, progrès et événements à venir grâce à notre application dédiée.",
        cta: "Espace parents",
        src :'https://images.pexels.com/photos/3184438/pexels-photo-3184438.jpeg'
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
