import React, { useState, useRef, useEffect } from "react";
import { TextField, IconButton } from "@material-ui/core";
// import icons from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import SnackBar from "./Snackbar";
import Box from "@material-ui/core/Box";

export default function Home() {
  const balanceRef = useRef();
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const addBalance = (e) => {
    e.preventDefault();
    if (balanceRef.current.value.length === 0) {
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
    <div>
      <h1 class="card-title" align="center">
        <button variant="contained">
          <h1>My Bank</h1>
        </button>
      </h1>
      <br />

      <Box flexDirection="row-reverse" p={1} m={1}>
        <div class="card">
          <div class="card-body">
            <h2 class="card-title" align="left">
              This is Aakash MiniBank Info:
            </h2>
          </div>
        </div>
        <br />
        <div>
          <form>
            <Button variant="contained">
              <TextField
                id="filled-basic"
                type="text"
                label=" Total"
                value="=250"
                inputRef={balanceRef}
              />
              <br />
              <TextField
                id="filled-basic"
                type="text"
                label="Due"
                value="=50"
                inputRef={balanceRef}
              />
              <IconButton type="submit" onClick={addBalance}></IconButton>
            </Button>
          </form>
        </div>
      </Box>

      <br />
      <br />

      <div class="card" style={{ width: "100%" }}>
        <Box flexDirection="row-reverse" p={1} m={1}>
          <div class="card-body">
            <h2 class="card-title" align="left">
              This is Rojesh MiniBank Info:
            </h2>
          </div>

          <br />
          <div class="card">
            <form>
              <Button variant="contained">
                <TextField
                  id="filled-basic"
                  type="text"
                  label="total"
                  value="=250"
                  inputRef={balanceRef}
                />
                <TextField
                  id="filled-basic"
                  type="text"
                  label="Due"
                  value="=30"
                  inputRef={balanceRef}
                />

                <IconButton type="submit" onClick={addBalance}></IconButton>
              </Button>
            </form>
          </div>
        </Box>
      </div>

      <div className="App">
        <h1 class="card-title" align="center">
          <button variant="contained">
            <h1>total:500</h1>
            <h1>left:300</h1>
          </button>
        </h1>
        <br />
      </div>

      <SnackBar open={open} handleClose={handleClose} message={message} />
    </div>
  );
}
