import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { gap } from "../../styles/_variables";

const InputMUI = styled(TextField)(
  ({ theme }) => `
    margin-bottom: ${gap*4}rem;
  `,
);

export default InputMUI;