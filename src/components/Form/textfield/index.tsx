import React from "react";
import { Input } from "../questionTypes";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
type Props = {
  specs: Input;
};

const TextField: React.FC<Props> = ({ specs }) => {
  return (
    <Grid item xs={12} key={specs.guid} sx={{ width: "100%" }}>
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
        {specs.guid}
      </Typography>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor={specs.guid} color={errorMessage ? "error" : "secondary"}>
          Your {input.id} here
        </InputLabel>
        <OutlinedInput
          id={specs.guid}
          placeholder={specs.placeholderText}
          error={errorMessage ? true : false}
          required
          label={specs.label}
          color="secondary"
          multiline={specs.multi ? true : false}
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
};

export default TextField;
