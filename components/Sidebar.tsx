"use client"

import React from "react"
import { motion } from "framer-motion"
import { sidebarIcons } from "../constants"

const Sidebar: React.FC = () => {
  const [active, setActive] = React.useState("gauge")

  const iconVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
  }

  return (
    <aside className="w-16 flex flex-col items-center" style={{ height: "calc(100vh - 120px)", maxHeight: "600px" }}>
      <div className="flex flex-col items-center py-4 w-full" style={{ backgroundColor: "#FF5722" }}>
        <div className="flex flex-col items-center space-y-4 w-full text-white">
          <div className="p-2">
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
              <div className="h-4 w-4 bg-orange-500 rounded-full"></div>
            </div>
          </div>

          <nav className="flex flex-col items-center space-y-3 w-full px-2">
            {sidebarIcons.map((item, i) => (
              <motion.button
                key={item.id}
                custom={i}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                onClick={() => setActive(item.id)}
                className={`p-2.5 rounded-lg w-12 h-12 flex items-center justify-center transition-colors duration-200 ${
                  active === item.id ? "bg-white/20" : "hover:bg-white/10"
                }`}
              >
                <div className="h-5 w-5">{item.icon}</div>
              </motion.button>
            ))}

            <motion.button
              custom={sidebarIcons.length}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              className="p-2.5 rounded-lg w-12 h-12 flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
            >
              <div className="h-5 w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
            </motion.button>
          </nav>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
