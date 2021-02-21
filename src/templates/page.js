import React from "react"

import {graphql, Link} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Matrix from "../components/matrix"

export const query = graphql`
  query PageQuery($slug: String!) {
    entry: craftPagesPagesEntry(slug: { eq: $slug }) {
      id
      remoteId
      title
      postDate
      bodyContent {
        ...LeadTextFragment
        ...RichTextFragment
        ...ButtonFragment
        ...HeadingFragment
      }
    }
  }
`

const Page = ({ data: { entry } }) => {
    console.log(entry);
    return (
        <Layout>
            <SEO title={entry.title} description={entry.summary} />

            <header className={`max-w-3xl mx-auto w-full`}>
                <p className={`text-3xl font-bold my-2 sm:mt-4 sm:mb-6`}>
                    <Link to="/">
                        Matt Banner
                    </Link>
                </p>
            </header>

            <main className={`max-w-3xl mx-auto w-full flex-grow`}>
                <h1 className={`text-xl mb-6`}>{entry.title}</h1>

                <div className={`prose`}>
                    <Matrix blocks={entry.bodyContent} />
                </div>
            </main>
        </Layout>
    )
}

export default Page