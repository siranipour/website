import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import HomePage from "./pages/HomePage/HomePage";
import Projects from "./pages/Projects/Projects";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <NotFound /> },
  { path: "/projects", element: <Projects />, errorElement: <NotFound /> },
]);

const App = () => {
  return (
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  );
};

export default App;
