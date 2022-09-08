import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("../../static/img/hollow-stack.svg").default,
    description: (
      <>Get started quickly with developer focused tools and documentation.</>
    ),
  },
  {
    title: "Build Alternative Investment Apps",
    Svg: require("../../static/img/triple-stack.svg").default,
    description: (
      <>
        We take care of <b>Regulatory Filings</b> and <b>Taxes</b> so you can
        focus on building amazing alternitive investment applications.
      </>
    ),
  },
  {
    title: "Power For the Next Generation",
    Svg: require("../../static/img/cluster-above.svg").default,
    description: (
      <>
        With <b>Over 1 Billion Assets Under Management</b> the Allocations API
        has a proven track record that allows your application to scale.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
