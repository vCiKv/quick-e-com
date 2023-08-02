"use client";
import Hero from "@/components/finance/hero";
import FeaturesTiles from "@/components/finance/featuresTiles";
import FeaturesSplit from "@/components/finance/featuresSplit";
import Cta from "@/components/finance/cta";
import PricingContent from "@/components/finance/pricing";

export default function Home() {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        className="illustration-section-02"
      />
      <PricingContent title="Plans" uid="guest"/>
      <Cta split />
    </>
  );
}
