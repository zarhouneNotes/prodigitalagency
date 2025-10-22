"use client";
import { Box, Typography, ImageList, ImageListItem, Button } from "@mui/material";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function GallerySection() {
  const images = [
    { img: "https://i.pinimg.com/1200x/6c/4e/75/6c4e7514d4021cf3f7add1b9c659b8b1.jpg", title: "Avant / Après" },
    { img: "https://i.pinimg.com/736x/69/07/c5/6907c572d7ff5fc186ac5132e8241f1b.jpg", title: "Soins du visage" },
    { img: "https://i.pinimg.com/736x/e7/66/de/e766de63063e0047601e8276d6ff749d.jpg", title: "Laser Médical" },
    { img: "https://i.pinimg.com/736x/32/88/94/3288948e4e2fbae6218860dd4848a1d2.jpg", title: "Rajeunissement" },
    { img: "https://i.pinimg.com/736x/50/af/7e/50af7ed0798aa347c7f82ece67eb0bc0.jpg", title: "Bien-être & Confiance" },
  ];

  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 8 },
        textAlign: "center",
        backgroundColor: "background.paper",
      }}
    >
      {/* --- Title --- */}
      <Typography variant="h4" fontWeight="bold" mb={1}>
        Galerie & Réalisations
      </Typography>

      {/* --- Subtitle --- */}
      <Typography
        variant="subtitle1"
        color="text.secondary"
        mb={6}
        maxWidth="600px"
        mx="auto"
      >
        Explorez quelques moments capturés au cabinet : soins, résultats et ambiance unique dédiée à votre beauté naturelle.
      </Typography>

      {/* --- Pinterest-style Gallery --- */}
      <ImageList
        variant="masonry"
        cols={5}
        // gap={12}
        sx={{
          columnCount: { xs: 1, sm: 2, md: 5 },
          columnGap: "12px",
        }}
      >
        {images.map((item, i) => (
          <ImageListItem key={i} sx={{ borderRadius: 3, overflow: "hidden" }}>
            <img
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
              style={{
                width: "100%",
                display: "block",
                borderRadius: "16px",
                objectFit: "cover",
                transition: "transform 0.4s ease",
                aspectRatio :"9/16"
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* --- CTA Button --- */}
      <Link href={"/blog"}>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        sx={{ mt: 6, px: 4}}
        endIcon={<BsArrowRight /> }
        >
        Visiter le Blog
      </Button>
        </Link>
    </Box>
  );
}
