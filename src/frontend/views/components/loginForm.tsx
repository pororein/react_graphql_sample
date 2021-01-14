import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputAdornment from "@material-ui/core/InputAdornment";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import { push } from "connected-react-router";
import ROUTER_PATH from "../routerPath";
import userInfoStateAtom from "../../state/atom/userInfo";
import { authFetch } from "../../common/api/fetch";
import type { User } from "../../types/User";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "auto",
    height: "600px",
    width: "800px",
  },
  cardHeader: {
    height: "200px",
    width: "600px",
    display: "flex",
  },
  cardContent: {
    height: "60px",
  },
  typography: {
    height: "80px",
  },
  textField: {
    height: "40px",
    width: "400px",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

type LoginState = "" | "LOGGINGIN" | "SUCCESS" | "FAILED";

/**
 *
 * ログイン画面 コンポーネント
 * @export コンポーネント本体
 * @return {JSX.Element}
 */
export default function loginForm(): JSX.Element {
  const classes = useStyles();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loginState, setLoginState] = useState<LoginState>("");
  const setUserInfoState = useSetRecoilState(userInfoStateAtom);

  const login = (emailAddress: string, password: string) => {
    setLoginState("LOGGINGIN");

    authFetch(emailAddress, password)
      .then((result: User) => {
        push(ROUTER_PATH.CONSOLE_PATH);
        setUserInfoState(result);
        setLoginState("SUCCESS");
      })
      .catch((error) => {
        setLoginState("FAILED");
      });
  };

  return (
    <Container>
      <Box m="auto" justifyContent="center" alignItems="center">
        <Card className={classes.card}>
          <Box
            display="flex"
            mx="auto"
            justifyContent="center"
            alignItems="center"
          >
            <CardContent className={classes.cardHeader}>
              <Box
                display="flex"
                m="auto"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  className={classes.typography}
                  align="center"
                  variant="h2"
                  component="p"
                  display="block"
                >
                  Smart Review App
                </Typography>
              </Box>
            </CardContent>
          </Box>
          <Box
            display="flex"
            mx="auto"
            justifyContent="center"
            alignItems="center"
          >
            <CardContent className={classes.cardContent}>
              <Box m="auto" justifyContent="center" alignItems="center">
                <TextField
                  className={classes.textField}
                  value={emailAddress}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(event) => setEmailAddress(event.target.value)}
                  error={loginState == "FAILED"}
                />
              </Box>
            </CardContent>
          </Box>
          <Box
            display="flex"
            mx="auto"
            justifyContent="center"
            alignItems="center"
          >
            <CardContent className={classes.cardContent}>
              <Box mx="auto" justifyContent="center" alignItems="center">
                <TextField
                  className={classes.textField}
                  value={password}
                  variant="outlined"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(event) => setPassword(event.target.value)}
                  error={loginState == "FAILED"}
                />
              </Box>
            </CardContent>
          </Box>
          <Box
            display="flex"
            mx="auto"
            py="10px"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => login(emailAddress, password)}
            >
              LOGIN
            </Button>
            <Backdrop
              className={classes.backdrop}
              open={loginState == "LOGGINGIN"}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
