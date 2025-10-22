"use client";
import { Box, Container, Typography, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        py: 6,
        // mt: 8,
        // borderTop: "1px solid #e0e0e0",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: { xs: 4, sm: 0 },
        }}
      >
        {/* Left: Info */}
        <Box sx={{ maxWidth: 400 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }} color="info">
            Dr. Dounia Chehaibou
          </Typography>
          <Typography variant="body2" color="info.dark">
            Spécialiste en médecine esthétique, anti-âge et laser médical à
            Marrakech. Le Dr Chehaibou propose des traitements modernes,
            sûrs et personnalisés pour sublimer la beauté naturelle.
          </Typography>
        </Box>

        {/* Right: Navigation Links */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          sx={{ alignItems: { xs: "flex-start", sm: "center" } }}
        >
          {[{ label :   "Accueil" , to  : '/'},
                   { label : "Services" , to : "/services"}, 
                   { label :  "Blog" , to :'/blog'}, 
                   { label : "À propos" , to : "/apropos" }].map((item) => (
            <Link
              key={item.label}
              // component={NextLink}
              href={`${item.to}`}
              // underline="none"
              // color="info"
             
              style={{
                color :grey[600] , 


                fontWeight: 500,
                transition: "color 0.3s ease",
                "&:hover": { color: "primary.main" },
                "&:active" : {color : "yellow"} , 
                textDecoration : 'inherit'
              }}
            >
              {item.label}
            </Link>
          ))}
        </Stack>
      </Container>

      {/* Bottom Copyright */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="body2" color="info.dark">
          © {new Date().getFullYear()} Dr. Dounia Chehaibou — Tous droits réservés.
        </Typography>
      </Box>
    </Box>
  );
}
