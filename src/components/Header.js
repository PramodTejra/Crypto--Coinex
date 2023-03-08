import { AppBar,Container,Toolbar,Typography,Select,MenuItem} from '@material-ui/core'
import React from 'react'

import { makeStyles,createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "#41B8F8",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});


const Header = () => {
  const classes = useStyles();
  const history = useNavigate();
  const { currency, setCurrency } = CryptoState();
   
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography 
          onClick={() => history(`/`)} 
          className={classes.title}
          variant="h6"
          >
          Crypto Coinex
          </Typography>

          <Select
              variant="outlined"
              style={{ width: 100, height: 40, marginLeft: 15 }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header
