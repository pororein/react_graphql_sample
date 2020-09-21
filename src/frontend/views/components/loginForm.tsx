import React from "react";
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
import { loginFormTypes } from "../../state/ducks/loginForm";

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
    color: '#fff',
  },
}));

export type Props = {
  state: loginFormTypes.Status,
  onChangeId: (id: string) => void,
  onChangePassword: (password: string) => void,
  login: () => void,
};

export default function loginForm({ state, onChangeId, onChangePassword, login }: Props): JSX.Element {

  const classes = useStyles();

  return (
    <Container>
      <Box m="auto" justifyContent="center" alignItems="center">
        <Card className={classes.card}>
          <Box display="flex" mx="auto" justifyContent="center" alignItems="center">
            <CardContent className={classes.cardHeader}>
            <Box display="flex" m="auto" justifyContent="center" alignItems="center">
              <Typography className={classes.typography} align="center" variant="h2" component="p" display="block">
                  Smart Review App
              </Typography>
              </Box>
            </CardContent>
          </Box>
          <Box display="flex" mx="auto" justifyContent="center" alignItems="center">
            <CardContent className={classes.cardContent}>
              <Box m="auto" justifyContent="center" alignItems="center">
                <TextField className={classes.textField} variant="outlined" InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
                  onChange={(event) => onChangeId(event.target.value)}
                  error={(state == "FAILED")}
                />
              </Box>
            </CardContent>
          </Box>
          <Box display="flex" mx="auto" justifyContent="center" alignItems="center">
            <CardContent className={classes.cardContent}>
              <Box mx="auto" justifyContent="center" alignItems="center">
                <TextField className={classes.textField} variant="outlined" type="password" InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                    ),
                }}
                  onChange={(event) => onChangePassword(event.target.value)}
                  error={(state == "FAILED")}
                />
              </Box>
            </CardContent>
          </Box>
          <Box display="flex" mx="auto" py="10px" justifyContent="center" alignItems="center">
            <Button variant="contained" color="primary" onClick={() => login()}>
              LOGIN
            </Button>
            <Backdrop className={classes.backdrop} open={(state == "LOGGINGIN")} >
              <CircularProgress color="inherit" />
            </Backdrop>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}