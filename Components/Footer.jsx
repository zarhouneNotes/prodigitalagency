import React from "react";
import { Box, Typography, Link, Stack, Divider } from "@mui/material";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.900",
        color: "grey.100",
        py: 8,
        px: { xs: 3, md: 8 },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        spacing={{ xs: 6, md: 4 }}
        alignItems={{ xs: "flex-start", md: "flex-start" }}
      >
        {/* About / Summary */}
        <Box sx={{ maxWidth: 400 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Pro Digital Agency
          </Typography>
          <Typography variant="body2" color="grey.300">
            Cabinet de formation et d’accompagnement en marketing digital aidant entreprises, entrepreneurs et professionnels à développer leurs compétences et maîtriser les leviers du digital.
          </Typography>
        </Box>

        {/* Contact */}
        <Box>
          <Typography variant="h6" gutterBottom fontWeight="medium">
            Contact
          </Typography>
          <Stack spacing={1}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <FiPhone size={16} />
              <Link href="tel:+212661235749" color="inherit" underline="hover">
                +212 661 235749
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <FiMail size={16} />
              <Link href="mailto:prodigitalagency22@gmail.com" color="inherit" underline="hover">
                prodigitalagency22@gmail.com
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <FiMapPin size={16} />
              <Typography variant="body2" color="grey.300">
                45 rue De l'Atlas N10 Maarif, au-dessus de La Colombe d'Or
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Links */}
        <Box>
          <Typography variant="h6" gutterBottom fontWeight="medium">
            Liens
          </Typography>
          <Stack spacing={1}>
            <Link href="#" color="inherit" underline="hover">Accueil</Link>
            <Link href="#" color="inherit" underline="hover">Formations</Link>
            <Link href="#" color="inherit" underline="hover">Blog</Link>
            <Link href="#" color="inherit" underline="hover">À propos</Link>
            <Link href="#" color="inherit" underline="hover">Contact</Link>
          </Stack>
        </Box>
      </Stack>

      {/* Divider */}
      <Divider sx={{ my: 6, borderColor: "grey.800" }} />

      {/* Copyright */}
      <Box textAlign="center">
        <Typography variant="body2" color="grey.500">
          &copy; {new Date().getFullYear()} Pro Digital Agency. Tous droits réservés.
        </Typography>
      </Box>
    </Box>
  );
}
