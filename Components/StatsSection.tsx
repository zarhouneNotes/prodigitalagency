"use client";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function StatsSection() {
  const stats = [
    { label: "Années d'Expetise", value: "10+" },
    { label: "Clients satisfaits", value: "1 200+" },
    { label: "Taux de satisfaction", value: "98%" },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
        gap: 3,
        py: 6,
        // px: { xs: 2, md: 6 },
      }}
    >
      {stats.map((stat, i) => (
        <Card
        
          key={i}
          sx={{
            // width : "200px" , 
            textAlign: "center",
            // py: 4,
            // aspectRatio :'1/1',

            boxShadow: 6,
            // border: '0.5px solid',
            transition: "all 0.3s ease",
            bgcolor :'transparent' , 
            
            // borderColor : 'primary.main'
            
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                mb: 1,
              }}
            >
              {stat.value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {stat.label}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
