import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        link: '/docs/installation-guide/welcome',
        title: 'Installation Guide',
        image: 'img/installer-guide.svg',
        description: 'Installation guide with pre-requisities, installation, and configuration steps for downloading the BI Hub components - BI Hub Server, Web, and Agents.',
    },
    {
        link: '/docs/admin-guide/getting-started/welcome',
        title: 'Administration Guide',
        image: 'img/admin-guide.svg',
        description: 'Eos laborum aut sequi cupiditate et rerum delectus asperiores. Est sed incidunt doloremque. Voluptas similique expedita. Eligendi aut eveniet quidem eius temporibus recusandae.',
    },
    {
        link: '/docs/user-guide/onboard',
        title: 'User Guide',
        image: 'img/user-guide.svg',
        description: 'Eos laborum aut sequi cupiditate et rerum delectus asperiores. Est sed incidunt doloremque. Voluptas similique expedita. Eligendi aut eveniet quidem eius temporibus recusandae.',
    }
];

function Feature({ image, title, description, link }) {
    const imgUrl = useBaseUrl(image);
    const linkUrl = useBaseUrl(link);

    return (
        <Link className={classnames("col col--4")} to={linkUrl} >
            <div className={styles.features}>
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
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
                    <section className={classnames(styles.mainContainer)}>
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