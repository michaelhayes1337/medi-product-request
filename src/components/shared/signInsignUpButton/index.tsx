import React from "react";
import { Button } from "@mui/material";
import { useMsal } from "@azure/msal-react";
type Props = {};

const SignInSignUpButton = (props: Props) => {
  const { instance } = useMsal();
  return (
    <Button variant="contained" onClick={() => instance.loginRedirect()}>
      Sign In/Up
    </Button>
  );
};

export default SignInSignUpButton;
