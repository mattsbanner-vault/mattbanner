import React from "react"

import RichText from "./types/richText"
import { graphql } from 'gatsby'

const components = {
    richText: RichText,
}

const Block = props => {
    const { block } = props
    const type = block.typeHandle
    const Component = components[type]

    if (Object.keys(components).includes(type)) {
        return <Component {...props} />
    } else {
        return null
    }
}

const Blocks = ({ blocks }) => {
    return (
        <div>
            {blocks.map((block, i) => (
                <Block key={i} block={block} />
            ))}
        </div>
    )
}

export default Blocks

export const query = graphql`
  fragment RichTextFragment on Craft_bodyContent_richText_BlockType {
    richText
    typeHandle
  }
`