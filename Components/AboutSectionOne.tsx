"use client";
import { Box, Typography, Button, Container, CardContent, Card } from "@mui/material";
import { grey } from "@mui/material/colors";
import StatsSection from "./StatsSection";
// import ClinicHighlights from "./ClinicHighlights";

export default function AboutPage() {
  return (
    <Box sx={{ bgcolor:{ md :  grey[200]}, py: 8 }}>
      {/* Section 1 – Dr. Chehaibou */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 6,
          alignItems: "center",
          mb: 10,
          bgcolor : '#fff' , 
          p : { md  : 10 , xs : 2} , 
          width :{md :  "90vw" , xs : "100vw"} , 
          mx :'auto',
          pb : 0
        }}
      >
        <Box>
          <Typography
            variant="h3"
            fontWeight={700}
            color="primary.dark"
            mb={2}
          >
            À propos du Dr Chehaibou Dounia
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
             Dr Chehaibou Dounia est une médecin spécialisée en médecine
            esthétique, anti-âge et laser médical, reconnue pour son approche
            globale et naturelle du rajeunissement. Alliant expertise
            scientifique et technologie de pointe, elle propose des traitements
            personnalisés pour sublimer la beauté du visage et du corps tout en
            respectant l’harmonie et la singularité de chaque patient.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Grâce à sa formation approfondie en médecine esthétique et à une
            maîtrise des techniques injectables, lasers et biostimulantes, le Dr
            Chehaibou met un point d’honneur à offrir des résultats naturels,
            sûrs et durables. Sa philosophie repose sur l’écoute, la précision
            et la transparence, afin d’accompagner chaque patient dans un
            parcours de soin sur mesure.
          </Typography>
          <StatsSection />

        </Box>

        <Box
        justifySelf={'flex-end'}
          component="img"
          src="/images/dr.jpeg"
          alt="Dr Chehaibou Dounia"
          sx={{
            width: { md : "80%" , xs : '100%'},
            // borderRadius: 4,
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            objectFit: "cover",
            // aspectRatio : '1/1'
            mb : 2 
          }}
        />
      </Box>

      {/* Section 2 – Le Cabinet */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 6,
          alignItems: "center",
          mb: 10,
          bgcolor : '#fff' , 
          p : { md  : 10   , xs : 2} , 

          width :{md :  "90vw" , xs : "100vw"} , 
          mx :'auto'
        }}
      >
        <Box
          component="img"
          src="https://i.pinimg.com/1200x/fb/7c/86/fb7c86a0e1a595892408b11be124e9fa.jpg"
          alt="Cabinet du Dr Chehaibou Dounia"
          sx={{
            width: { md : "80%" , xs : '100%'},
            // borderRadius: 4,
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            objectFit: "cover",
          }}
        />

        <Box>
          <Typography
            variant="h3"
            fontWeight={700}
            color="primary.dark"
            mb={2}
          >
            Le Cabinet
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            Le Cabinet du Dr Chehaibou Dounia est un espace moderne et
            chaleureux, dédié à la médecine esthétique, régénérative et
            anti-âge. Équipé des dernières technologies médicales, il offre un
            cadre sûr et confortable pour des traitements de haute précision.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Les appareils utilisés, comme le Fotona SP Dynamis, permettent une
            prise en charge complète du visage et du corps — du rajeunissement
            cutané au remodelage corporel, en passant par les soins intimes ou
            capillaires.
          </Typography>

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
                Un centre moderne équipé des dernières technologies, offrant des soins esthétiques de haute précision dans un cadre confortable et bienveillant.
              </Typography>
            </Box>


        </Box>
      </Box>
    </Box>
  );
}





//  function ClinicHighlights() {
//   const highlights = [
//     {
//       title: "Technologie de Pointe",
//       desc: "Appareils modernes pour des soins précis et sûrs.",
//     },
//     {
//       title: "Approche Personnalisée",
//       desc: "Chaque patient bénéficie d’un protocole sur mesure.",
//     },
//     {
//       title: "Expertise et Bienveillance",
//       desc: "Des soins alliant rigueur médicale et écoute.",
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         display: "grid",
//         gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
//         gap: 3,
//         py: 5,
//         px: { xs: 2, md: 6 },
//       }}
//     >
//       {highlights.map((item, i) => (
//         <Card
//           key={i}
//           sx={{
//             textAlign: "center",
//             py: 3,
//             px: 2,
//             borderRadius: 4,
//             boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
//             "&:hover": {
//               transform: "translateY(-4px)",
//               boxShadow: "0 8px 18px rgba(233,30,99,0.25)",
//             },
//             transition: "all 0.3s ease",
//           }}
//         >
//           <CardContent>
//             {/* <Typography variant="h6" sx={{ fontWeight: 600, color: "primary.main", mb: 1 }}>
//               {item.title}
//             </Typography> */}
//             <Typography variant="body2" color="primary.dark">
//               {item.desc}
//             </Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </Box>
//   );
// }

