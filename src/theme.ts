export type ThemeMode = 'light' | 'dark'

export function getInitialTheme(): ThemeMode {
  return (localStorage.getItem('theme') as ThemeMode) || 'light'
}
