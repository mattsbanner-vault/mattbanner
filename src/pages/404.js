import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import Matrix from "../components/matrix";

export const query = graphql`
  query {
    entry: craftNotFoundNotFoundEntry {
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

const NotFound = ({ data: { entry } }) => (
  <Layout entry={entry}>
    <main className={`max-w-4xl mx-auto w-full flex-grow flex items-center`}>
        <div className={`mx-4 text-center`}>
            <Matrix blocks={entry.bodyContent} />
        </div>
    </main>
</Layout>
);

export default NotFound
