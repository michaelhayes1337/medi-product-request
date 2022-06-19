import React from "react";
import { Button } from "@mui/material";
import { useMsal } from "@azure/msal-react";
type Props = {};

const SignOutButton = (props: Props) => {
  const { instance } = useMsal();
  return (
    <Button variant="contained" onClick={() => instance.logoutRedirect()}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
