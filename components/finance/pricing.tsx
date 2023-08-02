'use client'
import {
  Box,
  FormControlLabel,
  Card,
  Grid,
  Typography,
  Divider,
  Modal,
  Switch,
} from "@mui/material";

import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import useToggle from "@/hooks/useToggle";
import PriceType from "@/types/price";
const Price = ({ tier }: { tier: PriceType }) => {
  return (
    // xm={12}
    <Grid item sm={6} md={4}>
      <Fade
        direction="up"
        triggerOnce
        duration={1500}
        style={{ height: "100%" }}
      >
        <Box className="pricing-card">
          <Grid container spacing={4} alignItems="center">
            <Grid item>
              <span className="icon">
                <Image
                  src={`/finance/icons/${tier.icon}`}
                  alt={tier.title}
                  height={64}
                  width={64}
                />
              </span>
            </Grid>
            <Grid item>
              <Typography
                sx={{ my: 0 }}
                variant="h5"
                className="text-color-primary"
              >
                {tier.title}
              </Typography>
              <Typography sx={{ my: 0 }} paragraph variant="h5">
                {"$" + tier.price}
              </Typography>
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <Box sx={{ p: 1 }}>
            {tier.description.map((line) => (
              <span key={line}>
                <Grid spacing={1} alignItems="center" container>
                  <Grid item>
                    <Image
                      src={"/finance/icons/done.svg"}
                      alt="true"
                      height={16}
                      width={16}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      component="span"
                      variant="body1"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {line}
                    </Typography>
                  </Grid>
                </Grid>
              </span>
            ))}
            <span>
              <Grid spacing={1} alignItems="center" container>
                <Grid item>
                  <Image
                    src={"/finance/icons/done.svg"}
                    alt="true"
                    height={16}
                    width={16}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ textTransform: "capitalize" }}
                  >
                    24/7 support
                  </Typography>
                </Grid>
              </Grid>
            </span>
          </Box>
        </Box>
      </Fade>
    </Grid>
  );
};
const PricingContent = (props: { title: string; uid: string }) => {
  const title = props.title ?? "pricing";
  const uid = props.uid ?? null;
  const [modalOpen, toggleModalOpen] = useToggle();
  const tiers = require("@/data/pricing.json");
  return (
    <section id="plans" className="container">
      <div className="pricing">
        <div className="has-top-divider">
          <Typography variant="h2" textAlign="center" my={2} pt={2}>
            {title}
          </Typography>
          <div className="pricing-cards">
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="stretch"
            >
              {tiers.map((tier: PriceType) => (
                <Price key={tier.title} tier={tier} />
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PricingContent;
