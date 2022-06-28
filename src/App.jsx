import Header from "./container/header/Header";
import Sale from "./container/section/sale/Sale";
import Newcollection from "./container/section/newcollection/Newcollection";
import Shop from "./container/section/shop/Shop";
import { Stack } from "@chakra-ui/react";
function App() {
  return (
    <Stack maxW="1200px" margin="auto">
      <Header />
      <Sale />
      <Newcollection />
      <Shop />
    </Stack>
  );
}

export default App;
