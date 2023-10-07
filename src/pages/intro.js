import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/helloReact.js</code> and save to reload.
        </p>

                                    <article class="margin-top--lg">
                                        <section class="row list_eTzJ">
                                            <article class="col col--6 margin-bottom--lg">
                                                <a class="card padding--lg cardContainer_fWXF" href="/docs/introduction/what_is_starrocks">
                                                    <h2 class="text--truncate cardTitle_rnsV" title="What is StarRocks?">
                                                        What is StarRocks?
                                                    </h2>
                                                    <p
                                                        class="text--truncate cardDescription_PWke"
                                                        title="StarRocks is a next-generation, blazing-fast massively parallel processing (MPP) database designed to make real-time analytics easy for enterprises. It is built to power sub-second queries at scale."
                                                    >
                                                        StarRocks is a next-generation, blazing-fast massively parallel processing (MPP) database designed to make real-time analytics easy for enterprises. It is built to power sub-second
                                                        queries at scale.
                                                    </p>
                                                </a>
                                            </article>
                                            <article class="col col--6 margin-bottom--lg">
                                                <a class="card padding--lg cardContainer_fWXF" href="/docs/introduction/Architecture">
                                                    <h2 class="text--truncate cardTitle_rnsV" title="Architecture">
                                                        Architecture
                                                    </h2>
                                                    <p
                                                        class="text--truncate cardDescription_PWke"
                                                        title="StarRocks has a simple architecture. The entire system consists of only two types of components, frontends (FEs) and backends (BEs). StarRocks does not rely on any external components, simplifying deployment and maintenance. FEs and BEs can be horizontally scaled without service downtime. In addition, StarRocks has a replica mechanism for metadata and service data, which increases data reliability and efficiently prevents single points of failure (SPOFs)."
                                                    >
                                                        StarRocks has a simple architecture. The entire system consists of only two types of components, frontends (FEs) and backends (BEs). StarRocks does not rely on any external components,
                                                        simplifying deployment and maintenance. FEs and BEs can be horizontally scaled without service downtime. In addition, StarRocks has a replica mechanism for metadata and service data,
                                                        which increases data reliability and efficiently prevents single points of failure (SPOFs).
                                                    </p>
                                                </a>
                                            </article>
                                            <article class="col col--6 margin-bottom--lg">
                                                <a class="card padding--lg cardContainer_fWXF" href="/docs/introduction/Features">
                                                    <h2 class="text--truncate cardTitle_rnsV" title="Features">
                                                        Features
                                                    </h2>
                                                    <p class="text--truncate cardDescription_PWke" title="StarRocks offers a rich set of features to deliver a blazing-fast, real-time analytics experience on data at scale.">
                                                        StarRocks offers a rich set of features to deliver a blazing-fast, real-time analytics experience on data at scale.
                                                    </p>
                                                </a>
                                            </article>
                                        </section>
                                    </article>


      </div>
    </Layout>
  );
}
