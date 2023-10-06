import { Alert, Box, Snackbar } from "@mui/material";
import { Button } from "@mui/material";

export function ToastNotify({ alertState, setAlertState }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={alertState.open}
      autoHideDuration={10000}
      key={"top center"}
      onClose={() => setAlertState({ ...alertState, open: false })}
    >
      <Alert
        onClose={() => setAlertState({ ...alertState, open: false })}
        severity={alertState.severity}
      >
        {alertState.message}
      </Alert>
    </Snackbar>
  );
}

export function StyledButton({ children, ...props }) {
  return (
    <>
      <Button
        {...props}
        sx={{
          color: "#000",
          background: "#2ee7be",
          fontSize: "16px",
          // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          textTransform: "capitalize",
          //   fontFamily: "Josefin Sans",
          borderRadius: "25px",
          width: props.width,
          "&.Mui-disabled": {
            color: "#979EA7",
          },
          "&:hover": {
            background: "#2ee7be",
          },
        }}
      >
        {children}
      </Button>
    </>
  );
}

export function StyledText({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#fff",
          fontSize: "18px",
          fontFamily: "EXO 2",
          fontWeight: "400",
          mr: props.mr,
        }}
      >
        {children}
      </Box>
    </>
  );
}
export function StyledTitle({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#000000",
          fontSize: "40px",
          //   fontFamily: "Josefin Sans",
          fontWeight: "700",
          mr: props.mr,
        }}
      >
        {children}
      </Box>
    </>
  );
}
