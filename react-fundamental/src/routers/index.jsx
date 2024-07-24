import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";

import Home from "../pages/index";
import About from "../pages/about";
import Blog from "../pages/blogs";
import Post from "../pages/blogs/_id";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <Post />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
