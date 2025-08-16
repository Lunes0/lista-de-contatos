import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Nata Sans", sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.background};
    transition: background 0.2s, color 0.2s;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 200px auto;
  column-gap: 56px;

  header {
    margin-top: 40px;
  }

  h1 {
    font-size: 40px;
    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`

export const Button = styled.button`
  color: ${({ theme }) => theme.color};
  padding: 8px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.buttonBackgorund};
  border: none;
  box-shadow: 0 6px 12px ${({ theme }) => theme.shadow};
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.ButtonColorHover};
    background-color: ${({ theme }) => theme.ButtonBackground};
  }
`

export default GlobalStyle
