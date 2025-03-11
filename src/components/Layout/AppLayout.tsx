import { Outlet, useLocation } from "react-router-dom"
import Footer from "./Footer"
import { NavBar } from "./NavBar"
import { useState } from "react"
import Modal from "@/components/ui/Modal"
import { Contact } from "../ContactPage.tsx/ContactPage"

const AppLayout = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const isStartProject = location.pathname === '/startaproject';

  return (
    <div className="min-h-screen bg-black">
      {!isStartProject && <NavBar onContactClick={() => setModalOpen(true)} />}
      <main>
        <Outlet />
      </main>
      {!isStartProject && <Footer />}

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <Contact onClose={() => setModalOpen(false)} />
      </Modal>
    </div>
  )
}

export default AppLayout