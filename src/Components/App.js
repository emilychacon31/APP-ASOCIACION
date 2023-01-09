import { Routes, Route } from "react-router-dom"
import Navbar from "./Routes/Navbar/Navbar"

const App = () => {
  return (
  <Routes> 
    <Route path="/" element={<Navbar/>}>
    <Route index element={<h1> Aqui iria el componente Inicio</h1>}/>
    <Route path="noticias" element={<h2>Aqui iria el componente Noticias </h2>}/> 
    <Route path="n" element={<h2>Aqui iria el componente N </h2>}/> 
    <Route path="eventos" element={<h2>Aqui iria el componente Eventos </h2>}/> 
    <Route path="nosotros" element={<h2>Aqui iria el componente Nosotros </h2>}/> 
    <Route path="contacto" element={<h2>Aqui iria el componente Contacto </h2>}/>

   </Route>
  </Routes>
  )
}

export default App