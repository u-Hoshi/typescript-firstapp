import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { Theme } from "./theme/theme";
import { Router } from "./router/Router";

export default function App() {
  return (
    <div className="App">
      {/* ChkraUIを全体で使えるように覆う。それにグローバルなcssを書いたテーマを渡す */}
      <ChakraProvider theme={Theme}>
        {/* react-routerを使えるようにする */}
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}
