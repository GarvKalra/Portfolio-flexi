import React, { Component, Fragment } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  drawerWidth: {
    width: "auto"
  },
  drawerColor: {
    textAlign: "center"
  },
  headerwidth: {
    width: "100%",
    padding: 0,
    margin: 0,
    float: "left"
  },
  buttonHover: {
    "&:hover": {
      backgroundColor: "#f0f0f0", // change to desired highlight color
      color: "#3f51b5" // change to desired text color
    }
  }
});

class Header extends Component {
  state = {
    open: false
  };
  handleMenubutton = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppBar
          className="header-color"
          position="static"
          classes={{ positionStatic: classes.headerwidth }}
        >
          <Toolbar>
            <Typography
              variant="subtitle"
              color="inherit"
              style={{ flexGrow: 1 }}
            >
              <Button
                color="inherit"
                className={classes.buttonHover}
                style={{ fontSize: "1rem" }}
                href="https://drive.google.com/file/d/1tPdHN9jDyPetteJ_KiDTq2u-KAFnEdow/view?usp=sharing"
              >
                <i className="fas fa-cloud-download-alt">Resume</i>
              </Button>
            </Typography>
            <Hidden mdUp>
              <IconButton color="inherit" onClick={this.handleMenubutton}>
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <Button
                href="#about"
                color="inherit"
                className={classes.buttonHover}
                style={{ fontSize: "1rem" }}
              >
                About
              </Button>
              <Button
                href="#experience"
                color="inherit"
                className={classes.buttonHover}
                style={{ fontSize: "1rem" }}
              >
                Experience
              </Button>
              <Button
                href="#education"
                color="inherit"
                className={classes.buttonHover}
                style={{ fontSize: "1rem" }}
              >
                Education
              </Button>
              <Button
                href="#skills"
                color="inherit"
                className={classes.buttonHover}
                style={{ fontSize: "1rem" }}
              >
                Skills
              </Button>
              <Button
                href="#achievements"
                color="inherit"
                className={classes.buttonHover}
                style={{ fontSize: "1rem" }}
              >
                Achievements
              </Button>
            </Hidden>
          </Toolbar>
        </AppBar>

        <Hidden mdUp>
          <div>
            <Drawer
              anchor="top"
              open={this.state.open}
              classes={{ paperAnchorTop: classes.drawerColor }}
              style={{ color: "yellow" }}
            >
              <div className={classes.drawerWidth}>
                <IconButton onClick={this.handleMenubutton}>
                  <KeyboardArrowUpIcon />
                </IconButton>

                <List>
                  {[
                    "about",
                    "experience",
                    "education",
                    "skills",
                    "achievements"
                  ].map((text, index) => (
                    <ListItem button key={index} className="menu_btn">
                      <Button
                        href={`#${text}`}
                        onClick={this.handleMenubutton}
                        className={classes.buttonHover}
                      >
                        <ListItemText primary={text} />
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </div>
            </Drawer>
          </div>
        </Hidden>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Header);

