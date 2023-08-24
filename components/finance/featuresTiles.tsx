import { SectionHeader } from "./utils";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
//remember add fade
const FeaturesTiles = () => {
  const sectionHeader = {
    title: (
      <span className="light-text">
        {" "}
        Build up the <span className="text-color-primary">
          Whole Picture
        </span>{" "}
      </span>
    ),
    paragraph:
      "Sanctus sit est est ipsum tempor voluptua nonumy lorem voluptua, aliquyam sadipscing clita accusam elitr est justo, sed et amet.",
  };

  const points: {
    key: number;
    title: string;
    text: string;
    icon: string;
    alt: string;
    delay?: boolean | number;
  }[] = [
    {
      key: 4,
      title: "Streamlined Approach",
      text: " Et diam diam invidunt justo labore eirmod. Ipsum lorem dolore et lorem est lorem dolore.",
      icon: "//finance/icons/speed.svg",
      alt: "speed",
      delay: false,
    },
    {
      key: 5,
      title: "High Value",
      text: " Voluptua dolor justo amet rebum lorem amet et.",
      icon: "/finance/icons/valuations.svg",
      alt: "value",
      delay: 200,
    },
    {
      key: 6,
      title: "A.I  Approach",
      text: " Aliquyam vero at elitr ea sanctus et et labore nonumy. Dolor accusam dolor.",
      icon: "/finance/icons/technology.svg",
      alt: "tech",
      delay: 400,
    },
  ];
  const DisplayPoints = () => {
    //const data = props2.data reveal-from-bottom data-aos="fade-left"
    return (
      <div className="pb-32 features-tiles-inner section-inner">
        <div className="tiles-wrap center-content">
          {points.map((point) => (
            <div key={point.key} className="tiles-item circle-shadow">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16 features-tiles-item-image">
                    <Image
                      src={point.icon}
                      alt={point.alt}
                      width={58}
                      height={58}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">{point.title}</h4>
                  <p className="m-0 text-sm">{point.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  //
  return (
    <section className="features-tiles section">
      <div className="video-container">
        <video className="video" autoPlay muted loop id="hero-vid">
          <source src="/finance/video/herovid2.mp4" type="video/mp4" />
        </video>
        <div className="video-text">
          <div className="container">
            <SectionHeader
              data={sectionHeader}
              lightText
              className="pt-32 pb-32 pl-8 pr-8 center-content"
            />
          </div>
        </div>
      </div>

      {/* <div className="video-text">
        <div className="container pt-32">
          <div className="p-8">
            <SectionHeader data={sectionHeader} className="pt-32 pb-32 pl-8 pr-8 center-content" style={{}} />
          </div>
        </div>
      </div>  */}
      <div className="container">
        <DisplayPoints />
      </div>
    </section>
  );
};

export default FeaturesTiles;
