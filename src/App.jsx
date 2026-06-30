import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Properties from "./pages/Properties/Properties";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import Favorites from "./pages/Favorites/Favorites";
import Layout from "./components/Layout/Layout";
import { PropertiesProvider } from "./contexts/PropertiesContext";

function App() {
  return (
  <PropertiesProvider>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/properties" element={<Properties />} />
    <Route path="/properties/:id" element={<PropertyDetails />} />
    <Route path="/favorites" element={<Favorites />} />
    </Route>
   </Routes>
   </BrowserRouter>
   </PropertiesProvider>
  )
}

export default App
