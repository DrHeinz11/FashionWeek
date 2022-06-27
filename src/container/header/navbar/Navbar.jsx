import { Stack, Text, Box } from "@chakra-ui/react";
import Logo from "./components/Logo";
const Navbar = () => {
  return (
    <Stack
      flexDirection={"row"}
      w={"100%"}
      maxW={"1200px"}
      margin="auto"
      justifyContent={"space-between"}
      gap="25px"
      paddingInline={"25px"}
      paddingTop={"10px"}
      position="fixed"
    >
      <Box>
        <Logo />
      </Box>
      <Stack flexDirection={"row"} alignItems={"center"} gap={"5rem"}>
        <Text
          marginTop={".5rem"}
          borderBottom={"1px solid transparent"}
          _hover={{ borderBottom: "1px solid black" }}
        >
          Home
        </Text>
        <Text
          borderBottom={"1px solid transparent"}
          _hover={{ borderBottom: "1px solid black" }}
        >
          Collection
        </Text>
        <Text
          borderBottom={"1px solid transparent"}
          _hover={{ borderBottom: "1px solid black" }}
        >
          Product
        </Text>
        <Text
          borderBottom={"1px solid transparent"}
          _hover={{ borderBottom: "1px solid black" }}
        >
          About us
        </Text>
      </Stack>
    </Stack>
  );
};

export default Navbar;
