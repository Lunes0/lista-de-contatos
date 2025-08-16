import { Route, Routes, useNavigate } from 'react-router-dom'
import GlobalStyle, { Button, Container } from './Global'
import ContactListPage from './pages/ContactListPage'
import AddContactPage from './pages/AddContactPage'
import EditContactPage from './pages/EditContactPage'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './themes/themeConfig'
import { useEffect, useState } from 'react'
import { getInitialTheme, type ThemeMode } from './themes/theme'
import { Moon, Plus, Sun } from 'lucide-react'

function App() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme())
  const navigate = useNavigate()

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <header>
          <nav>
            <h1>Contatos</h1>
            <Button onClick={() => navigate('/add')}>
              <Plus />
            </Button>
            <Button onClick={toggleTheme} style={{ marginLeft: 16 }}>
              {theme === 'light' ? <Sun /> : <Moon />}
            </Button>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<ContactListPage />} />
          <Route path="/add" element={<AddContactPage />} />
          <Route path="/edit/:id" element={<EditContactPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  )
}

export default App
