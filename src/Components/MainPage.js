import React, { Fragment } from "react";
import { AppBar, Toolbar,Typography, Input } from "@material-ui/core";

function MainPage() {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Input/>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default MainPage;
