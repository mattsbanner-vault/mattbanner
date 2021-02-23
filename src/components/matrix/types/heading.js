import React from "react"

function Heading({ block }) {
    const style = block.headingStyle;
    const link = block.headingLink;
    const text = block.headingText;
    const hasLink = link.length;

    if (style === 'h2') {
        if (hasLink) {
            return <h2><a href={link}>{ text }</a></h2>;
        }

        return <h2>{ text }</h2>;
    }

    if (style === 'h3') {
        if (hasLink) {
            return <h3><a href={link}>{ text }</a></h3>;
        }

        return <h3>{ text }</h3>;
    }

    if (style === 'h4') {
        if (hasLink) {
            return <h4><a href={link}>{ text }</a></h4>;
        }

        return <h4>{ text }</h4>;
    }
}

export default Heading
