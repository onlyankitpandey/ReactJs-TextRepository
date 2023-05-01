import React, { useEffect, useContext } from "react";
import { useLocation, matchPath } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  Hidden,
  List,
  ListSubheader,
  makeStyles,
} from "@material-ui/core";
import { RiDashboard2Fill } from "react-icons/ri";
import { PieChart as PieChartIcon } from "react-feather";
import { FaLightbulb } from "react-icons/fa";
import SettingsIcon from "@material-ui/icons/Settings";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { ImStatsDots, ImStatsBars } from "react-icons/im";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import SwapVertIcon from "@material-ui/icons/SwapVert";
import SubjectIcon from "@material-ui/icons/Subject";
import { useHistory } from "react-router-dom";
import NavItem from "./NavItem";

const sections = [
  {
    items: [
      {
        title: "Dashboard-01",
        icon: RiDashboard2Fill,
        href: "/dashboard-01",
      },
      {
        title: "Dashboard-02",
        icon: RiDashboard2Fill,
        href: "/dashboard-02",
      },
      {
        title: "Dashboard-03",
        icon: RiDashboard2Fill,
        href: "/dashboard-03",
      },
      {
        title: "Dashboard-04",
        icon: RiDashboard2Fill,
        href: "/dashboard-04",
      },
      {
        title: "Dashboard-05",
        icon: RiDashboard2Fill,
        href: "/dashboard-05",
      },
    ],
  },
];

function renderNavItems({ items, pathname, depth = 0 }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, pathname, depth }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth }) {
  const key = item.title + depth;

  if (item.items) {
    //eslint-disable-next-line
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean()}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}
      />
    );
  }

  return acc;
}

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256,
    // background: theme.palette.primary.main,
  },
  desktopDrawer: {
    width: 200,
    top: 80,

    height: "calc(100% - 80px)",
    background: theme.palette.background.paper,
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
  socialIcon: {
    cursor: "pointer",
    marginRight: 5,
  },
  logo: {
    width: "164px",
    cursor: "pointer",
    height: "30px",
    paddingLeft: "20px",
    paddingTop: "21px",
  },
  contentBox: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.paper,
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box height="100%" display="flex" flexDirection="column">
        <Box className={classes.contentBox}>
          <PerfectScrollbar options={{ suppressScrollX: true }}>
            <Box py={4}>
              {sections.map((section, i) => {
                return (
                  <List
                    key={`menu${i}`}
                    subheader={
                      <ListSubheader disableGutters disableSticky>
                        {section.subheader}
                      </ListSubheader>
                    }
                  >
                    {renderNavItems({
                      items: section.items,
                      pathname: location.pathname,
                    })}
                  </List>
                );
              })}
            </Box>
          </PerfectScrollbar>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          <img
            src="./images/dashboard_logo.png"
            alt="image"
            className={classes.logo}
            onClick={() => history.push("/")}
          />
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
