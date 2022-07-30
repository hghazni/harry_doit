import React, { useState } from 'react';
import { Box, FormControl, FormHelperText, Grid, Paper, Typography } from '@mui/material';
import Input from './components/Input';
import Label from './components/Label';
import CodeBlock from './components/CodeBlock';
import NoteMUI from './components/Note/Note.style';
import { kMaxLength } from 'buffer';

function App() {
const [ organizationID, setOrganizationID ] = useState('');

  return (
    <Grid
      container   
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh', maxWidth: '80rem', margin: 'auto', padding: '0 1rem' }}>
      <Grid item style={{display: 'grid', gridTemplateColumns: "repeat(auto-fit, minmax(375px, 1fr))", gap: '2rem'}}>
        <Box component="form">
          {/* <Typography variant="h3" align="center">
            You can use this component as an entry point. Or feel free to bring your own file structure
          </Typography> */}
          <Label>To create custom code snippets, fill in your organisation ID:</Label>
          <FormControl variant="standard">
            <Input error={organizationID.length >= 8}    aria-describedby="organizationID-helper-text" id="organizationID" label="Your organisation ID" onChange={(e) => setOrganizationID(e.currentTarget.value)} inputProps={{MaxLength: 8}} />
            <FormHelperText error={organizationID.length >= 8} id="organizationID-helper-text" >{organizationID.length >= 8 ?  "Max Organization ID length is 8" : ''}</FormHelperText >
          </FormControl>
          {/* <Typography variant="h3" align="center">
           ✨Good luck✨
          </Typography> */}
          <Label>Run the following gcloud commands in sequence:</Label>
          <CodeBlock>
            Donec at ante sed orci euismod venenatis iaculis at sapien. {organizationID ? (<span style={{color: "red"}}>{organizationID}</span>) : "--organization <ID> --"} Ut id nisl a neque facilisis tempus. Donec et risus dui. Aliquam fringilla luctus velit quis dapibus.
          </CodeBlock>
        </Box>
        <Box>
        <NoteMUI>
            <b>Need Help?</b>
            <br />
            <p>Duis lacus erat, tincidunt a quam eu, feugiat feugiat felis. Duis hendrerit a eros at pulvinar. Quisque a congue enim. Proin at egestas eros. Duis venenatis commodo tempus.</p>
            <br />
            <ul>
              <li><a href="#learnWhereToFindOrganizationID">Learn where to find organization ID</a></li>
              <li><a href="#CopyALinkToThisPage">Copy a link to this page</a></li>
            </ul>
          </NoteMUI>
        </Box>
      </Grid>
    </Grid>
    
  );
}

export default App;
