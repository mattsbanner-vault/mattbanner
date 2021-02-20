import React from "react"

const RichText = ({ block }) => (
    <div
        className="prose"
        dangerouslySetInnerHTML={{
            __html: block.richText,
        }}
    />
)

export default RichText
