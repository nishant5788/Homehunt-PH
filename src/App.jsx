import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Layout from "./components/Layout/Layout";
import { PropertiesProvider } from "./contexts/PropertiesContext";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Properties, { loader as propertiesLoader, PropertiesError } from "./pages/Properties/Properties";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import Favorites from "./pages/Favorites/Favorites";
import PostProperty from "./pages/PostProperty/PostProperty";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/properties",
        element: <Properties />,
        loader: propertiesLoader,
        errorElement: <PropertiesError />,
      },
      {
        path: "/properties/:id",
        element: <PropertyDetails />,
      },
      {
        path: "/post-property",
        element: <PostProperty />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

function App() {
  return (
    <PropertiesProvider>
      <RouterProvider router={router} />
    </PropertiesProvider>
  );
}

export default App;