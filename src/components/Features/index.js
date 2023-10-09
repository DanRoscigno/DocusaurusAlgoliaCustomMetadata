import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const FeatureList = [
  {
    title: 'Introduction',
    url: '../category/introduction-to-starrocks',
    description: (
      <>
        OLAP, features, architecture
      </>
    ),
  },
  {
    title: 'Quick Start',
    url: '../category/quick-start',
    description: (
      <>
        Get up and running quickly.
      </>
    ),
  },
  {
    title: 'Data Loading',
    url: '../loading/Loading_intro',
    description: (
      <>
        Clean, transform, and load
      </>
    ),
  },
  {
    title: 'Table Design',
    url: '../table_design/StarRocks_table_design',
    description: (
      <>
        Tables, indexing, acceleration
      </>
    ),
  },
  {
    title: 'Data Lakes',
    url: '../category/query-data-lakes',
    description: (
      <>
        Iceberg, Hive, Delta Lake, …
      </>
    ),
  },
  {
    title: 'Work with semi-structured data',
    url: '../category/semi-structured',
    description: (
      <>
        JSON, map, struct, array
      </>
    ),
  },
  {
    title: 'Integrations',
    url: '../category/integrations',
    description: (
      <>
        BI tools, IDEs, Cloud authentication, …
      </>
    ),
  },
  {
    title: 'Administration',
    url: '../category/administration',
    description: (
      <>
        Scale, backups, roles and privileges, …
      </>
    ),
  },
  {
    title: 'Reference',
    url: '../category/reference',
    description: (
      <>
        SQL, functions, error codes, …
      </>
    ),
  },
  {
    title: 'FAQs',
    url: '../category/faq',
    description: (
      <>
        Frequently asked questions.
      </>
    ),
  },
  {
    title: 'Benchmarks',
    url: '../category/benchmarks',
    description: (
      <>
        DB performance comparison benchmarks.
      </>
    ),
  },
];

function Feature({url, title, description}) {
  return (
    <div className={clsx('col col--6')}>
     <Link href={url} target="_self" className="card padding--lg cardContainer_fWXF">
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
     </Link>
    </div>
  );
}


export default function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
