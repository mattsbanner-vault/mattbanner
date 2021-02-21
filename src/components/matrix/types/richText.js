import React from "react"

const RichText = ({ block }) => (
    <div
        dangerouslySetInnerHTML={{
            __html: block.richText,
        }}
    />
)

export default RichText
