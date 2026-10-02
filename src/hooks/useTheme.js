import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'tis-theme'

// Read what the inline script in index.html already applied,
// so React and the DOM never disagree on first render.
function getInitialTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // storage can be blocked (private mode); the theme still works for this session
    }
  }, [theme])

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    []
  )

  return { theme, toggleTheme }
}