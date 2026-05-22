import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from './pages/About'
import Contact from './pages/Contact'
import ProjectsPages from "./pages/ProjectsPages"
import Skills from "./pages/Skills"
import PlaceholderPage from "./pages/PlaceholderPage"
import ThemeProvider from './Context/ThemeProvider'

import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'

function NotFound() {
  return (
    <PlaceholderPage
      title="Page not found"
      desc="존재하지 않는 페이지 입니다."
    />
  )
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPages />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
