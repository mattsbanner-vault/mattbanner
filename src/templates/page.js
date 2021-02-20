import React from "react"

import { graphql } from 'gatsby'
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
        ...RichTextFragment
      }
    }
  }
`

const Page = ({ data: { entry } }) => {
    return (
        <Layout>
            <SEO title={entry.title} />
            <h1>{entry.title}</h1>

            <Matrix blocks={entry.bodyContent} />
        </Layout>
    )
}

export default Page
