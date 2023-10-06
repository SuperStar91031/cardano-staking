import React, { useEffect } from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import {
  ConnectWalletList,
  ConnectWalletButton,
  useCardano,
} from "@cardano-foundation/cardano-connect-with-wallet";
import TableComponent from "./Table";

function HeroSection() {
  const onConnect = () => alert("Successfully connected!");
  const matches = useMediaQuery("(max-width:950px)");

  return (
    <>
      <Box py={5}>
        <Container maxWidth="lg">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              sx={{
                color: "#fff",
                fontSize: matches ? "20px" : "28px",
                fontWeight: "700",
              }}
            >
              Staking Pools
            </Box>
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
          <Box pt={2}>
            <TableComponent />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default HeroSection;
