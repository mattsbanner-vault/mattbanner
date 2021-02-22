import React from "react"

const LeadText = ({ block }) => (
    <div
        className={`text-lg sm:text-xl mb-1 text-gray-600`}
        dangerouslySetInnerHTML={{
            __html: block.leadText,
        }}
    />
)

export default LeadText
