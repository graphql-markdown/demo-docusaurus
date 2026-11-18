import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

const highlights = [
  { headline: "OPERATIONS", title: "Queries, mutations, subscriptions" },
  { headline: "MODELS", title: "Objects, inputs, unions, enums" },
  { headline: "EXAMPLES", title: "Schema-defined GraphQL samples" },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="GraphQL-Markdown Docusaurus Demo"
      description="A generated GraphQL API reference for the workspace demo schema."
    >
      <main>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.headline}>GRAPHQL SCHEMA REFERENCE</p>
            <h1 className={styles.title}>Your API, mapped with intent.</h1>
            <p className={styles.description}>
              Explore a generated workspace schema with operations, input types,
              relationships, and ready-to-run examples in one focused reference.
            </p>
            <div className={styles.links}>
              <Link
                className="button button--primary button--lg"
                to="/intro"
              >
                Explore the API
              </Link>
              <Link
                className="button button--outline button--secondary button--lg"
                to="/operations/queries/projects"
              >
                View an example
              </Link>
            </div>
          </div>
          <div className={styles.preview}>
            <div className={styles.previewBar}>
              <span className={styles.previewFile}>workspace.graphql</span>
              <span className={styles.previewChip}>SCHEMA</span>
            </div>
            <pre className={styles.previewCode}>
              <code>
                <span className={styles.keyword}>type</span>{" "}
                <span className={styles.type}>Project</span>{" "}
                <span className={styles.keyword}>implements</span>{" "}
                <span className={styles.type}>Node</span> {"{"}
                {"\n  "}
                <span className={styles.field}>id</span>:{" "}
                <span className={styles.type}>ID!</span>
                {"\n  "}
                <span className={styles.field}>name</span>:{" "}
                <span className={styles.type}>String!</span>
                {"\n  "}
                <span className={styles.field}>status</span>:{" "}
                <span className={styles.type}>ProjectStatus!</span>
                {"\n  "}
                <span className={styles.field}>owner</span>:{" "}
                <span className={styles.type}>User!</span>
                {"\n}\n\n"}
                <span className={styles.keyword}>type</span>{" "}
                <span className={styles.type}>Query</span> {"{"}
                {"\n  "}
                <span className={styles.field}>projects</span>(status:{" "}
                <span className={styles.type}>ProjectStatus</span>):
                {"\n    "}
                <span className={styles.type}>ProjectConnection!</span>
                {"\n}"}
              </code>
            </pre>
          </div>
        </section>
        <section className={styles.highlights}>
          <div className={styles.highlightsGrid}>
            {highlights.map((h) => (
              <div key={h.headline}>
                <p className={styles.highlightHeadline}>{h.headline}</p>
                <p className={styles.highlightTitle}>{h.title}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
