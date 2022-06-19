import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Divider,
  Box,
} from "@mui/material";
import { useContext } from "react";
import ctx from "../../../utility/context/navigationContext";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
type Props = {
  children?: React.ReactNode;
};

const MobileNavigationDrawer = (props: Props) => {
  const [open, setOpen] = useState(false);
  const navigationCTX = useContext(ctx);

  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        onClick={() => setOpen(false)}
        anchor="right"
      >
        <List sx={{ width: "200px" }}>
          {navigationCTX?.getPagesArr.map((page, index) => {
            const isNavigated = index === navigationCTX?.getSelectedPageIndex;
            return (
              <Link href={page.url} key={page.name}>
                <ListItemButton>
                  <ListItemText
                    primary={page.name}
                    sx={{
                      textAlign: "right",
                      color: isNavigated ? "#506C94" : "black",
                    }}
                  />
                </ListItemButton>
              </Link>
            );
          })}
        </List>
        <Divider />
        <List sx={{ width: "200px" }}>
          {["Sign Up", "Sign In"].map((name, index) => {
            return (
              <Box key={name}>
                <ListItemButton>
                  <ListItemText
                    primary={name}
                    sx={{
                      textAlign: "right",
                    }}
                  />
                </ListItemButton>
              </Box>
            );
          })}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(true)} sx={{ marginLeft: "auto" }}>
        <MenuIcon sx={{ marginLeft: "auto" }}></MenuIcon>
      </IconButton>
    </>
  );
};

export default MobileNavigationDrawer;
