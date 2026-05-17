import { NavLink } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-semibold text-lg text-gray-900 dark:text-white tracking-tight">
          Harris Langley
        </NavLink>
        <div className="flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-purple-600 dark:text-purple-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-lg"
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>
      </div>
    </nav>
  )
}
