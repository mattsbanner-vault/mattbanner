import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <Layout>
        <SEO title="404 - Not Found" />

        <main className={`max-w-3xl mx-auto w-full flex-grow flex items-center tracking-tight`}>
            <div className={`mx-4`}>
                <h1 className={`text-4xl font-bold mb-2`}>404 - Not Found</h1>
                <p className={`text-lg`}>The page you requested could not be found.</p>
                <Link to={`/`} className={`text-gray-500 hover:text-gray-800 transition duration-300 ease-in-out`}>Home</Link>
            </div>
        </main>
    </Layout>
)

export default NotFoundPage
