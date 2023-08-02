"use client";
import Head from "next/head";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-12">
      <h3 className="flex flex-col font-black text-4xl leading-[80%]">
        <span>Robots</span> <span>Co</span>
      </h3>
      <div>Menu</div>
    </nav>
  );
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="robot-page">
      <motion.div
        className="min-h-screen px-12 bg-cream"
        initial="initial"
        animate="animate"
      >
        <Navbar />
        <div style={{ minHeight: "100vh" }}>
          {children}
        </div>
        <footer className="flex justify-center text-sm text-zinc-400 py-12">
        <p>Copyright 2022 Robot Co. All rights reserved.</p>
      </footer>
      </motion.div>
    </main>
  );
}
