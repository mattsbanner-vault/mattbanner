import React from "react"

const Footer = () => {
  return (
    <footer className={`max-w-4xl mx-auto w-full border-t text-secondary text-sm text-center sm:text-left`}>
      <div className="flex flex-col sm:flex-row justify-between mx-4 py-6">
        <div className={``}>
          © {new Date().getFullYear()} Matt Banner. All rights reserved.
        </div>
        <div className={`pt-6 mx-8 sm:mx-0 sm:pt-0 grid grid-cols-3 gap-4`}>
            <div>Link 1</div>
            <div>Link 2</div>
            <div>Link 3</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
