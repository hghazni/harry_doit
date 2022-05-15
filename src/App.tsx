import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

function App() {
  return (
    <Grid 
      container 
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}>
      <Grid item>
        <Box sx={{ maxWidth: 1024 }}>
          <Typography variant="h3" align="center">
            You can use this component as an entry point. Or feel free to bring your own file structure
          </Typography>

          <Typography variant="h3" align="center">
           ✨Good luck✨
          </Typography>
        </Box>
      </Grid>
    </Grid>
    
  );
}

export default App;
