import * as React from "react";
// Next
import Head from "next/head";
import { AppProps } from "next/app";
// MUI
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../theme";
import createEmotionCache from "../createEmotionCache";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

import Layout from "../components/layout";

// Azure
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "../../services/msal";
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <MsalProvider instance={msalInstance}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MsalProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
