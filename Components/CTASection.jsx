
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function CTASection() {
  return (
    <Box
      sx={{
        py: 12,
        px: { xs: 2, md: 8 },
        textAlign: "center",
        background: "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)",
        color: "text.primary",
       
        // mt: 8,
      }}
    >
      {/* --- Main Sentence --- */}
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          maxWidth: "700px",
          mx: "auto",
          lineHeight: 1.4,
        }}
      >
                Boostez vos compétences dès aujourd'hui

      </Typography>

      {/* --- Supporting Text --- */}
      <Typography
        variant="subtitle1"
        color="text.secondary"
        mb={4}
        sx={{ maxWidth: "600px", mx: "auto" }}
      >
        Découvrez nos formations en techniques de vente, marketing digital et e-commerce. Profitez d’un accompagnement personnalisé pour atteindre vos objectifs professionnels plus rapidement.
      </Typography>

      {/* --- CTA Button --- */}
      <Link href={"/formations"}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          px: 5,
          py: 1.5,
          fontSize: "1.1rem",
          //   borderRadius: 8,
          textTransform: "none",
        }}
        >
        Découvrir les formations
      </Button>
        </Link>
    </Box>
  );
}
