'use client'

export function ThemeScript() {
  const script = `
    (function() {
      function getThemePreference() {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('pinefactory-theme')) {
          return localStorage.getItem('pinefactory-theme')
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
      const theme = getThemePreference()
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    })()
  `

  return <script dangerouslySetInnerHTML={{ __html: script }} />
}