import React from "react"
import { Link } from "gatsby"

function craftBaseUrl() {
    let parts = process.env.CRAFTGQL_URL.split("/");
    return parts[0] + '//' + parts[2];
}

function path(link) {
    return link.replace(craftBaseUrl(), '');
}

function linkIsInternal(link) {
    return link.includes(craftBaseUrl());
}

function link(block) {
    if(linkIsInternal(block.buttonLink)) {
        return (
            <Link
                id={ block.buttonId ? block.buttonId : '' }
                to={ path(block.buttonLink) }
                className={`px-4 py-2 rounded shadow bg-primary text-primary-copy hover:bg-primary-lightest transition duration-300 ease-in-out`}
            >
                { block.buttonText }
            </Link>
        );
    } else {
        return (
            <a
                id={ block.buttonId ? block.buttonId : '' }
                href={ block.buttonLink }
                className={`px-4 py-2 rounded shadow bg-primary text-primary-copy hover:bg-primary-lightest transition duration-300 ease-in-out`}
            >
                { block.buttonText }
            </a>
        );
    }
}

const Button = ({ block }) => (
    <div className={`mt-6`}>
        {link(block)}
    </div>
)

export default Button
