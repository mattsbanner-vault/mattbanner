import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, Link} from "gatsby"
import Matrix from "../components/matrix";

export const query = graphql`
  query {
    entry: craftHomeHomeEntry {
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
`;

const IndexPage = ({ data: { entry } }) => (
  <Layout>
    <SEO title="Home" />

    <main className={`max-w-3xl mx-auto w-full flex-grow flex items-center tracking-tight`}>
        <div className={`mx-4`}>
            <h1 className={`text-4xl font-bold mb-2`}>
                <Link to="/">
                    Matt Banner
                </Link>
            </h1>

            <Matrix blocks={entry.bodyContent} />
        </div>
    </main>
  </Layout>
);

export default IndexPage
