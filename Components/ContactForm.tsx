"use client";

import { Box, Typography, TextField, Button, MenuItem, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { grey } from "@mui/material/colors";

const ContactSection = () => {
  const theme = useTheme();

  const formations = [
    "Marketing Digital",
    "Techniques de Vente",
    "E-commerce",
  ];

  return (
    <Box
      sx={{
        bgcolor : grey[200] , 
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "80vh",
        overflow: "hidden",
        // boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
        py: { xs: 0, md: 10 },
        px : {md : 10 , xs : 0}
      }}
    >
      {/* === COLONNE GAUCHE === */}
      <Box
  sx={{
    flex: 1,
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 70%, ${theme.palette.primary.main} 100%)`,
    color: "white",
    p: { xs: 5, md: 8 },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Effets décoratifs */}
  <Box
    sx={{
      position: "absolute",
      top: -60,
      left: -60,
      width: 200,
      height: 200,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.1)",
      filter: "blur(60px)",
    }}
  />
  <Box
    sx={{
      position: "absolute",
      bottom: -80,
      right: -80,
      width: 250,
      height: 250,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.07)",
      filter: "blur(80px)",
    }}
  />

  {/* Contenu */}
  <Typography
    variant="h3"
    sx={{
      fontWeight: 800,
      mb: 3,
      zIndex: 1,
      position: "relative",
    }}
  >
    Contactez-nous
  </Typography>

  <Typography
    variant="body1"
    sx={{
      mb: 5,
      opacity: 0.9,
      fontSize: "1.1rem",
      lineHeight: 1.7,
      zIndex: 1,
      position: "relative",
    }}
  >
    Nous sommes ravis de vous accompagner dans vos projets digitaux.  
    Notre équipe est à votre écoute pour toute demande de formation, d’accompagnement ou de collaboration.
  </Typography>

  <Stack spacing={3} sx={{ zIndex: 1, position: "relative" }}>
    <Stack direction="row" spacing={2} alignItems="center">
      <AccessTimeIcon sx={{ color: "white", fontSize: 28 }} />
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
          Horaires
        </Typography>
        <Typography>De lundi à dimanche : 9h00 – 20h00</Typography>
      </Box>
    </Stack>

    <Stack direction="row" spacing={2} alignItems="center">
      <PhoneIcon sx={{ color: "white", fontSize: 28 }} />
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
          Téléphone
        </Typography>
        <Typography>+212 661 235749</Typography>
      </Box>
    </Stack>

    <Stack direction="row" spacing={2} alignItems="center">
      <EmailIcon sx={{ color: "white", fontSize: 28 }} />
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
          Email
        </Typography>
        <Typography>contact@prodigitalagency.com</Typography>
      </Box>
    </Stack>

    <Stack direction="row" spacing={2} alignItems="center">
      <LocationOnIcon sx={{ color: "white", fontSize: 28 }} />
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
          Adresse
        </Typography>
        <Typography>
          45 rue De l'Atlas N10 Maarif,
          <br /> au-dessus de La Colombe d'Or
        </Typography>
      </Box>
    </Stack>
  </Stack>

  {/* Phrase inspirante en bas */}
  <Typography
    variant="body2"
    sx={{
      mt: 6,
      fontStyle: "italic",
      opacity: 0.8,
      textAlign: "left",
      zIndex: 1,
      position: "relative",
    }}
  >
    “Le digital est une aventure humaine avant tout — avançons ensemble.”
  </Typography>
</Box>


      {/* === COLONNE DROITE (FORMULAIRE) === */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "white",
          p: { xs: 4, md: 6 },
          display: "flex",
          flexDirection: "column",
          // justifyContent: "stretch",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: theme.palette.primary.main,
            mb: 3,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Envoyez-nous un message
        </Typography>

        <Stack
          component="form"
          spacing={3}
          sx={{
            maxWidth: 500,
            mx: { xs: "0px", md: 0 },
          }}
        >
          <TextField label="Nom complet" variant="outlined" fullWidth required />
          <TextField label="Téléphone" variant="outlined" fullWidth required />
          <TextField label="Email" type="email" variant="outlined" fullWidth required />
          <TextField
            select
            label="Formation intéressé(e)"
            variant="outlined"
            fullWidth
            required
          >
            {formations.map((formation) => (
              <MenuItem key={formation} value={formation}>
                {formation}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            required
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              mt: 1,
              textTransform: "none",
              borderRadius: "30px",
              fontWeight: 600,
              alignSelf: { xs: "center", md: "flex-start" },
              px: 5,
              py: 1.5,
            }}
          >
            Envoyer
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ContactSection;
