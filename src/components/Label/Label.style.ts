import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { gap } from "../../styles/_variables";

const LabelMUI = styled(Typography)(
  ({ theme }) => `
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.15px;
  margin-bottom: ${gap*2}rem;
`,
);

export default LabelMUI;