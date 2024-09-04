import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import WaveBottomShapeDivider from "@site/src/components/HomepageFeatures/WaveBottomShapeDivider";
import WaveTopShapeDivider from "@site/src/components/HomepageFeatures/WaveTopShapedivider";
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx("hero--primary", styles.heroBanner)}>
    <div className="container">
      <h1 className="hero__title">AfyaMsafiri</h1>
      <p className="hero__subtitle">{siteConfig.tagline}</p>
      <div className={styles.buttons}>
       
      </div>
    </div>
  </header>
);
}


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      <WaveTopShapeDivider />
        <HomepageFeatures />
        <WaveBottomShapeDivider />
      </main>
    </Layout>
  );
}
