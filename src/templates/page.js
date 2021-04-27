import React from "react"

import {graphql} from 'gatsby'
import Layout from "../components/layout"
import Header from "../components/header"
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
    return (
        <Layout>
            <SEO title={entry.title} description={entry.summary} />

            <Header/>

            <main className={`max-w-4xl mx-auto w-full flex-grow`}>
                <div className={`mx-4`}>
                    <h1 className={`text-xl mb-6`}>{entry.title}</h1>

                    <div className={`prose`}>
                        <Matrix blocks={entry.bodyContent} />
                    </div>
                </div>
             </main>
        </Layout>
    )
};

export default Page