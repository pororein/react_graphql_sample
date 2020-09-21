import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListAltIcon from '@material-ui/icons/ListAlt';
import TelegramIcon from '@material-ui/icons/Telegram';
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import ExitToApp from "@material-ui/icons/ExitToApp";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
import PeopleOutline from "@material-ui/icons/PeopleOutline";
import { Route, Switch } from "react-router-dom";
import ConsoleContents from './consoleContents';

const drawerWidth = 240;

type MenuItem = {
  text: string,
  icon: JSX.Element,
  action: () => void,  
};

export type Props = {
  showUserList: () => void,
  createReviewRequest: () => void,
  showReviewList: () => void,
  showProjectList: () => void,
  createCheckList: () => void,
  showCheckList: () => void,
  logout: () => void,
};

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));
  
  export default function menubar(props: Props) {
    const classes = useStyles();
    const theme = useTheme();

    const listItems: MenuItem[] = [
      {
        text: 'Users',
        icon: <PeopleAlt />,
        action: props.showUserList,
      },
      {
        text: 'Create Review',
        icon: <TelegramIcon />,
        action: props.createReviewRequest,
      },
      {
        text: 'Show Reviews',
        icon: <DynamicFeedIcon />,
        action: props.showReviewList,
      },
      {
        text: 'Show Projects',
        icon: <PeopleOutline />,
        action: props.showProjectList,
      },
      {
        text: 'Create Check List',
        icon: <PlaylistAdd />,
        action: props.createCheckList,
      },
      {
        text: 'Show Check Lists',
        icon: <ListAltIcon />,
        action: props.showCheckList,
      },
      {
        text: 'Logout',
        icon: <ExitToApp />,
        action: props.logout,
      },
    ];

    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Console
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {listItems.map((item, index) => (
              <ListItem button key={item.text} onClick={item.action}>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <ConsoleContents />
        </main>
      </div>
    );
  }