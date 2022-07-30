import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import { gap } from '../../styles/_variables';

const NoteMUI = styled(Paper)(
  ({ theme }) => `
    background-color: rgba(0, 0, 0, 0.02);
    padding: ${gap}rem;
    `,
);

export default NoteMUI;