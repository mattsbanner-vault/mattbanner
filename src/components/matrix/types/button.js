import React from "react"

const LeadText = ({ block }) => (
    <div className={`mt-6`}>
        <a
            href={ block.buttonLink }
            className={`px-4 py-2 rounded shadow text-white transition duration-300 ease-in-out ` + block.buttonColour}
        >{ block.buttonText }</a>
    </div>
)

export default LeadText
