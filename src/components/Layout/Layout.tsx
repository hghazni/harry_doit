import { Grid } from "@mui/material";
import scss from './Layout.module.scss';

const Layout = (props: { children: any; }) => {
  return (
    <Grid
      className={scss.layout}
      container   
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh', maxWidth: '80rem', margin: 'auto', padding: '0 1rem' }}>
        {props.children}
      </Grid>
  )
}

export default Layout;