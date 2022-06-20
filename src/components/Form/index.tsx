import React from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
  OutlinedInput,
  FormHelperText,
  Button,
  IconButton,
  Grid,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import letstry from "./questionTypes";
type Props = {};

interface IFormInput {
  message: string;
  number: string;
}
const Form = (props: Props) => {
  const {
    register, // add a field to form handler
    formState: { errors }, // get errorstate from form
    handleSubmit, // custom submit handler from react-hook-forms
    setValue, // lets us change the value of inputs
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (!errors) console.log("DATA FROM FORM", data);
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      style={{
        border: "5px solid #E2EFFF",
        borderRadius: "50px",
        backgroundColor: "white",
        padding: "5% 10%",
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={12} sx={{ display: "grid", placeContent: "center" }}>
          <Typography variant="h2" sx={{ color: "#5F9BE4" }}>
            Test
          </Typography>
        </Grid>
        {letstry.map((input) => {
          const errorMessage = input.name in errors ? errors[`${input.name}`] : false;
          return (
            <Grid item xs={12} key={input.guid} sx={{ width: "100%" }}>
              <Typography
                variant="subtitle1"
                sx={{
                  textTransform: "capitalize",
                  marginBottom: "10px",
                  marginTop: "10px",
                  color: "#5F9BE4",
                  fontWeight: "500px",
                }}
              >
                {input.id}
              </Typography>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor={input.guid} color={errorMessage ? "error" : "secondary"}>
                  Your {input.id} here
                </InputLabel>
                <OutlinedInput
                  id={input.id}
                  placeholder={input.placeholder}
                  error={errorMessage ? true : false}
                  required
                  label={input.label}
                  color="secondary"
                  multiline={input.multi ? true : false}
                  minRows={4}
                  maxRows={6}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                          setValue(`${input.id}`, "");
                        }}
                      >
                        <CancelOutlinedIcon color="secondary" />
                      </IconButton>
                    </InputAdornment>
                  }
                  {...register(input.id, {
                    ...input.rules,
                  })}
                />
                {errorMessage ? (
                  <FormHelperText id="component-helper-text" sx={{ color: "red" }}>
                    {errorMessage}
                  </FormHelperText>
                ) : null}
              </FormControl>
            </Grid>
          );
        })}
        <Button type="submit" fullWidth sx={{ backgroundColor: "#5F9BE4", marginTop: "5%" }}>
          submit
        </Button>
      </Grid>
    </form>
  );
};

export default Form;
