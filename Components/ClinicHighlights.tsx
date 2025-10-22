"use client";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function ClinicHighlights() {
  const highlights = [
    {
      title: "Technologie de Pointe",
      desc: "Équipements médicaux modernes comme le laser Fotona SP Dynamis pour des soins précis, sûrs et efficaces.",
    },
    {
      title: "Approche Personnalisée",
      desc: "Chaque patient bénéficie d’un diagnostic et d’un protocole sur mesure, adaptés à ses besoins et objectifs.",
    },
    {
      title: "Expertise et Bienveillance",
      desc: "Sous la supervision du Dr Chehaibou Dounia, chaque traitement allie rigueur médicale et écoute attentive.",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
        gap: 3,
        py: 6,
        px: { xs: 2, md: 6 },
      }}
    >
      {highlights.map((item, i) => (
        <Card
          key={i}
          sx={{
            textAlign: "center",
            py: 4,
            px: 2,
            borderRadius: 4,
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 8px 20px rgba(233, 30, 99, 0.25)",
            },
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                color: "primary.main",
                fontWeight: 600,
                mb: 1,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ maxWidth: 320, mx: "auto" }}
            >
              {item.desc}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
