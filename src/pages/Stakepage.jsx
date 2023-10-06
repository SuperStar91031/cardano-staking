import {
  Box,
  Container,
  Dialog,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { StyledButton } from "../components/SmallComponents/AppComponents";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import slogo from "../Images/slogo.png";
import CloseIcon from "@mui/icons-material/Close";

export default function Stakepage() {
  const matches = useMediaQuery("(max-width:950px)");
  const [amount, setAmount] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Dialog
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "500px", // Set your width here
              background:
                "linear-gradient(0deg, rgba(52,41,97,1) 0%, rgba(119,111,149,1) 100%)",
              borderRadius: "30px",
              border: "2px solid #443a6e",
              p: 2,
            },
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            fontFamily="karla"
            fontSize={matches ? "18px" : "22px"}
            fontWeight="700"
            color="#fff"
          >
            Withdraw
          </Typography>
          <CloseIcon
            onClick={handleClose}
            style={{ fontSize: "30px", color: "#fff", cursor: "pointer" }}
          />
        </Box>
        <Box sx={{ borderBottom: "1px solid #918ba9", marginTop: "15px" }} />
        <Box
          mt={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            fontFamily="karla"
            fontSize={matches ? "13px" : "20px"}
            fontWeight="400"
            color="#fff"
          >
            Account Balance
          </Typography>
          <Typography
            fontFamily="karla"
            fontSize={matches ? "12px" : "20px"}
            fontWeight="400"
            color="#fff"
          >
            USDT Value: -- <span style={{ fontWeight: "700" }}>$2,000.12</span>
          </Typography>
        </Box>
        <Box
          mt={1}
          sx={{
            bgcolor: "rgb(255,255,255,0.2)",
            borderRadius: "10px",
            width: "100%",
            height: "55px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: "400",
              color: "#fff",
              pl: 2,
            }}
          >
            100
          </Typography>

          <Box
            sx={{
              fontSize: "17px",
              fontWeight: "500",
              color: "#fff",
              cursor: "pointer",
              pr: 2,
            }}
          >
            TADA
          </Box>
        </Box>
        <Box
          mt={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            fontFamily="karla"
            fontSize={matches ? "13px" : "20px"}
            fontWeight="400"
            color="#fff"
          >
            Withdraw Amount
          </Typography>
          <Typography
            fontFamily="karla"
            fontSize={matches ? "12px" : "20px"}
            fontWeight="400"
            color="#fff"
          >
            USDT Value: -- <span style={{ fontWeight: "700" }}>$2,000.12</span>
          </Typography>
        </Box>
        <Box
          mt={1}
          sx={{
            bgcolor: "rgb(255,255,255,0.2)",
            borderRadius: "10px",
            width: "100%",
            height: "55px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: "400",
              color: "#fff",
              pl: 2,
            }}
          >
            100
          </Typography>

          <Box
            sx={{
              fontSize: "17px",
              fontWeight: "500",
              color: "#fff",
              cursor: "pointer",
              pr: 2,
            }}
          >
            Set Max
          </Box>
        </Box>
        <Typography
          sx={{
            my: 2,
            fontSize: "16px",
            fontWeight: "400",
            color: "#dcdcdc",
            px: 1,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer
        </Typography>
        <StyledButton
          width="100%"
          style={{ height: "50px", marginBottom: "10px" }}
        >
          Confirm Withdrawal
        </StyledButton>
      </Dialog>
      <Box py={5} pb={matches ? 10 : 5}>
        <Container maxWidth="lg">
          <Box
            sx={{
              background:
                " linear-gradient(90deg, rgba(52,41,97,1) 5%, rgba(119,111,149,1) 60%)",
              borderRadius: "30px",
              width: "100%",
              height: "100%  ",
              border: "2px solid #443a6e",
              // p: 2,
            }}
          >
            <Box
              display="flex"
              flexDirection={matches ? "column" : "row"}
              justifyContent="space-between"
              alignItems="center"
              p={2}
            >
              <Typography
                fontFamily="karla"
                fontSize="30px"
                fontWeight="700"
                color="#fff"
              >
                Stake Tokens
              </Typography>
              <Box display="flex" alignItems="center" mt={matches && 2}>
                <Box>
                  <Typography
                    fontFamily="karla"
                    fontSize="15px"
                    fontWeight="400"
                    color="#fff"
                  >
                    Available Balance
                  </Typography>
                  <Typography
                    fontFamily="karla"
                    fontSize="22px"
                    fontWeight="700"
                    color="#fff"
                  >
                    200 TADA
                  </Typography>
                </Box>
                <Box mx={3}>
                  <Typography
                    fontFamily="karla"
                    fontSize="15px"
                    fontWeight="400"
                    color="#fff"
                  >
                    Wallet Address
                  </Typography>
                  <Typography
                    fontFamily="karla"
                    fontSize="22px"
                    fontWeight="700"
                    color="#fff"
                  >
                    Oa4x....4a55
                  </Typography>
                </Box>
                {!matches && (
                  <StyledButton width="180px" style={{ height: "48px" }}>
                    Disconnect
                    <PowerSettingsNewIcon
                      style={{
                        color: "#000",
                        fontSize: "25px",
                        paddingLeft: "8px",
                      }}
                    />
                  </StyledButton>
                )}
              </Box>
            </Box>
            <Box sx={{ mx: 2, borderBottom: "3px solid #918ba9" }} />

            <Grid container spacing={5} p={2}>
              <Grid item xs={12} md={6}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    fontFamily="karla"
                    fontSize={matches ? "13px" : "20px"}
                    fontWeight="400"
                    color="#fff"
                  >
                    Amount To Stake
                  </Typography>
                  <Typography
                    fontFamily="karla"
                    fontSize={matches ? "13px" : "20px"}
                    fontWeight="400"
                    color="#fff"
                  >
                    USDT Value: --{" "}
                    <span style={{ fontWeight: "700" }}>$2,000.12</span>
                  </Typography>
                </Box>
                <Box
                  mt={1}
                  sx={{
                    bgcolor: "rgb(255,255,255,0.2)",
                    borderRadius: "10px",
                    width: "100%",
                    height: "55px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <input
                    style={{
                      height: "40px",
                      width: matches ? "50%" : "80%",
                      fontSize: "17px",
                      fontWeight: "500",
                      textAlign: "left",
                      color: "#fff",
                      fontFamily: "karla",
                      backgroundColor: "transparent",
                      paddingLeft: "15px",
                      border: "none",
                      outline: "none",
                    }}
                    type="number"
                    placeholder="Enter Amount"
                    value={amount}
                    name="usdt"
                    onChange={(e) => setAmount(e.target.value)}
                  />

                  <Box
                    sx={{
                      fontSize: "17px",
                      fontWeight: "500",
                      color: "#fff",
                      cursor: "pointer",
                      pr: 2,
                    }}
                  >
                    Set Max
                  </Box>
                </Box>

                <Box
                  mt={3}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    fontFamily="karla"
                    fontSize={matches ? "13px" : "20px"}
                    fontWeight="400"
                    color="#fff"
                  >
                    Amount To Stake
                  </Typography>
                  <Typography
                    fontFamily="karla"
                    fontSize={matches ? "13px" : "20px"}
                    fontWeight="400"
                    color="#fff"
                  >
                    USDT Value: --{" "}
                    <span style={{ fontWeight: "700" }}>$2,000.12</span>
                  </Typography>
                </Box>
                <Box
                  mt={1}
                  sx={{
                    bgcolor: "rgb(255,255,255,0.2)",
                    borderRadius: "10px",
                    width: "100%",
                    height: "55px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "700",
                      color: "#fff",
                      pl: 2,
                    }}
                  >
                    64 Days
                  </Typography>

                  <Box
                    sx={{
                      fontSize: "17px",
                      fontWeight: "500",
                      color: "#fff",
                      cursor: "pointer",
                      pr: 2,
                    }}
                  >
                    Set Max
                  </Box>
                </Box>
                <Typography
                  sx={{
                    my: 2,
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#dcdcdc",
                    px: 1,
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </Typography>
                <StyledButton
                  width="100%"
                  style={{ height: "50px", marginBottom: "10px" }}
                >
                  Stake Now
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box display="flex">
                  <img src={slogo} width="38px" alt="" />
                  <Typography
                    sx={{
                      pl: 1,
                      fontSize: "25px",
                      fontWeight: "400",
                      color: "#fff",
                    }}
                  >
                    Pool Title
                  </Typography>
                </Box>
                <Box
                  mt={1.5}
                  sx={{
                    bgcolor: "rgb(255,255,255,0.2)",
                    borderRadius: "10px",
                    width: "100%",
                    height: "55px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "400",
                      color: "#fff",
                      pl: 2,
                    }}
                  >
                    Pending Rewards
                  </Typography>

                  <Box
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#fff",
                      cursor: "pointer",
                      pr: 2,
                    }}
                  >
                    0 TADA
                    <br />
                    <span
                      style={{
                        color: "#CDCDCD",
                        fontSize: "14px",
                        marginLeft: "10px",
                      }}
                    >
                      $0.00
                    </span>
                  </Box>
                </Box>
                <Box
                  mt={1.5}
                  sx={{
                    bgcolor: "rgb(255,255,255,0.2)",
                    borderRadius: "10px",
                    width: "100%",
                    height: "55px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "400",
                      color: "#fff",
                      pl: 2,
                    }}
                  >
                    You Staked
                  </Typography>

                  <Box
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#fff",
                      cursor: "pointer",
                      pr: 2,
                    }}
                  >
                    0 TADA
                    <br />
                    <span
                      style={{
                        color: "#CDCDCD",
                        fontSize: "14px",
                        marginLeft: "10px",
                      }}
                    >
                      $0.00
                    </span>
                  </Box>
                </Box>
                <Box
                  mt={1.5}
                  sx={{
                    bgcolor: "rgb(255,255,255,0.2)",
                    borderRadius: "10px",
                    width: "100%",
                    height: "45px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "400",
                      color: "#fff",
                      pl: 2,
                    }}
                  >
                    APY
                  </Typography>

                  <Box
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#fff",
                      cursor: "pointer",
                      pr: 2,
                    }}
                  >
                    18.16%
                  </Box>
                </Box>
                <Box
                  mt={1.5}
                  sx={{
                    bgcolor: "rgb(255,255,255,0.2)",
                    borderRadius: "10px",
                    width: "100%",
                    height: "55px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "400",
                      color: "#fff",
                      pl: 2,
                    }}
                  >
                    Total Staked
                  </Typography>

                  <Box
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#fff",
                      cursor: "pointer",
                      pr: 2,
                    }}
                  >
                    ~$48,357.412
                    <br />
                    <span
                      style={{
                        color: "#CDCDCD",
                        fontSize: "14px",
                      }}
                    >
                      20,843.712 TADA
                    </span>
                  </Box>
                </Box>
                <Box
                  mt={2.3}
                  display="flex"
                  flexDirection={matches ? "column" : "row"}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box
                    mb={matches ? 2 : 0}
                    sx={{
                      width: matches ? "100%" : "48%",
                      height: "45px",
                      color: "#fff",
                      fontSize: "16px",
                      cursor: "pointer",
                      background: "transparent",
                      border: "2px solid #fff",
                      borderRadius: "25px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Claim Rewards
                  </Box>

                  <StyledButton
                    onClick={handleOpen}
                    width={matches ? "100%" : "48%"}
                    style={{ height: "50px" }}
                  >
                    Withdraw From Pool
                  </StyledButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
