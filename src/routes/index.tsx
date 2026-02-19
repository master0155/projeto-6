import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Perfil } from '../pages/Perfil'

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil/:restaurant" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  )
}
