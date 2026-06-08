import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Offer from "./pages/Offer"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="o-nas" element={<About />} />
        <Route path="oferta" element={<Offer />} />
        <Route path="galeria" element={<Gallery />} />
        <Route path="kontakt" element={<Contact />} />
      </Route>
    </Routes>
  )
}
