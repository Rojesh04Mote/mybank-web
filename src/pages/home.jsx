import React, { useState, useRef, useEffect } from "react";
import { TextField, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/ADD";
import Button from "@material-ui/core/Button";
import SnackBar from "./snackbar";

export default function Home() {
  const balanceRef = useRef();
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const addBalance = (e) => {
    e.preventDefault();
    if (balanceRef.current.value.length == 0) {
      setMessage("Money is needed ");
      setOpen(true);
      return;
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    balanceRef.current.focus();
  }, []);

  return (
    <div className="App">
      <Button variant="contained">
        <h5>This is Rojesh and Aakash MiniBank </h5>
      </Button>
      <br />
      <form>
        <Button variant="contained">
          <TextField
            id="filled-basic"
            type="text"
            label=" Add Balance"
            variant="filled"
            inputRef={balanceRef}
          />
          <IconButton type="submit" onClick={addBalance}>
            <AddIcon />
          </IconButton>
        </Button>
      </form>

      <SnackBar open={open} handleClose={handleClose} message={message} />
    </div>
  );
}
