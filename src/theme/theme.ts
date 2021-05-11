import { extendTheme } from "@chakra-ui/react";

// グローバルなcssを記述する
export const Theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.200",
        color: "gray.800"
      }
    }
  }
});
