'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <nav className=" bg-opacity-80 backdrop-blur-md rounded-full shadow-lg px-6 py-3 border border-gray-200 border-opacity-25">
        <ul className="flex space-x-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-100'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute inset-0 opacity-50"></span>
                )}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform origin-center transition-all duration-300 ease-out scale-x-100 fading-underline"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}