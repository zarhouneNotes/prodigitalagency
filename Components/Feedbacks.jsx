"use client";
import { Box, Typography, Grid, Card, CardContent, Button, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import { TbQuoteFilled } from "react-icons/tb";
// import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function FeedbackSection() {
  const feedbacks = [
    {
      name: "Sofia L.",
      text: "Une expérience incroyable ! La Dr. Chehaibou est très professionnelle et douce. Les résultats sont naturels et je me sens plus confiante que jamais.",
    },
    {
      name: "Nadia M.",
      text: "J’ai adoré le suivi personnalisé et la qualité des soins. Le cabinet est moderne, propre et très accueillant. Je recommande sans hésiter.",
    },
    {
      name: "Yasmine R.",
      text: "Des traitements à la pointe et une approche humaine. Je suis ravie de mes résultats et de l’accompagnement du début à la fin.",
    },
  ];

  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 8 },
        textAlign: "center",
        backgroundColor: grey[100] ,
      }}
    >
      {/* --- Title & Subtitle --- */}
      <Typography variant="h4" fontWeight="bold" mb={1} color="primary.dark">
        Témoignages de Nos Patients
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        mb={6}
        maxWidth="600px"
        mx="auto"
      >
        Découvrez ce que nos patientes disent de leur expérience au cabinet —
        des soins personnalisés, des résultats naturels et une écoute attentive.
      </Typography>

      {/* --- Feedback Cards --- */}
      <Grid container spacing={4} justifyContent={'center'}>
        {feedbacks.map((fb, i) => (
          <Grid item xs={12} sm={6} md={3} width={"300px"} key={i}>
            <Card
            //   elevation={3}
              sx={{
                // borderRadius: 3,
                boxShadow : " 0px 0px 13px -8px #000000"  , 
                height: "100%",
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <CardContent>
                <Stack spacing={2}  alignItems="center">
                  <TbQuoteFilled color="primary" fontSize="large" />
                  <Typography
                    variant="body1"
                    color="text.primary"
                    sx={{ fontStyle: "italic" }}
                  >
                    “{fb.text}”
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    color="primary.main"
                    mt={2}
                  >
                    — {fb.name}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* --- CTA Button --- */}
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 6, px: 4, borderRadius: 8 }}
      >
        Laisser un Avis
      </Button>
    </Box>
  );
}
