// React
import * as React from "react";
import { useContext } from "react";
// Next
import { useRouter } from "next/router";
import Image from "next/image";
// Mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useMediaQuery, useTheme } from "@mui/material";

// Azure
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

// General
import DrawerComponent from "../mobileNavigationDrawer";
import Logo from "../../../assets/images/mediclinicfull.png";
import ctx from "../../../utility/context/navigationContext";
import SignOutButton from "src/components/shared/signOutButton";
import SignInSignUpButton from "src/components/shared/signInsignUpButton";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const navigationCTX = useContext(ctx);

  return (
    <AppBar position="static" elevation={3}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            border: "none",
          }}
        >
          <Box
            sx={{
              border: "none",
              width: "15%",
            }}
          >
            <Image src={Logo} alt="mediclinic logo" />
          </Box>
          {!isMatch && (
            <>
              <Box
                sx={{
                  width: "auto",
                  border: "none",
                  marginTop: "1%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Tabs
                  value={navigationCTX?.getSelectedPageIndex}
                  onChange={() => {
                    console.log("click");
                  }}
                  textColor="secondary"
                  indicatorColor="secondary"
                  centered
                  TabIndicatorProps={{
                    style: { visibility: "hidden" },
                  }}
                  sx={{
                    ".Mui-selected": { color: "#506C94", fontWeight: "700" },
                  }}
                >
                  {navigationCTX?.getPagesArr.map((page, index) => {
                    return (
                      <Tab
                        value={page.index}
                        label={page.name}
                        key={page.name}
                        onClick={(e) => {
                          router.push(page.url);
                        }}
                        sx={{
                          fontFamily: "Poppins",
                          color: "black",
                          fontWeight: "400",
                          textTransform: "none",
                          fontSize: "24px",
                        }}
                      />
                    );
                  })}
                </Tabs>
              </Box>
              <Box
                sx={{
                  border: "none",
                  width: "15%",
                  marginTop: "1%",
                }}
              >
                <AuthenticatedTemplate>
                  <SignOutButton />
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                  <SignInSignUpButton />
                </UnauthenticatedTemplate>
              </Box>
            </>
          )}
          {isMatch && <DrawerComponent></DrawerComponent>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
