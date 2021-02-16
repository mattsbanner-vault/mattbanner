import React from "react"

const Footer = () => {
  return (
    <footer className={`max-w-3xl mx-auto w-full text-center sm:text-left`}>
      <div className={`pt-6 pb-2 border-t text-secondary text-sm`}>
        © {new Date().getFullYear()} Matt Banner. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
