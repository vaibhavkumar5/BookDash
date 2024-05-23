import React from 'react'
import logo from "../assets/nualogo.png"

const Navbar = () => {
  return (
    <>
        <nav className="fixed top-0 z-50 w-full bg-[#F3C6B7] border-b border-[#F3C6B7] ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <a href="/" className="flex ms-2 md:me-24">
                <img
                  src={logo}
                  className="h-9  me-3 rounded-lg"
                  alt="Nua Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#F18070]">
                  Nua Women
                </span>
              </a>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar