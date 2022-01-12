import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import Logo from "../images/nav-logo.png"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)

  const handleClick = () => setClick(!click)
  const DEV_MODE = process.env.NODE_ENV === "development"

  const changeNav = () => {
    if (window.scrollY >= 60) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      <nav className="flex fixed bg-white/[0.8] w-full h-16 z-10">
        <div className="mx-auto w-full">
          <div className="flex justify-between">
            <div className="flex ">
              <div className="items-center text-2xl">
                <a href="/#home" className="cursor-pointer">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="h-[45px] w-[150px] object-scale-down"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="md:flex items-center justify-between w-full px-[50px] py-[10px]">
          <div className="md:hidden items-center cursor-pointer text-[#f5862e] text-2xl">
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className="flex items-center no-underline text-center text-[#f5862e]">
            <li className="cursor-pointer ml-8 scroll-smooth">
              <a href="/#home">Home</a>
            </li>
            <li className="cursor-pointer ml-8 scroll-smooth">
              <a href="/#about">About</a>
            </li>
            <li className="cursor-pointer ml-8 scroll-smooth">
              <a href="/#service">Services</a>
            </li>
            <li className="cursor-pointer ml-8 scroll-smooth">
              <a href="/#client">Clients</a>
            </li>
            {DEV_MODE && (
              <>
                <li className="cursor-pointer ml-8 scroll-smooth">
                  <a href="/blog">Blogs</a>
                </li>
                <li className="cursor-pointer ml-8 scroll-smooth">
                  <a href="/courses">Courses</a>
                </li>
              </>
            )}
            <li className="cursor-pointer ml-8 scroll-smooth">
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div> */}
      </nav>
    </>
  )
}

export default Navbar
