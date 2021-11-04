import React from "react";
import { AppBar, Toolbar, makeStyles, Button } from "@material-ui/core";
import Logo from "../assets/customPng/logosinBG.png";
import CartWidget from "./Cartwidget";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar>
          <div className={classes.title}>
            <img src={Logo} height="80px" width="140px" alt=""></img>
          </div>
          <Button href="/punto59" variant="text" color="secondary">
            Inicio2
          </Button>
          <Button href="/punto59/nosotros" variant="text" color="secondary">
            Nosotros
          </Button>
          <Button href="/punto59/contacto" variant="text" color="secondary">
            Contador
          </Button>
          <Button variant="text" color="secondary">
            Menu 4
          </Button>
          <Button variant="text" color="secondary">
            Menu 5
          </Button>
          <CartWidget></CartWidget>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  );
};
export default Navbar;
