import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <RecoilRoot>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
);
