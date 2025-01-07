import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Projects from "./pages/Projects/Projects";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <NotFound /> },
  { path: "/projects", element: <Projects />, errorElement: <NotFound /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
