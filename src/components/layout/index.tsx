import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { NavigationContextProvider } from "../../utility/context/navigationContext";
import { Box } from "@mui/material";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <NavigationContextProvider>
      <Box
        style={{
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Box>
    </NavigationContextProvider>
  );
};

export default Layout;
