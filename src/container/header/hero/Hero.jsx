import Cta from "../../../components/Cta";
import { Star, Circles, GaleryHero } from "../../../components/export";
import { Heading, Stack, Box } from "@chakra-ui/react";
export default function Hero() {
  return (
    <Stack>
      <Box>
        <Heading>
          Explore more fashion and collection <Star />
        </Heading>
        <Circles />
        <Cta copy='Show more' />
      </Box>
      <GaleryHero/>
    </Stack>
  );
}
