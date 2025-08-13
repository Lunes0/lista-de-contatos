import { Link, Route, Routes } from 'react-router-dom'
import GlobalStyle, { Container } from './Global'
import ContactListPage from './pages/ContactListPage'
import AddContactPage from './pages/AddContactPage'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <header>
          <nav>
            <Link to="/">Ver Contatos</Link> |{' '}
            <Link to="/add">Adicionar Contato</Link>
            <h1>Contatos</h1>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<ContactListPage />} />
          <Route path="/add" element={<AddContactPage />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
