import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    color: string
    shadow: string
    buttonColor: string
    buttonBackgorund: string
    ButtonColorHover: string
    ButtonBackground: string
  }
}

export const lightTheme = {
  background: '#f7f7f7',
  color: '#222',
  shadow: 'rgba(0, 0, 0, 0.15)',
  buttonColor: '#222',
  buttonBackgorund: '#f5f5f5ff',
  ButtonColorHover: '#fff',
  ButtonBackground: '#2b2b2bff'
}

export const darkTheme = {
  background: '#242424',
  color: '#fff',
  shadow: 'rgba(0, 0, 0, 0.5)',
  buttonColor: '#fff',
  buttonBackgorund: '#2b2b2bff',
  ButtonColorHover: '#222',
  ButtonBackground: '#f5f5f5ff'
}
