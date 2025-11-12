import { CheckBox } from '@mui/icons-material'
import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { FaSchoolCircleExclamation } from 'react-icons/fa6'

function Meth() {
    const theme  = useTheme()
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 8 }  , bgcolor : grey[200]} }>
      {/* === SECTION 1 : COMMENT ÇA SE PASSE === */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        alignItems="center"
        sx={{
          mb: { xs: 10, md: 14 },
          textAlign: { xs: "center", md: "left" }, bgcolor :'white' , 
          p : 4
        }}
      >
        <Box sx={{ flex: 1 , }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 2,
            }}
          >
            Comment ça se passe ?
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.secondary, lineHeight: 1.8, mb: 3 }}
          >
            Chez <strong>Pro Digital Agency</strong>, notre méthodologie repose sur une approche
            progressive et personnalisée. Chaque étape est conçue pour maximiser votre apprentissage
            et garantir des résultats concrets sur le terrain.
          </Typography>

          <Stack spacing={1.5}>
            {[
              "Diagnostic et définition de vos objectifs",
              "Élaboration d’un plan d’apprentissage sur mesure",
              "Sessions de formation pratiques et interactives",
              "Mise en application sur des cas réels",
              "Suivi et accompagnement post-formation",
            ].map((step, i) => (
              <Typography
                key={i}
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: theme.palette.text.primary,
                }}
              >
                <CheckBox
                  sx={{ fontSize: 20, color: theme.palette.primary.main }}
                />
                {step}
              </Typography>
            ))}
          </Stack>

          <Button
            variant="outlined"
            color="primary"
            sx={{
              mt: 4,
              borderRadius: "25px",
              px: 4,
              py: 1.2,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Découvrir le déroulement complet
          </Button>
        </Box>

        {/* Illustration à droite */}
        <Box
          sx={{
            flex: 1,
            minHeight: 280,
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src="/images/pasapas.jpg"
            alt="Méthodologie de formation"
            // width={600}
            // height={400}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Stack>

      {/* === SECTION 2 : CERTIFICATION === */}
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        spacing={6}
        alignItems="center"
        sx={{
          textAlign: { xs: "center", md: "left" },
          backgroundColor: theme.palette.background.default,
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 4 },
          borderRadius: "0px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
        }}
      >
        {/* Image à gauche */}
        <Box
          sx={{
            flex: 1,
            // borderRadius: "20px",
            overflow: "hidden",
            minHeight: 280,
          }}
        >
          <img
            src="/images/cert.jpg"
            alt="Étudiants certifiés"
            // width={600}
            // height={400}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        {/* Texte à droite */}
        <Box sx={{ flex: 1 }}>
          <FaSchoolCircleExclamation
            style={{ fontSize: 50, color: theme.palette.primary.main, marginBottom: 2 }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.dark,
              mb: 2,
            }}
          >
            Certification et reconnaissance
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.secondary, lineHeight: 1.8, mb: 3 }}
          >
            À la fin de chaque parcours, vous recevez un{" "}
            <strong>certificat de réussite officiel</strong> délivré par{" "}
            <strong>Pro Digital Agency</strong>.
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary, mb: 3 }}
          >
            🎓 Ce certificat atteste de vos compétences acquises et constitue un
            véritable atout pour booster votre carrière dans le marketing
            digital, le e-commerce ou la communication.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "25px",
              px: 4,
              py: 1.2,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            En savoir plus sur la certification
          </Button>
        </Box>
      </Stack>
    </Box>
  ) }


export default Meth