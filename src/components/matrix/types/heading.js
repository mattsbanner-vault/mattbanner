import React from "react"

const Heading = ({ block }) => (
    <div>
        { block.headingStyle === 'h2' ? <h2>{ block.headingText }</h2> : null }
        { block.headingStyle === 'h3' ? <h3>{ block.headingText }</h3> : null }
        { block.headingStyle === 'h4' ? <h4>{ block.headingText }</h4> : null }
    </div>
)

export default Heading
