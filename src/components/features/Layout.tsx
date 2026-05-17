import { Outlet } from 'react-router-dom'
import Nav from '../ui/Nav'
import Footer from '../ui/Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
