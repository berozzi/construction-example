import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
  return (
    <div className="min-h-screen bg-primary-dark">
      <Header />
      <main className="mx-auto mt-1 max-w-5xl bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
