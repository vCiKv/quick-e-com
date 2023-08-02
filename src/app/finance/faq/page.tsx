"use client";
import { SectionHeader } from "@/components/finance/utils";
import { Fade, Slide } from "react-awesome-reveal";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import React, { useState } from "react";

interface FaqQuestion {
  id: string | number;
  question: string;
  answer: JSX.Element | string;
}
const faqData = [
  {
    id: 1,
    answer: "Business-focused",
    question:
      "luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat",
  },
  {
    id: 2,
    answer: "24 hour",
    question:
      "neque libero convallis eget eleifend luctus ultricies eu nibh quisque id",
  },
  {
    id: 3,
    answer: "static",
    question:
      "tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut",
  },
  {
    id: 4,
    answer: "Front-line",
    question:
      "libero non mattis pulvinar nulla pede ullamcorper augue a suscipit",
  },
  {
    id: 5,
    answer: "6th generation",
    question:
      "tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed",
  },
  {
    id: 6,
    answer: "Configurable",
    question:
      "sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo",
  },
  {
    id: 7,
    answer: "help-desk",
    question:
      "pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat",
  },
  {
    id: 8,
    answer: "zero tolerance",
    question:
      "neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
  },
  {
    id: 9,
    answer: "Distributed",
    question:
      "turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum",
  },
  {
    id: 10,
    answer: "hardware",
    question:
      "lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna",
  },
  {
    id: 11,
    answer: "Open-architected",
    question:
      "mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in",
  },
  {
    id: 12,
    answer: "incremental",
    question:
      "pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor",
  },
  {
    id: 13,
    answer: "Synergistic",
    question:
      "tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi",
  },
];
const DisplayFaq = (props: {
  data: FaqQuestion;
  setActive: (value: number) => void;
  active: number;
}) => {
  const data = props.data;
  const setActive = props.setActive;
  const active = props.active;
  const showFAQ = (id: number) => {
    id === active ? setActive(-1) : setActive(id);
  };
  const dataId = Number(data.id);
  return (
    <Accordion
      sx={{ my: 2 }}
      className="has-bg-alt text-color-mid"
      expanded={dataId === active}
      onChange={() => showFAQ(dataId)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${dataId}-content`}
        id={`${dataId}-header`}
      >
        <Typography className="text-color-secondary" variant="h6" align="left">
          {data.answer}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="text-color-high" variant="body1">
          {data.question}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
const FrequentAsked = () => {
  const [openFAQ, setOpenFaq] = useState(-1);
  // const openFAQ = faqState.get();

  const sectionHeader = {
    title: "Frequently Asked Questions",
    paragraph: "some questions new and curious customers ask",
  };
  return (
    <section className="faq">
      <div className="hero">
        <Fade duration={1500}>
          <div className="hero-text">
            <Typography className="light-text" variant="h2">
              Got <span>Questions?</span>
            </Typography>
            <Typography className="light-text" variant="h3">
              we have the answers
            </Typography>
          </div>
        </Fade>
        <div className="empty-space"></div>
        <Slide direction="up">
          <Paper
            className="has-bg-alt banner"
            elevation={12}
            sx={{ maxWidth: "85vw", p: 3, my: 1, mx: "auto" }}
          >
            <Grid
              container
              spacing={2}
              justifyContent="flex-start"
              alignItems="stretch"
            >
              <Grid item sm={6}>
                <div>
                  <span className="icon">
                    <Image
                      src="/finance/icons/time management.svg"
                      alt=""
                      layout="responsive"
                      width={64}
                      height={64}
                    />
                  </span>
                  <Typography className="text-color-primary" variant="h6">
                    24/7 support
                  </Typography>
                  <Typography className="light-text" variant="subtitle1">
                    we&apos;re available to you at anytime
                  </Typography>
                </div>
              </Grid>
              <Grid item sm={6}>
                <div>
                  <span className="icon">
                    <Image
                      src="/finance/icons/networking.svg"
                      alt=""
                      layout="responsive"
                      width={64}
                      height={64}
                    />
                  </span>
                  <Typography className="text-color-primary" variant="h6">
                    Live chat
                  </Typography>
                  <Typography className="light-text" variant="subtitle2">
                    get questions or issues answered instantly with our live
                    chat
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Slide>
      </div>
      <div className="container" style={{ maxWidth: "1105px" }}>
        <SectionHeader data={sectionHeader} className="center-content" />
        <div>
          {faqData.map((item, index) => (
            <Slide key={index} direction="up" triggerOnce>
              <DisplayFaq data={item} active={openFAQ} setActive={setOpenFaq} />
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FrequentAsked;
