"use client";
import { Box, Typography, Grid, Card, CardContent, Button, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import Link from "next/link";
import { FcFeedback } from "react-icons/fc";
import { TbQuoteFilled } from "react-icons/tb";
// import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function FeedbackSection() {
  const feedbacks = [
    {
      id: 1,
      name: "Sarah Benali",
      text: "La formation en marketing digital m'a permis de mieux comprendre les stratégies en ligne et d'appliquer immédiatement des techniques efficaces pour mon entreprise. Je recommande vivement !",
    },
    {
      id: 2,
      name: "Omar El Fassi",
      text: "La formation en e-commerce est très complète et pratique. Les exercices et cas réels m'ont beaucoup aidé à lancer ma boutique en ligne avec confiance.",
    },
    {
      id: 3,
      name: "Leila Ait Ahmed",
      text: "La formation sur les techniques de vente m'a donné les outils nécessaires pour améliorer ma prospection et mes négociations. Les formateurs sont très pédagogues et à l'écoute.",
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
        Témoignages de Nos Clients
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        mb={6}
        maxWidth="600px"
        mx="auto"
      >
        Apprenez de l’expérience de nos participants
       Des histoires inspirantes de ceux qui ont suivi nos programmes
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
      <Link href={'/contact'}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 6, px: 4, borderRadius: 8 }}
        endIcon={<FcFeedback />}
      >
        Laisser un Avis
      </Button>
      </Link>
    </Box>
  );
}
