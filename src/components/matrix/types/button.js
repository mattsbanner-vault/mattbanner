import React from "react"
import { Link } from "gatsby"

/**
 * Full domains are returned from Craft.
 * Everything after the third / is the path
 * If no path is present, return a single slash as this is a link to the homepage.
 *
 * @param {*} link 
 * @returns 
 */
function path(link) {
    let path = link.split("/")[3];
    return path === '' ? '/' : path;
}

const Button = ({ block }) => (
    <div className={`mt-6`}>
        <Link
            id={ block.buttonId ? block.buttonId : '' }
            to={ path(block.buttonLink) }
            className={`px-4 py-2 rounded shadow bg-primary-lightest text-primary-copy hover:bg-primary transition duration-300 ease-in-out`}
        >{ block.buttonText }</Link>
    </div>
)

export default Button
