import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <NotFound /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
