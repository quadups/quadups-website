import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import { NavBar } from "./NavBar"
import { useState } from "react"
import Modal from "@/components/ui/Modal"
import { Contact } from "@/Pages/Contact"

const AppLayout = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <NavBar onContactClick={() => setModalOpen(true)} />
      <main>
        <Outlet />
      </main>
      <Footer />

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <Contact onClose={() => setModalOpen(false)} />
      </Modal>
    </div>
  )
}

export default AppLayout