'use client'

import "@/styles/style.scss";

import "animate.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "@/lib/notification";
import Header from "@/components/finance/header";
import Footer from "@/components/finance/footer";
import Head from "next/head";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { ReactNode } from "react";
import Shapes from "@/components/finance/shape";
let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function FinanceLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {/* <ToastContainer /> */}
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <title>MyCompany</title>
          <meta name="description" content="our work"></meta>
          <meta name="theme-color" content="#6163FF"></meta>
          <meta
            name="keywords"
            content=""
          ></meta>
        </Head>
        <Header />
        <Shapes />
        <main className="site-content">{children}</main>
        <Footer />
    </ThemeProvider>
  );
}
