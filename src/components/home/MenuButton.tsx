'use client'

import { useSidebarStore } from "@/stores/useSidebarStore"

const MenuButton = () => {
  const { open, isOpen, close } = useSidebarStore()
  const toggle = () => (isOpen ? close() : open())

  return (
    <div className="relative group cursor-pointer">
      <button
        onClick={toggle}
        className="lg:hidden relative flex flex-col justify-center items-center w-9 h-9"
        aria-label="Toggle menu"
      >
        {/* Top bar */}
        <span
          className={`block h-0.5 w-6 bg-current rounded-full absolute transition-transform duration-300 ease-in-out ${
            isOpen ? 'rotate-45' : '-translate-y-[4px]'
          }`}
        />
        {/* Bottom bar */}
        <span
          className={`block h-0.5 w-6 bg-current rounded-full absolute transition-transform duration-300 ease-in-out ${
            isOpen ? '-rotate-45' : 'translate-y-[4px]'
          }`}
        />
      </button>
      
      {/* Tooltip */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs bg-gray-800 text-white px-2 py-1 rounded whitespace-nowrap pointer-events-none">
        {isOpen ? 'Close menu' : 'Open menu'}
      </span>
    </div>
  )
}

export default MenuButton