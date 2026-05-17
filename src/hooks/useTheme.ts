import { useEffect } from 'react'
import { useThemeStore } from '../store'

export function useTheme() {
  const { theme, toggleTheme } = useThemeStore()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return { theme, toggleTheme }
}
