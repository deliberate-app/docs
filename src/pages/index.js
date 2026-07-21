import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Trees of Arguments</>,
    imageUrl: 'img/feature-tree.svg',
    description: (
      <>
        We don't want to live in a world where we can only say yes or no.
        A debate is a tree: a thesis at the root, pro and con arguments beneath it,
        counter-arguments beneath those. The structure invites multiple perspectives
        and puts every claim next to its strongest objections.
      </>
    ),
  },
  {
    title: <>Rating Markets</>,
    imageUrl: 'img/feature-market.svg',
    description: (
      <>
        Every argument carries a rating market. Participants stake vote tokens on
        arguments being underrated or overrated and profit when the rating corrects
        their way — being right early is what pays, so ratings converge on the
        debate's honest reading.
      </>
    ),
  },
  {
    title: <>Deliberative Decision-Making</>,
    imageUrl: 'img/feature-tally.svg',
    description: (
      <>
        When rating ends, anyone can trigger the tally: ratings fold from the leaves
        to the root, and the thesis is confirmed or objected. Everything runs in a
        smart contract on Ethereum — transparent, verifiable, and open for other
        contracts to consume.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="deliberate structures debates as argument trees on Ethereum: rating markets weigh every argument, and the tally confirms or objects the thesis.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title" style={{fontWeight: 500, fontVariationSettings: "'opsz' 75"}}>
            delibe<span style={{fontWeight: 750, fontVariationSettings: "'opsz' 25"}}>rate</span>
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>&nbsp;&nbsp;
            <Link
              className={clsx(
                        'button button--outline button--secondary button--lg',
                        styles.getStarted,
                    )}
                    to={'https://github.com/ArborVote/whitepaper/releases/latest/download/whitepaper.pdf'}>
                    Whitepaper
                </Link>
            </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
