import { Outlet, useLocation } from "react-router-dom"
import Footer from "./Footer"
import { NavBar } from "./NavBar"
import { useState, useEffect } from "react"
import Modal from "@/components/ui/Modal"
import { Contact } from "../ContactPage.tsx/ContactPage"

const AppLayout = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const isStartProject = location.pathname === '/startaproject';

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
