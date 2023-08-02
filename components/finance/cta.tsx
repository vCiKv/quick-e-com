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
        {/* <div className="">
          <h2 className="mt-0 mb-16" style={{ textAlign: "center" }}>
            Our <span className="text-color-primary">Future</span>
          </h2>
        </div> */}
        {/* <Typography
          variant="subtitle1"
          className="text-color-mid"
          my={2}
          sx={{ display: "block", textAlign: "left" }}
        >
          With many more projects in the works slated for 2022 and 2023 it is an
          exciting time for MyCompany one of which includes expanding and
          diversifying into Agriculture a low-risk investment that keeps pace
          with inflation and Mineral rights adding into our Real-Estate
          portfolio while exploring oil and gas, causing major positive changes
          in our existing system so watch out and sign up to our monthly
          newsletters to be the first to know Et erat invidunt invidunt duo vero
          vero eos accusam, consetetur at sea diam aliquyam dolor voluptua et
          lorem, ea stet. <br />
          <span className="is-link">
            <Link href="/about" >
              learn more about us
            </Link>
          </span>
        </Typography> */}
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
