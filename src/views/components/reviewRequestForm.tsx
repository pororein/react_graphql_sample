import * as React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from '@material-ui/core/InputLabel';
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
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
                <CardContent className={classes.cardContent}>
                    <TextField className={classes.textField} label={"タイトル"} />
                </CardContent>
                <CardContent className={classes.cardContent}>
                    <TextField className={classes.textField} label={"ドキュメントURL"} />
                </CardContent>
                <CardContent className={classes.cardContent}>
                    <TextField className={classes.textField} label={"タグ"} />
                </CardContent>
                <CardContent className={classes.cardContent}>
                    <TextField className={classes.textField} label={"参加者"} />
                </CardContent>
                <CardContent className={classes.cardContent}>
                    <TextField className={classes.textField} label={"チェックリスト"} />
                </CardContent>
                <CardContent className={classes.cardContent}>
                    <InputLabel id="review-request-scope-label">公開範囲</InputLabel>
                    <Select className={classes.textField}
                        labelId="review-request-scope-label"
                        value={""}
                    >
                        <MenuItem value={"PUBLIC"}>公開</MenuItem>
                        <MenuItem value={"PRIVATE"}>非公開</MenuItem>
                        <MenuItem value={"PROJECT"}>プロジェクトメンバのみ</MenuItem>
                    </Select>
                </CardContent>
            </Card>
        </Container>
    );
}