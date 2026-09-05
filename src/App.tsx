import { useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import AchievementsPage from "@/pages/achievements"
import CertificationsPage from "@/pages/certifications"
import Home from "@/pages/home"
import ProjectsPage from "@/pages/projects"
import { ThemeProvider } from "@/theme"
import { NavLayoutProvider } from "@/nav-layout"

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "")
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      })
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <ThemeProvider>
      <NavLayoutProvider>
        <BrowserRouter>
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
          </Routes>
        </BrowserRouter>
      </NavLayoutProvider>
    </ThemeProvider>
  )
}
