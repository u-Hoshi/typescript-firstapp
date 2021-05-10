import { extendTheme } from "@chakra-ui/react";

// グローバルなcssを記述する
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bakcgroundColor: "gray.100",
        color: "gray.800"
      }
    }
  }
});

export default theme;
