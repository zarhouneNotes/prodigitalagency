"use client";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function ContactSection() {
  return (
    <Box
      sx={{
        maxWidth: 1100,
        mx: "auto",
        my: 10,
        px: { xs: 2, md: 6 },
        py: 6,
        borderRadius: 4,
        backgroundColor: "#fff",
        boxShadow: 4,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 6,
      }}
    >
      {/* Left: Business Hours */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h5"
          sx={{ mb: 2, fontWeight: 600, color: "#D81B60" }}
        >
          Horaires d’ouverture
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 3 }}>
          Retrouvez-nous pendant nos horaires d’ouverture pour toute
          consultation ou demande d’information.
        </Typography>

        <Box sx={{ lineHeight: 1.8 }}>
          <Typography>
            <strong>Lundi – Vendredi :</strong> 9h00 – 19h00
          </Typography>
          <Typography>
            <strong>Samedi :</strong> 9h00 – 13h00
          </Typography>
          <Typography>
            <strong>Dimanche :</strong> Fermé
          </Typography>
        </Box>



        <Box
              sx={{
                textAlign: "left",
                py: 6,
                px: { xs: 2, md: 6 },
                maxWidth: 900,
                mx: "auto",
                bgcolor   :'primary.dark' ,
                mt: 2
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "info.main",
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                Ne laissez pas le temps marquer votre peau – rejoignez notre centre dès maintenant et découvrez des solutions esthétiques sûres et efficaces pour un rajeunissement visible !
                  </Typography>
            </Box>

        <Typography
          sx={{
            mt: 4,
            color: "text.secondary",
            fontSize: 14,
            fontStyle: "italic",
          }}
        >
          Nous vous accueillons avec ou sans rendez-vous selon disponibilité.
        </Typography>
      </Box>

      {/* Right: Contact Form */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h5"
          sx={{ mb: 1, fontWeight: 600, color: "#D81B60" }}
        >
          Contactez-nous
        </Typography>
        <Typography sx={{ mb: 3, color: "text.secondary", fontSize: 15 }}>
          Remplissez le formulaire ci-dessous et notre équipe vous répondra
          dans les plus brefs délais.
        </Typography>

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
          }}
        >
          <TextField label="Nom complet" variant="outlined" fullWidth />
          <TextField label="Sujet" variant="outlined" fullWidth />
          <TextField label="Numéro de téléphone" variant="outlined" fullWidth />
          <TextField
            label="Votre message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
          />
          <Button
            variant="contained"
            sx={{
              mt: 1,
              py: 1.2,
              backgroundColor: "#D81B60",
              "&:hover": { backgroundColor: "#c2185b" },
              fontWeight: 600,
              borderRadius: 2,
            }}
          >
            Envoyer le message
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
