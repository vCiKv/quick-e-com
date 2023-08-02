"use client"
import { motion } from "framer-motion";
import {
  riseWithFade,
  staggerChildren,
  videoAnimation,
  wordAnimation,
} from "@/utils/animations";

const Home = () => {
  return (
    <>
      <main className="grid grid-cols-[3fr_1fr] py-12">
        <h1 className="text-8xl font-bold w-[40rem] leading-[90%] tracking-[-2px]">
          <AnimatedWords title="Helper robots for a better everyday" />
        </h1>
        <motion.div
          className="text-base leading-[150%] self-end"
          variants={riseWithFade}
        >
          Born from the moonshot factory, we&#39;re building a new type of robot.
          One that can learn by itself, to help anyone with (almost) anything.
        </motion.div>
      </main>
      <motion.video
        className="w-full py-12"
        loop
        autoPlay
        muted
        playsInline
        variants={videoAnimation}
      >
        <source src="/robot/hero-video.mp4" type="video/mp4" />
      </motion.video>
    </>
  );
};

const AnimatedWords = ({ title }:{title: string;}) => {
  return (
    <motion.span variants={staggerChildren}>
      {title.split(" ").map((word, idx) => (
        <div key={idx} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block overflow-hidden"
            variants={wordAnimation}
          >
            {word + "\u00A0"}
          </motion.span>
        </div>
      ))}
    </motion.span>
  );
};

export default Home;
