import React from "react";
import {
  Container,
  Hidden,
  useMediaQuery,
  SwipeableDrawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
  Paper,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { logo } from "./SmallComponents/Images";

import {
  ConnectWalletList,
  ConnectWalletButton,
  useCardano,
} from "@cardano-foundation/cardano-connect-with-wallet";
import { StyledText } from "./SmallComponents/AppComponents";
import { Link } from "react-router-dom";

const classes = {
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#1d114f !important",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },
};

export default function Header() {
  // const { account, connect, disconnect } = useContext(AppContext);
  const {
    isEnabled,
    isConnected,
    enabledWallet,
    stakeAddress,
    signMessage,
    connect,
    disconnect,
  } = useCardano();
  const onConnect = () => alert("Successfully connected!");

  // const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const matches1 = useMediaQuery("(max-width:1279px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display="flex" justifyContent="center" py={5}>
        <img width="150px" src={logo} alt="" />
      </Box>
      <List>
        {[
          "Overview",
          "About TADA",
          "How it Works",
          "Token",
          "Team",
          "Roadmap",
        ].map((text, index) => (
          <ListItem
            button
            style={{
              justifyContent: "center",
            }}
            key={text}
          >
            <ListItemText
              style={{
                textTransform: "capitalize",
                textAlign: "center",
                textDecoration: "none",
                cursor: "pointer",
                color: "#ffffff",
              }}
              primary={text}
            />
          </ListItem>
        ))}
      </List>
      <Box mb={1} display="flex" justifyContent="center">
        <ConnectWalletButton
          // primaryColor="transparent"
          borderRadius={30}
          message=""
          // onSignMessage={onSign}
          onConnect={onConnect}
          customCSS={`
                    font-family: Helvetica Light,sans-serif;
                    font-size: 0.875rem;
                    font-weight: 700;
                    width: 164px;
                    color: #000;
                    & > span { padding: 5px 16px; }
                `}
        />
      </Box>
    </div>
  );
  return (
    <>
      <Box
        sx={{
          background: "transparent",
        }}
        height="92px"
        width="100%"
        py={2}
      >
        <Container maxWidth="lg">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <img width="110px" src={logo} alt="" />
            </Link>
            <Box
              display="flex"
              justifyContent={matches1 ? "end" : "space-between"}
              alignItems="center"
            >
              <Hidden mdDown>
                <StyledText mr={3}>Overview</StyledText>
                <StyledText mr={3}>About TADA</StyledText>
                <StyledText mr={3}>How it Works</StyledText>
                <StyledText mr={3}>Token</StyledText>
                <StyledText mr={3}>Team</StyledText>
                <StyledText mr={3}>Roadmap</StyledText>
                <ConnectWalletButton
                  // primaryColor="transparent"
                  borderRadius={30}
                  message=""
                  // onSignMessage={onSign}
                  onConnect={onConnect}
                  customCSS={`
                    font-family: Helvetica Light,sans-serif;
                    font-size: 0.875rem;
                    font-weight: 700;
                    width: 164px;
                    color: #000;
                    & > span { padding: 5px 16px; }
                `}
                />
              </Hidden>

              <Hidden mdUp>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button
                      onClick={toggleDrawer(anchor, true)}
                      style={{ zIndex: 1 }}
                    >
                      <MenuIcon
                        style={{
                          fontSize: "38px",
                          cursor: "pointer",
                          color: "#fff",
                        }}
                      ></MenuIcon>
                    </Button>
                    <Paper>
                      <SwipeableDrawer
                        classes={{ paper: classes.paper }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                      >
                        {list(anchor)}
                      </SwipeableDrawer>
                    </Paper>
                  </React.Fragment>
                ))}
              </Hidden>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
