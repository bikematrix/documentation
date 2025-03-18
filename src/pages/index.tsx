import { useEffect, type ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { HomepageHeader } from "../components/HomepageHeader";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Layout
        title={`${siteConfig.title}`}
        description="Bike Matrix is a compatibility solution for the entire industry, removing confusion for all."
      >
        <HomepageHeader />
      </Layout>
    </>
  );
}
