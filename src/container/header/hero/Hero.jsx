import Cta from "../../../components/Cta";
import { Star, Circles, GaleryHero } from "../../../components/export";
import { Heading, Stack, Box } from "@chakra-ui/react";
export default function Hero() {
  return (
    <Stack>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Heading>
          <Circles />
          Explore more fashion and collection <Star />
        </Heading>
        <Cta copy="Show more" />
      </Box>
      <GaleryHero />
    </Stack>
  );
}
