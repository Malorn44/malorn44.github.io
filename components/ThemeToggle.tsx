'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const effective = resolvedTheme ?? theme
  const hoverClass = effective === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'

  return (
    <button
      onClick={() => setTheme(effective === 'dark' ? 'light' : 'dark')}
      className={`p-2 rounded-lg ${hoverClass} transition`}
      aria-label="Toggle theme"
    >
      {effective === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
}