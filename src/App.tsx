import AppLayout from './components/Layout/AppLayout.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home.tsx'
import { About } from './Pages/About.tsx'
import { Contact } from './Pages/Contact.tsx'
import { Team } from './Pages/Team.tsx'
import Services from './Pages/Services.tsx'

function App() {

  return (
   <BrowserRouter>
   <Routes>
 
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/team' element={<Team />} />
      <Route path='/services' element={<Services />} />
   </Routes>
</BrowserRouter>
  )
}

export default App
