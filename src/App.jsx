import Header from "./container/header/Header";
import Sale from "./container/section/sale/Sale";
import { Stack } from "@chakra-ui/react";
function App() {
  return (
    <Stack maxW="1200px" margin="auto">
      <Header />
      <Sale />
    </Stack>
  );
}

export default App;
