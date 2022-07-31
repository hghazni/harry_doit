import { CssBaseline, ThemeProvider } from '@mui/material';
import Layout from './components/Layout/Layout';
import CustomCodeSnippets from './layouts/CustomCodeSnippets';
import doitTheme from './theme';

function App() {
  return (
    <ThemeProvider theme={doitTheme}>
      <CssBaseline enableColorScheme />
      <Layout>
        <CustomCodeSnippets />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
