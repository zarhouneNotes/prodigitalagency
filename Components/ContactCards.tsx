"use client";
import { Box, Card, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

export default function ContactCards() {
  const contactInfo = [
    {
      icon: <MdLocationOn size={32} />,
      title: "Adresse",
      detail: "35 Bd Abdelkrim Khattabi, Marrakech",
      caption: "Un emplacement central et facile d’accès.",
    },
    {
      icon: <MdPhone size={32}  />,
      title: "Téléphone",
      detail: "+212 524 43 14 48",
      caption: "Nous sommes à votre écoute.",
    },
    {
      icon: <MdEmail size={32}  />,
      title: "Email",
      detail: "dr.chehaiboudounia@gmail.com",
      caption: "Écrivez-nous pour toute demande d’information.",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
        gap: 3,
        py: 8,
        px: { xs: 2, md: 12 },
        backgroundColor: "",
      }}
    >
      {contactInfo.map((item, index) => (
        <Card
          key={index}
          sx={{
            borderRadius: 4,
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            backgroundColor: "primary.dark",
            textAlign: "center",
            p: 4,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
              color :'info.main'

            }}
          >
            {/* {item.icon} */}
          </Box>

          <Typography
            variant="body2"
            sx={{ fontWeight: 600, color: grey[200] , mb: 1 }}
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              color: "info.main",
              fontSize: 18,
              fontWeight: 500,
              mb: 1,
            }}
          >
            {item.detail}
          </Typography>

          <Typography
            sx={{
              color: grey[200] ,
              fontSize: 13,
              fontStyle: "italic",
            }}
          >
            {item.caption}
          </Typography>
        </Card>
      ))}
    </Box>
  );
}
