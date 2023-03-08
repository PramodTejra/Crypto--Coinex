import { makeStyles } from "@material-ui/core";
import React from "react";

const SelectButton = ({ children, selected, onClick }) => {

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

const useStyles = makeStyles({
    selectbutton: {
      border: "1px solid #41B8F8",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 50,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
    //   backgroundColor: selected ? "#41B8F8" : "",
    //   color: selected ? "black" : "",
    //   fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "#41B8F8",
        color: "black",
      },
      width: "22%",
      margin: 5,
    },
  });

export default SelectButton;
