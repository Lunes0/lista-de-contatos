export type ThemeMode = 'light' | 'dark'

export function getInitialTheme(): ThemeMode {
  const stored = localStorage.getItem('theme') as ThemeMode | null
  if (stored) return stored

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}
