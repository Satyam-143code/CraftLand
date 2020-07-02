import React, { Fragment,Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Input,
  makeStyles,
  IconButton,
  Button,
  withStyles
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from 'prop-types';

const styles =((theme)=>({
  root: {
    flexGrow: 1,
  },
  navBar:{
    backgroundColor:'white'
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:'#000'
  },
}));

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  render() {
    const { classes }= this.props;
    return (
      <Fragment className={classes.root}>
        <AppBar position="static" elevation={3} className={classes.navBar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="black"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              CraftLand
            </Typography>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}


MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MainPage);
