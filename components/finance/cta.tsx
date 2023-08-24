import React from "react";
import { BasicForm } from "@/form/input";
import PropType from "@/types/props";

const Cta = (props: PropType) => {
  const newsletterData = [
    {
      label: "email",
      type: "email",
      name: "email",
    },
  ];
  const outerClasses = `cta section center-content-mobile reveal-from-bottom ${props.className}`;

  const innerClasses = `cta-inner section-inner cta-split ${
    props.topDivider && "has-top-divider"
  } ${props.bottomDivider && "has-bottom-divider"}`;

  return (
    <section className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0 light-text">
              Join Our Newsletters,
              <br /> Get Monthly Breakdowns
            </h3>
          </div>
          <div className="cta-action">
            <>
              <div className="has-icon-right">
                <BasicForm
                  data={newsletterData}
                  validateType="onlyEmail"
                  noTitle
                  buttonText="Subscribe"
                  submit={(val) => console.log("subscription created", val)}
                />
              </div>
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

//  hasIcon="right"
// padding-left: 16px;
// padding-right: 16px;
// background-color: #5658DD;
// background-image: url(/static/media/cta-illustration.3ce357e7.svg);
// background-repeat: no-repeat;
// background-size: cover;
// background-position: right bottom;
