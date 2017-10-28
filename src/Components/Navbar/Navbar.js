import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Tabs, {Tab} from 'material-ui/Tabs';
import {withStyles} from 'material-ui/styles';
import Settings from "material-ui-icons/Settings";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.changeUrl = this.changeUrl.bind(this);
  }

  changeUrl(event, index) {
    const { changeRoute, changeTabValue } = this.props;

    switch (index) {
      case 0:
        changeTabValue(0);
        changeRoute('/');
        return;

      case 1:
        changeTabValue(1);
        changeRoute('/profile');
        return;

      case 2:
        changeTabValue(2);
        changeRoute('/dashboard');
        return;

      default:
        return;
    }
  }

  render() {
    const { classes, tabValue } = this.props;

    return (
      <Grid container className={classes.grid}>
        <Grid item className={classes.root} xs={12}>
          <Grid container>
            <Grid item xs={12} lg={10} md={8} className={classes.margin}>
              <AppBar position="static" className={classes.header}>
                <Toolbar className={classes.bar}>
                  <Grid container>
                    <Grid item>
                      <Typography
                        className={classes.title}
                        gutterBottom
                        align="center">
                        &nbsp;Hackercamp
                      </Typography>
                    </Grid>
                    <Grid item className={classes.flex} />
                    <Grid item>
                        <Button onClick={ () => {} } className={classes.logout}>
                            <Settings className={classes.icon} aria-label="setting" />
                            <Typography
                            type="caption"
                            gutterBottom
                            className={classes.button}>
                                &nbsp;Settings
                            </Typography>
                        </Button>
                    </Grid>
                  </Grid>
                </Toolbar>
              </AppBar>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.root} xs={12}>
          <Grid container>
            <Grid item xs={12} lg={10} md={8} className={classes.margin}>
              <AppBar position="static" className={classes.header}>
                <Tabs
                  value={tabValue}
                  onChange={this.changeUrl}
                  indicatorColor="primary"
                  className={classes.tabs}>
                  <Tab label="Reports" className={classes.tab} />
                  <Tab label="Profile" className={classes.tab} />
                  <Tab label="Dashboard" className={classes.tab} />
                </Tabs>
              </AppBar>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const styles = {
  root: {
    height: 60,
    width: '100%',
    backgroundColor: '#FFF',
  },
  bar: {
    height: 60,
    paddingLeft: 0,
    paddingRight: 0,
  },
  header: {
    backgroundColor: '#FFF',
    maxWidth: '1280px',
    boxShadow: 'none',
    paddingLeft: 15,
    width: '90%',
  },
  margin: {
    margin: '0 auto',
    borderTop: 'thin solid #a6a8ab',
  },
  title: {
    flex: 1,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 30,
    fontWeight: 400,
    letterSpacing: 1.4,
    color: '#000',
  },
  grid: {
    flexGrow: 1,
  },
  button: {
    flex: 1,
    fontSize: 17,
    fontWeight: 400,
    letterSpacing: 1.4,
    marginBottom: 0,
    color: '#0D49BD',
    textTransform: 'none',
  },
  flex: {
    flex: 1,
  },
  logout: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    marginRight: 5,
    marginTop: 5,
  },
  tabs: {
    color: '#a6a8ab',
  },
  tab: {
    textTransform: 'none',
    fontSize: 17,
    fontWeight: 400,
    letterSpacing: 1.4,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
  },
  icon: {
    height: 27,
    width: 27,
    color: "#E3F2FD",
  },
};

export default withStyles(styles)(Navbar);