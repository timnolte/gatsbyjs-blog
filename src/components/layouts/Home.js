import React from 'react';
import theme from '../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import SiteMetadata from '../SiteMetadata';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import Footer from '../Footer';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export default function Home({ children }) {
  const classes = useStyles();
  const metaData = SiteMetadata;

  return (
    <React.Fragment>
      <SiteMetadata />
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          <Header title={metaData.title} />
          <Grid container spacing={5} className={classes.mainGrid}>
            {children}
          </Grid>
        </Container>
        <Footer title="Footer" description="Something here to give the footer a purpose!" />
      </ThemeProvider>
    </React.Fragment>
  );
}

