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
    title: "Focus on What Matters",
    Svg: require("../../static/img/cluster-above.svg").default,
    description: (
      <>
        The Allocations API let's you focus on your alternative investments
        application, while we take care of <b>Regulatory Filings</b> and{" "}
        <b>Taxes</b>.
      </>
    ),
  },
  {
    title: "Power For the Next Generation",
    Svg: require("../../static/img/triple-stack.svg").default,
    description: (
      <>
        With <b>Over 1 Billion Assets Under Management</b> the Allocations API
        has a proven track record that will allow your application to scale.
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
