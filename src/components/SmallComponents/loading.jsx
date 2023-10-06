import Backdrop from "@mui/material/Backdrop";
// import { makeStyles } from "@mui/styles";
import { RingLoader } from "react-spinners";

const classes = {
  backdrop: {
    zIndex: 220000000,
    color: "#fff",
  },
};

export default function Loading({ loading }) {
  // const classes = useStyles();
  return (
    <div>
      <Backdrop className={classes.backdrop} open={loading}>
        <RingLoader color="#be4bc8" size={150} />
      </Backdrop>
    </div>
  );
}
