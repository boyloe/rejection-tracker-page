import React from 'react';
import Container from '@material-ui/core/Container'
import './App.css';
import { makeStyles } from '@material-ui/core/styles'
import { Header } from './components/Header';
import { SelectMenu } from './components/SelectMenu';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 10000
  }
})

function App() {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Header />
      <SelectMenu />
    </Container>
  );
}

export default App;
