import React, { useState } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Input from './components/Input';
import Label from './components/Label';
import CodeBlock from './components/CodeBlock';
import NoteMUI from './components/Note/Note.style';

function App() {
const [ organizationID, setOrganizationID ] = useState('');

  return (
    <Grid 
      container 
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ display: 'flex', flexWrap: 'wrap', minHeight: '100vh', maxWidth: '80rem', margin: 'auto', padding: '0 1rem' }}>
      <Grid item>
        <Box>
          {/* <Typography variant="h3" align="center">
            You can use this component as an entry point. Or feel free to bring your own file structure
          </Typography> */}
          <Label>To create custom code snippets, fill in your organisation ID:</Label>
          <Input label="Your organisation ID" onChange={(e) => setOrganizationID(e.currentTarget.value)} />
          {/* <Typography variant="h3" align="center">
           ✨Good luck✨
          </Typography> */}
          <Label>Run the following gcloud commands in sequence:</Label>
          <CodeBlock>
            Donec at ante sed orci euismod venenatis iaculis at sapien. {organizationID ? (<span style={{color: "red"}}>{organizationID}</span>) : "--organization <ID> --"} Ut id nisl a neque facilisis tempus. Donec et risus dui. Aliquam fringilla luctus velit quis dapibus.
          </CodeBlock>
        </Box>
        <Box>
        <NoteMUI style={{display: 'grid'}}>
            <b>Need Help?</b>
            Duis lacus erat, tincidunt a quam eu, feugiat feugiat felis. Duis hendrerit a eros at pulvinar. Quisque a congue enim. Proin at egestas eros. Duis venenatis commodo tempus.
          </NoteMUI>
        </Box>
      </Grid>
    </Grid>
    
  );
}

export default App;
