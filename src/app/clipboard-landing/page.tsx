import Head from "next/head";
import "./style.css";
const features = [
  {
    icon: "blacklist",
    title: "Create Blacklists",
    description:
      "ensure sensitive information never makes its way yo your clipboard by excluding source",
  },
  {
    icon: "text",
    title: "plan text snippets",
    description:
      "remove unwanted formatting from copied text for a consistent look",
  },
  {
    icon: "preview",
    title: "sneak preview",
    description:
      "quick preview if all snippets on your clipboard easy access",
  },
];
const benefits = [
  {
    title: "Quick Search",
    description:
      "Easily search your snippets by content category web address application and more",
  },
  {
    title: "iCloud Sync",
    description: "instantly saves and syncs snippets across all your devices",
  },
  {
    title: "Complete History",
    description:
      "retrieve any snippets from the first moment you started using the app",
  },
];
const supporters = ["google", "ibm", "microsoft", "hp", "vector-graphics"];
const socials = ["facebook", "twitter", "instagram"];
const footerLinks = [
  "FAQs",
  "Contact Us",
  "Privacy Policy",
  "Press Kit",
  "Install Guide",
];
const FeatureList = ({
  title,
  description,
  icon,
  className,
}: {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}) => {
  const iconClass = icon ? "mb-4" : "";

  return (
    <div className={"md:mb-6 " + className}>
      {icon && (
        <div className="flex justify-center mb-12">
          <img src={`/clip-images/icon-${icon}`+".svg"} alt={icon} />
        </div>
      )}
      <h2 className={iconClass}>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
const Logo = ({ size }: { size?: number }) => {
  return (
    <div>
      <img
        src="/clip-images/logo.svg"
        width={size ?? 125}
        height={size ?? 125}
        alt=""
      />
    </div>
  );
};
const DownloadLink = () => {
  return (
    <div className="my-5 flex flex-col justify-center md:flex-row gap-y-5 gap-x-2">
      <button className="btn btn-primary md:w-1/4">Download for iOS</button>
      <button className="btn btn-secondary md:w-1/4">Download for Mac</button>
    </div>
  );
};
const SectionHero = () => {
  return (
    <section className="section">
      <div className="-translate-x-1/2 left-1/2 relative">
        <div className="flex justify-center mb-28">
          <Logo />
        </div>
        <div>
          <h1>A history of everything you copy</h1>
          <p>
            clipboard allows you to track and organize everything you copy
            instantly access your clipboard on all your devices
          </p>
          <DownloadLink />
        </div>
      </div>
 
     
    </section>
  );
};
const SectionBenefits = () => {
 

  return (
    <section className="section">
      <div className="">
        <h1>Keep track of your snippets</h1>
        <p className="md:mb-12">
          clipboard instantly stores any items you copy in the cloud meaning you
          can access your spinners immediately on all your devices Our Mac and iOS
          apps will help you organize everything
        </p>
      </div>
      <div className="flex gap-x-20 justify-center items-center md:flex-nowrap flex-wrap ">
        <div className="img-container md:ml-[-10%]">
          <img src="/clip-images/image-computer.png" alt=""/>
        </div>

        <div>
          {benefits.map((benefit) => (
            <FeatureList
              key={benefit.title}
              description={benefit.description}
              title={benefit.title}
              className="md:pr-[23%] md:text-left"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
const SectionFeatures = () => {

  return (
    <section className="section">
      <h1>Access clipboard anywhere</h1>
      <p>
        weather {"you're"} on the go or at computer you can access all your
        clipboard snippets in a few simple clicks
      </p>
      <h1>Supercharge your workflow</h1>
      <p>{"we've"} got tools to boost your productivity</p>
      <div className="img-container">
        <img src="/clip-images/image-devices.png" alt="" />
      </div>
      <div className="flex justify-center gap-x-8 md:text-center md:flex-nowrap flex-wrap">
        {features.map((feature) => (
          <FeatureList
            key={feature.title}
            description={feature.description}
            title={feature.title}
            icon={feature.icon}
            className="md:w-[28%] my-10"
          />
        ))}
      </div>
    </section>
  );
};
const SectionSupport = () => {
  return (
    <section className="section">
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16 md:mb-32 justify-center">
        {supporters.map((support) => (
          <div className="" key={support}>
            <img src={`/clip-images/logo-${support}.png`} alt={support} />
          </div>
        ))}
      </div>
      <div>
        <h1>Clipboard for iOS and Mac OS</h1>
        <p>
          available fro free on the app store download for macos or ios sync
          with icloud and {"you're"} ready tos tart adding to your clipboard{" "}
        </p>

        <DownloadLink />
      </div>
    </section>
  );
};
const Footer = () => {
  return (
    <footer className="bg-grayish-blue-2">
      <div className="md:flex pt-20 md:pt-8 md:pb-10 justify-evenly gap-x-12 items-center">
        <div className="flex justify-center">
          <Logo size={50} />
        </div>
        <div className="flex flex-col md:flex-row gap-x-12">
          {footerLinks.map((footer) => (
            <span key={footer} className="my-6 cursor-pointer">
              {footer}
            </span>
          ))}
        </div>
        <div className="p-6">
          <div className="flex gap-x-12 justify-center">
            
            {socials.map((social) => (
              <img
                src={"/clip-images/icon-"+social+".svg"}
                alt={social}
                key={social}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="clipboard">
      <div className="block w-full h-2/3 absolute top-0 left-0 -z-10 bg-no-repeat bg-cover bg-center bg-[url('/clip-images/bg-header-mobile.png')] md:bg-[url('/clip-images/bg-header-desktop.png')]"></div>
        <SectionHero />
        <SectionBenefits />
        <SectionFeatures />
        <SectionSupport />
        <Footer />
      </main>
    </>
  );
}
