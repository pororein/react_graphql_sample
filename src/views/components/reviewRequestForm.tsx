import * as React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";

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
        height: "40px",
    },
    textField: {
        height: "40px",
        width: "400px",
    },
}));

export default function reviewRequestForm() {
    const classes = useStyles();

    return (
        <Container>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.typography}>
                        レビュー作成フォーム
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}