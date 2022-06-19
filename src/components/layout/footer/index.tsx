import React from "react";
import { useContext } from "react";
import ctx from "../../../utility/context/navigationContext";
import { Box, Container, Toolbar, Typography, AppBar } from "@mui/material";
import Link from "next/link";
import Button from "@mui/material/Button";
import Image from "next/image";
import Logo from "../../../assets/images/mediclinicfull.png";

const Footer: React.FC = () => {
  const navigationCTX = useContext(ctx);

  return (
    <AppBar position="static" elevation={3} sx={{ height: "40vh", backgroundColor: "#fff" }}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            border: "none",
          }}
        >
          <Box sx={{ width: "30%" }}>
            <Image src={Logo} alt="mediclinic logo" />
            <Typography variant="h6" color="secondary">
              Expertise you can trust.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{}}>
              Navigate
            </Typography>
            {navigationCTX?.getPagesArr.map((page, index) => {
              const isNaviagted = index === navigationCTX?.getSelectedPageIndex;
              return (
                <Box key={page.name}>
                  <Link href={`${page.url}`}>
                    <Button
                      variant="text"
                      color="secondary"
                      sx={{
                        color: isNaviagted ? "#506C94" : "black",
                        fontWeight: isNaviagted ? "700" : "400",
                        textTransform: "none",
                        fontSize: "22px",
                      }}
                    >
                      {page.name}
                    </Button>
                  </Link>
                </Box>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
