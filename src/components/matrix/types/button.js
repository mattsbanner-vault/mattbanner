import React from "react"

const Button = ({ block }) => (
    <div className={`mt-6`}>
        <a
            id={block.buttonId}
            href={ block.buttonLink }
            className={`px-4 py-2 rounded shadow text-white transition duration-300 ease-in-out bg-primary hover:bg-primary-dark`}
        >{ block.buttonText }</a>
    </div>
)

export default Button
