import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import Matrix from "../components/matrix"

export const query = graphql`
  query PageQuery($slug: String!) {
    entry: craftPagesPageEntry(slug: { eq: $slug }) {
      id
      remoteId
      title
      slug
      postDate
      bodyContent {
        ...LeadTextFragment
        ...RichTextFragment
        ...ButtonFragment
        ...HeadingFragment
        ...ChildIndexFragment
      }
    }
  }
`

const Page = ({ location, data: { entry } }) => {
    return (
        <Layout location={ location } entry={ entry }>
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