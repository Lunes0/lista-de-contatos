import { useState } from 'react'
import { getInitialTheme, type ThemeMode } from './theme'
import GlobalStyle from './Global'

function App() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme())

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <>
      <GlobalStyle />
    </>
  )
}

export default App
