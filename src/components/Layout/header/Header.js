import React from "react";
import LOGO from "./../../../asset/logo1.png";

import { Link } from "react-router-dom";
import "./styles.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Search from "./search/Search";
import Menu from "./Menu/Menu";
import OptionCart from "./Option/OptionCart";
import OptionUser from "./Option/OptionUser";

import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";


import DehazeIcon from '@material-ui/icons/Dehaze';
AOS.init();
function Header() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className="container-list-drawer"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[{text:"home",to:"/"},{text:"User",to:"/user"}].map((text, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <Link to={text.to}><ListItemText primary={text.text} /></Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  return (
    <>
      <div className="container-header">
        <div className="container">
          <div className="row-header-top">
            <div className="row-column-header-top">
            <div className="button-menu-responsive">
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                      <DehazeIcon className="DehazeIcon"/>
                    </Button>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>
              <Link to="/">
                <img
                  src={LOGO}
                  alt="###"
                  className="img-logo-row-column-header-top"
                />
              </Link>
            </div>
            <div className="row-column-header-top">
              <Search />
            </div>
          </div>
          <div className="row-header-bottom">
            <Menu />
            <div className="row-header-bottom-single">
              <div className="icon-row-header-bottom-single">
                <OptionUser />
                <OptionCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
