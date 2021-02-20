import React from "react"
import { graphql } from 'gatsby'

import LeadText from "./types/leadText"
import RichText from "./types/richText"
import Button from "./types/button"

const components = {
    leadText: LeadText,
    richText: RichText,
    button: Button,
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
  fragment LeadTextFragment on Craft_bodyContent_leadText_BlockType {
    leadText
    typeHandle
  }
  
  fragment RichTextFragment on Craft_bodyContent_richText_BlockType {
    richText
    typeHandle
  }
  
  fragment ButtonFragment on Craft_bodyContent_button_BlockType {
    buttonText
    buttonLink
    buttonColour
    typeHandle
  }
`