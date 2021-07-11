import React from "react"
import {graphql, Link, StaticQuery} from "gatsby";

export default function ChildIndex({ block }) {
    return (
        <StaticQuery
            query={graphql`
                query {
                    entries: craftPagesPageEntry(remoteId: { eq: "${block.ownerId}" }) {
                        id
                        children: remoteChildren {
                            title
                            uri
                        }
                    }
                }
            `}

            render={data => (
                <div>
                    <p>{block.ownerId}</p>
                    <ul>
                        {data.entries.children.map((entry) => (
                            <li>
                                <Link
                                    key={entry.id}
                                    to={`/` + entry.uri}
                                >
                                    {entry.title}
                                </Link>
                            </li>
                        ))}
                    </ul>


                </div>

            )}
        />
    )
}
