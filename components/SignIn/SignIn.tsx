import { Dialog, TextField } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./signin.module.css";
import { useAppDispatch } from "../../redux/hooks";
import { signin } from "../../redux/slices/authSlice";
import { users } from "../../mock/users";

const SignIn = () => {
  const [open, setOpen] = useState(true);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useAppDispatch();
  const authenticateUser = (e) => {
    e.preventDefault();
    const user = users?.find((item) => {
      return item.phone === phone && item.password === password;
    });
    if (user) {
      dispatch(signin({ phone }));
    } else {
      setError("Invalid Credentials");
    }
  };
  return (
    <Dialog open={open}>
      <div className={styles.signin}>
        <div className={styles.signin__header}>
          {/* <CloseIcon className={styles.signin__header_icon} /> */}
          <p className={styles.signin__header_title}>Sign In</p>
        </div>
        <form>
          <input
            className={styles.signin__input}
            type="number"
            placeholder="Mobile Number"
            onChange={(event) => setPhone(event?.target?.value)}
          />
          <input
            className={styles.signin__input}
            placeholder="Password"
            type="password"
            onChange={(event) => setPassword(event?.target?.value)}
          />
          {error ? <p className={styles.signin__error}>{error}</p> : null}

          <button
            type="submit"
            onClick={authenticateUser}
            className={styles.signin__button}
          >
            Sign In
          </button>
        </form>
      </div>
    </Dialog>
  );
};

export default SignIn;
