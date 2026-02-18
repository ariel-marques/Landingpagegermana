import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import ComoFunciona from "./pages/ComoFunciona";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "sobre", Component: Sobre },
      { path: "servicos", Component: Servicos },
      { path: "como-funciona", Component: ComoFunciona },
      { path: "faq", Component: FAQ },
      { path: "contato", Component: Contato },
    ],
  },
]);
