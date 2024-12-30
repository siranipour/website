import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <NotFound /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
