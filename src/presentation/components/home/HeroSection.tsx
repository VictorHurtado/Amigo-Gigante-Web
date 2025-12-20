import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import { alpha, Box, Card, Container, Stack, Typography, useTheme } from "@mui/material";

import type { Animal } from "@/domain/models/Animal";
import { Button, Chip } from "@/presentation/components/atoms";
import { designSystemTokens } from "@/../tailwind.config";

interface HeroSectionProps {
  heroAnimals: Animal[];
}

export function HeroSection({ heroAnimals }: HeroSectionProps) {
  const theme = useTheme();
  const [first, second] = heroAnimals;

  return (
    <Box component="section" className="relative overflow-hidden bg-gradient-to-br from-neutral-50 to-white pb-12 pt-16 md:pb-16 md:pt-20">
      <Container maxWidth="lg" className="grid items-center gap-8 md:grid-cols-2">
        <Stack className="gap-6">
          <Chip
            icon={<PetsRoundedIcon />}
            label="Más de 500 amigos buscando hogar"
            tone="brand"
            variant="soft"
            sx={{ alignSelf: "flex-start" }}
          />
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "3rem", lg: "3.4rem" },
                fontWeight: 900,
                lineHeight: 1.1,
                color: "text.primary",
              }}
            >
              Encuentra a tu
              <br />
              <Box component="span" sx={{ color: "primary.main", position: "relative" }}>
                Compañero Ideal
              </Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 560, lineHeight: 1.7 }}>
              Adoptar salva vidas. Apadrinar da esperanza. Conecta con fundaciones verificadas y cambia el mundo de una
              mascota hoy.
            </Typography>
          </Box>
          <Box
            className="relative"
            sx={{
              maxWidth: 660,
              borderRadius: 3,
              border: "1px solid",
              borderColor: "divider",
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.08)}, ${alpha(theme.palette.secondary.light, 0.08)})`,
              boxShadow: 3,
              overflow: "hidden",
            }}
          >
            <Box
              className="absolute inset-0"
              sx={{
                pointerEvents: "none",
                background: `radial-gradient(circle at 20% 20%, ${alpha(designSystemTokens.colors.brand[200], 0.18)}, transparent 30%), radial-gradient(circle at 80% 0%, ${alpha(designSystemTokens.colors.accent[200], 0.16)}, transparent 26%)`,
              }}
            />
            <Stack className="relative gap-4 p-4 sm:p-5">
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  className="rounded-full"
                  sx={{
                    width: 10,
                    height: 10,
                    backgroundColor: designSystemTokens.colors.brand[500],
                    boxShadow: `0 0 0 8px ${alpha(designSystemTokens.colors.brand[500], 0.12)}`,
                  }}
                />
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "text.primary" }}>
                  Búsqueda rápida
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ajusta los filtros y encuentra tu próximo amigo
                </Typography>
              </Stack>
              <Box className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
                <Button
                  fullWidth
                  variant="outlined"
                  tone="neutral"
                  rounded="default"
                  startIcon={<FilterAltRoundedIcon />}
                  className="justify-start"
                  sx={{
                    minHeight: 56,
                    backgroundColor: theme.palette.background.paper,
                    borderColor: designSystemTokens.colors.neutral[200],
                    color: designSystemTokens.colors.neutral[700],
                    fontWeight: 700,
                    transition: "all 160ms ease",
                    boxShadow: "none",
                    "&:hover": {
                      borderColor: theme.palette.primary.main,
                      backgroundColor: alpha(theme.palette.primary.main, 0.06),
                      boxShadow: theme.shadows[1],
                      transform: "translateY(-1px)",
                    },
                    "&:focus-visible": {
                      boxShadow: `${theme.shadows[1]}, 0 0 0 4px ${alpha(theme.palette.primary.main, 0.18)}`,
                    },
                  }}
                >
                  Perros
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  tone="neutral"
                  rounded="default"
                  startIcon={<PlaceRoundedIcon />}
                  className="justify-start"
                  sx={{
                    minHeight: 56,
                    backgroundColor: theme.palette.background.paper,
                    borderColor: designSystemTokens.colors.neutral[200],
                    color: designSystemTokens.colors.neutral[700],
                    fontWeight: 700,
                    transition: "all 160ms ease",
                    boxShadow: "none",
                    "&:hover": {
                      borderColor: theme.palette.primary.main,
                      backgroundColor: alpha(theme.palette.primary.main, 0.06),
                      boxShadow: theme.shadows[1],
                      transform: "translateY(-1px)",
                    },
                    "&:focus-visible": {
                      boxShadow: `${theme.shadows[1]}, 0 0 0 4px ${alpha(theme.palette.primary.main, 0.18)}`,
                    },
                  }}
                >
                  Cualquier ubicación
                </Button>
                <Button
                  fullWidth
                  rounded="default"
                  startIcon={<SearchRoundedIcon />}
                  sx={{
                    minHeight: 56,
                    px: 4,
                    fontWeight: 900,
                    color: designSystemTokens.colors.neutral.white,
                    backgroundImage: `linear-gradient(120deg, ${designSystemTokens.colors.brand[500]}, ${designSystemTokens.colors.accent[500]})`,
                    boxShadow: theme.shadows[3],
                    transition: "transform 150ms ease, box-shadow 150ms ease, background-position 180ms ease",
                    backgroundSize: "150% 150%",
                    backgroundPosition: "0% 50%",
                    "&:hover": {
                      backgroundPosition: "100% 50%",
                      boxShadow: theme.shadows[4],
                      transform: "translateY(-1px)",
                    },
                    "&:focus-visible": {
                      boxShadow: `${theme.shadows[4]}, 0 0 0 4px ${alpha(theme.palette.primary.main, 0.2)}`,
                    },
                  }}
                >
                  Buscar
                </Button>
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Box className="grid items-start gap-4 sm:grid-cols-2 md:gap-6">
          <Stack className="gap-3 sm:mt-4">
            {first && (
              <Card
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 2,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Box component="img" src={first.imageUrl} alt={first.name} sx={{ height: 240, width: "100%", objectFit: "cover" }} />
              </Card>
            )}
            <Card className="flex items-center gap-3 rounded-2xl border border-solid p-3" sx={{ borderColor: "divider", boxShadow: 2 }}>
              <Chip
                icon={<PetsRoundedIcon color="secondary" />}
                label="Fundaciones 100% verificadas"
                tone="accent"
                variant="soft"
              />
            </Card>
          </Stack>
          <Stack className="gap-3">
            <Card
              sx={{
                backgroundColor: "secondary.main",
                color: "common.white",
                borderRadius: 2,
                p: 3,
                minHeight: 140,
                boxShadow: 3,
              }}
            >
              <VolunteerActivismRoundedIcon sx={{ fontSize: 36, mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.3 }}>
                Apadrina con amor
              </Typography>
            </Card>
            {second && (
              <Card
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 2,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Box component="img" src={second.imageUrl} alt={second.name} sx={{ height: 240, width: "100%", objectFit: "cover" }} />
              </Card>
            )}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
