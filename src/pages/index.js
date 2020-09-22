import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: <>Installation Guide</>,
        link: "/docs/installation-guide/welcome",
        imageUrl: 'https://cdn.valq.com/wp-content/uploads/valq-key-features-visualization.png',
        description: (
            <>
                Installation Guide
            </>
        ),
    },
    {
        title: <>Administration Guide</>,
        link: "/docs/admin-guide/getting-started/welcome",
        imageUrl: 'https://cdn.valq.com/wp-content/uploads/valq-key-features-modeling.png',
        description: (
            <>
            Administration Guide
            </>
        ),
    },
    {
        title: <>User Guide</>,
        link: "/docs/admin-guide/getting-started/welcome",
        imageUrl: 'https://cdn.valq.com/wp-content/uploads/valq-key-features-planning.png',
        description: (
            <>
                User Guide
            </>
        ),
    },
    
];

function Feature({ imageUrl, title, description, link }) {
    const imgUrl = useBaseUrl(imageUrl);
    const linkUrl = useBaseUrl(link);

    return (
        <Link className={classnames('col col--4', styles.feature)} to={linkUrl} >
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title} />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </Link>

    );
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={`${siteConfig.title} - BI Hub Documentation`}
            description="Your BI Search Engine">
            <header className={classnames('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                                        
                </div>
            </header>
            <main>
                {features && features.length && (
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