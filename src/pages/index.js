import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import Matrix from "../components/matrix";

export const query = graphql`
  query {
    entry: craftHomeHomeEntry {
      id
      remoteId
      title
      postDate
      slug
      bodyContent {
        ...LeadTextFragment
        ...RichTextFragment
        ...ButtonFragment
        ...HeadingFragment
      }
    }
  }
`;

const IndexPage = ({ location, data: { entry } }) => (
  <Layout location={location} entry={entry}>

    <main className={`max-w-4xl mx-auto w-full flex-grow flex items-center`}>
        <div className={`mx-4 text-center`}>
            <h1 className="text-4xl font-bold">Matt Banner</h1>
            <Matrix blocks={entry.bodyContent} />
        </div>
    </main>
</Layout>
);

export default IndexPage
