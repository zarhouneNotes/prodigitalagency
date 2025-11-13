
import { Box, Typography, Avatar, Container } from "@mui/material";

export default function QuoteSection() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        backgroundColor: "primary.dark",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Avatar
          alt="Dr Chehaibou Dounia"
          src="/images/dr.jpeg"
          sx={{
            width: 100,
            height: 100,
            mx: "auto",
            mb: 3,
            border: "4px solid white",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        />
        <Typography
          variant="h5"
          sx={{
            fontStyle: "italic",
            color: "#fff",
            mb: 2,
            lineHeight: 1.6,
          }}
        >
          “Imaginez convertir chaque opportunité en vente !
        C’est exactement ce que notre formation en techniques de vente et commercialisation”
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", color: "#fff" }}
        >
          — Directrice  Amina
        </Typography>
      </Container>
    </Box>
  );
}
