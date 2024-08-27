import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
 
  {
    title: 'Ministry of Health',
    Svg: require('@site/static/img/Logo.svg').default,
    description: (
      <>
      Afyamsafiri is a user guide for electronic screening of travelers and public health events at a point of entry. 
    </>
    ),
  },
  
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={styles.feature}>
      <Svg className={styles.featureSvg} role="img" />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
    {FeatureList.map((props, idx) => (
      <Feature key={idx} {...props} />
    ))}
  </section>
);
}
