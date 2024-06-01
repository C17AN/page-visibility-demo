import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Ad from "./pages/Ad.tsx";
import Home1 from "./pages/Home1.tsx";
import Home2 from "./pages/Home2.tsx";
import "./styles/global.css";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home1 />,
  },
  {
    path: "/home1",
    element: <Home1 />,
  },
  {
    path: "/home2",
    element: <Home2 />,
  },
  {
    path: "/ad",
    element: <Ad />,
  },
]);

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <RouterProvider router={router} />
);
