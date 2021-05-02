import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

export default function Footer() {
    return (
        <StaticQuery
            query={graphql`
                query {
                    secondaryNavigation: craftNavigationGlobalSet {
                        items: secondaryNavigationItems {
                            id
                            uri
                            title
                        }
                    }
                    settings: craftSettingsGlobalSet {
                        siteName
                        footerText
                    }
                }
            `}

            render={data => (
                <footer className={`max-w-4xl mx-auto w-full border-t text-secondary text-sm text-center sm:text-left`}>
                    <div className="flex flex-col sm:flex-row justify-between mx-4 py-6">
                        <div0>
                            © {new Date().getFullYear()} {data.settings.siteName}. {data.settings.footerText}
                        </div0>
                        <div className={`pt-6 mx-8 sm:mx-0 sm:pt-0 grid gap-4 grid-cols-` + data.secondaryNavigation.items.length}>
                            {data.secondaryNavigation.items.map((item) => (
                                <Link
                                    key={item.id}
                                    to={`/` + item.uri}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </footer>
            )}
        />
    )
}

