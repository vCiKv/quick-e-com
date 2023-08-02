import React from "react";
import { SectionHeader } from "./utils";
import Image from "next/image";
import PropType from "@/types/props";

const sectionHeader = {
  title: (
    <>
      <span className="text-color-primary">Workflow</span> that just works
    </>
  ),
  subtitle: "our services",
  paragraph:"Whether you are a beginner or a professional financial markets trader/investor in the online investment field, we are sure that you will find our platform easy and very userfriendly Kasd stet accusam dolores sanctus voluptua dolor gubergren sed lorem. Dolore sea."
};

const splitData = [
  {
    title: "We Work",
    text: " Sit tempor ea diam sed accusam. Dolor dolore at vero. ",
    subtitle: "Data-driven insights",
    img: "/finance/icons/illustrations/investment.svg",
    key: 2,
  },
  {
    title: "We Do",
    text: "Diam elitr dolores magna gubergren voluptua.",
    subtitle: "Rebum et magna clita sea eos sit. Stet elitr sanctus.",
    img: "/finance/icons/illustrations/finance pro.svg",
    key: 3,
  },
  {
    title: "We Manage",
    text: " Clita dolor accusam elitr sed ipsum at sadipscing.",
    subtitle: "Gubergren sadipscing rebum nonumy kasd sea.",
    img: "/finance/icons/illustrations/improved result.svg",
    key: 4,
  },
];
//reveal-from-bottom reveal-from-left

const FeaturesSplit = (props: PropType) => {
  const outerClasses = `features-split section ${props.className}`;

  const innerClasses = `features-split-inner section-inner ${
    props.topDivider && "has-top-divider"
  } ${props.bottomDivider && "has-bottom-divider"}`;

  const DisplaySplits = () => {
    const splitClasses = `split-wrap ${props.invertMobile && "invert-mobile"} ${
      props.invertDesktop && "invert-desktop"
    } ${props.alignTop && "align-top"}`;

    return (
      <div className={splitClasses}>
        {splitData.map((split) => (
          <div key={split.key} className="split-item">
            <div
              className="split-item-content center-content-mobile "
              data-reveal-container=".split-item"
            >
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                {split.subtitle}
              </div>
              <h3 className="mt-0 mb-12">{split.title}</h3>
              <p className="m-0">{split.text}</p>
            </div>
            <div
              className="split-item-image center-content-mobile"
              data-reveal-container=".split-item"
            >
              <span className="split-item-image-container"></span>
              <span className="next-image" style={{ position: "relative" }}>
                <Image src={split.img} alt="split" fill />
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <section id="services" className={outerClasses} style={props.style}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <DisplaySplits />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSplit;
