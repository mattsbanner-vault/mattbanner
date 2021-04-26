import React from "react"

const Footer = () => {
  return (
    <footer className={`max-w-4xl mx-auto w-full text-center sm:text-left`}>
      <div className={`mx-4 py-6 border-t text-secondary text-sm`}>
        © {new Date().getFullYear()} Matt Banner. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
