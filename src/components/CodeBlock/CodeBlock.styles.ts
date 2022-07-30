import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import { gap } from '../../styles/_variables';

const CodeBlockMUI = styled(Paper)(
  ({ theme }) => `
    background-color: rgba(0, 0, 0, 0.04);
    padding: ${gap}rem;
    `,
);

export default CodeBlockMUI;