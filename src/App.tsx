import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* ChkraUIを全体で使えるように覆う。それにグローバルなcssを書いたテーマを渡す */}
      <ChakraProvider theme={theme}>
        {/* react-routerを使えるようにする */}
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}
