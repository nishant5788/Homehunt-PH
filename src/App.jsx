import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Properties from "./pages/Properties/Properties";
import Favorites from "./pages/Favorites/Favorites";
import Layout from "./components/Layout/Layout";


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/properties" element={<Properties />} />
    <Route path="/favorites" element={<Favorites />} />
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
