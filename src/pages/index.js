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
        description: (
            <>
                        <div>
                            <img src="img/installer-guide.svg" />
                            <h2>Installation Guide</h2>
                            <p>
                                Eos laborum aut sequi cupiditate et rerum delectus asperiores. Est sed incidunt doloremque. Voluptas similique expedita. Eligendi aut eveniet quidem eius temporibus recusandae.
                                <br></br> 
                                <button><a>Open Guide</a></button>
                            </p>
                        </div>
            </>
        ),
    },
    {
        link: 'docs/admin-guide/getting-started/welcome',
        description: (
            <>
                    <div>
                            <img src="img/admin-guide.svg" />
                            <h2>Adminstration Guide</h2>
                            <p>
                            Eos laborum aut sequi cupiditate et rerum delectus asperiores. Est sed incidunt doloremque. Voluptas similique expedita. Eligendi aut eveniet quidem eius temporibus recusandae.
                                <br></br>
                                <button><a>Open Guide</a></button>
                            </p>
                    </div>
            </>
        ),
    },
    {
        link: 'docs/user-guide/onboard',
        description: (
            <>
                        <div>
                        <img src="img/user-guide.svg" />
                            <h2>User Guide</h2>
                            <p>
                            Eos laborum aut sequi cupiditate et rerum delectus asperiores. Est sed incidunt doloremque. Voluptas similique expedita. Eligendi aut eveniet quidem eius temporibus recusandae.
                                <br></br>
                                <button><a>Open Guide</a></button>
                            </p>
                        </div>
            </>

        ),
    },                                        
];

function Feature({ imageUrl, title, description, link }) {
    const imgUrl = useBaseUrl(imageUrl);
    const linkUrl = useBaseUrl(link);

    return (
        <Link className={classnames('col col--4', styles.feature, styles.footer)} to={linkUrl} >
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