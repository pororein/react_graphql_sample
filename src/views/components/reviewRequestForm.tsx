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
import Button from '@material-ui/core/Button';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { reviewRequestFormTypes } from "../../state/ducks/reviewRequestForm";
import { User, Scope } from "../../types";
import { CheckList } from '../../types/CheckList';
import { ReviewMember } from '../../types/ReviewMember';

export type Props = {
    state: reviewRequestFormTypes.ReviewRequestFormState
    onChangeTitle: (title: string) => void
    onChangeDocPath: (path: string) => void
    onChangeTag: (index: number, tag: string) => void
    onChangeReviewee: (index: number, id: string) => void
    onChangeReviewer: (index: number, id: string) => void
    onChangeCheckList: (index: number, id: string) => void
    onChangeScope: (scope: number) => void
    onHandleClickCreate: () => void
};

const useStyles = makeStyles((theme) => ({
    card: {
        margin: "auto",
        height: "auto",
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

function rednerTagFields(
    className: string,
    fieldSize: number,
    changeHandler: (index: number, value: string) => void): JSX.Element[] {
    
    let renderList: JSX.Element[] = [];

    for (let i = 0; i <= fieldSize; i++) {
        renderList.push(
            <Box display="flex" my="auto" mx="auto" justifyContent="center" alignItems="center">
                <TextField
                    className={className}
                    key={`tag-field-${i}`}
                    onChange={event => { changeHandler(i, event.target.value) }} />
            </Box>
        );
    }

    return renderList;
}

function rednerMemberSelectors(
    className: string,
    valueList: ReviewMember[],
    labelId: string,
    userList: User[],
    changeHandler: (index: number, value: string) => void): JSX.Element[] {
    
    let renderList: JSX.Element[] = [];

    for (let i = 0; i <= valueList.length; i++) {
        let value = i == valueList.length ? 'none' : valueList[i].member.id;

        renderList.push(
            <Box display="flex" my="auto" mx="auto" justifyContent="center" alignItems="center">
                <Select
                    className={className}
                    key={`member-selector-${i}`}
                    labelId={labelId}
                    value={value}
                    onChange={(event: React.ChangeEvent<{value: unknown}>) => changeHandler(i, event.target.value as string)}
                >
                    <MenuItem key={`member-item-none`} value={"none"}>-</MenuItem>
                        {userList.map((user, index) => {
                            return <MenuItem key={`member-item-${index}`} value={user.id}>{`${user.firstName} ${user.lastName}`}</MenuItem>
                        })}
                </Select>
            </Box>
        );
    }

    return renderList;
}

function rednerCheckListSelectors(
    className: string,
    valueList: string[],
    checkLists: CheckList[],
    changeHandler: (index: number, value: string) => void): JSX.Element[] {
    
    let renderList: JSX.Element[] = [];

    for (let i = 0; i <= valueList.length; i++) {
        let value = i == valueList.length ? 'none' : valueList[i];

        renderList.push(
            <Box display="flex" my="auto" mx="auto" justifyContent="center" alignItems="center">
                <Select
                    className={className}
                    key={`checklist-selector-${i}`}
                    labelId="review-reques-checklistIds-label"
                    value={value}
                    onChange={(event: React.ChangeEvent<{value: unknown}>) => changeHandler(i, event.target.value as string)}
                >
                    <MenuItem key={`checklist-item-none`} value={"none"}>-</MenuItem>
                    {checkLists.map((checkList, index) => {
                        return <MenuItem key={`checklist-item-${index}`} value={checkList.id}>{`${checkList.title}`}</MenuItem>
                    })}
                </Select>
            </Box>
        );
    }

    return renderList;
}

export default function reviewRequestForm({
    state,
    onChangeTitle,
    onChangeDocPath,
    onChangeTag,
    onChangeReviewee,
    onChangeReviewer,
    onChangeCheckList,
    onChangeScope,
    onHandleClickCreate }: Props) {
    
    const classes = useStyles();

    return (
        <Container>
            <Box m="auto" justifyContent="center" alignItems="center">
                <Card className={classes.card}>
                    <Box display="flex" mx="auto" justifyContent="center" alignItems="center">
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.typography} variant="h4" component="p" display="block">
                                レビュー作成フォーム
                            </Typography>
                        </CardContent>
                    </Box>
                    <Box display="flex" mx="auto" justifyContent="center" alignItems="center">
                        <CardContent className={classes.cardContent}>
                            <TextField className={classes.textField} label={"タイトル"} onChange={(event) => onChangeTitle(event.target.value as string)} />
                        </CardContent>
                    </Box>
                    <Box display="flex" mx="auto" justifyContent="center" alignItems="center">
                        <CardContent className={classes.cardContent}>
                            <TextField className={classes.textField} label={"ドキュメントURL"} onChange={(event) => onChangeDocPath(event.target.value as string)} />
                        </CardContent>
                    </Box>
                    <Box display="flex" my="auto" mx="auto" justifyContent="center" alignItems="center">
                        <CardContent>
                            <InputLabel id="review-request-tags-label">タグ</InputLabel>
                            {rednerTagFields(classes.textField, state.reviewInfo!.tags!.length, onChangeTag)}
                        </CardContent>
                    </Box>
                    <Box display="flex" my="auto" mx="auto" justifyContent="center" alignItems="center">
                        <CardContent>
                            <InputLabel id="review-request-reviewer-label">レビュアー</InputLabel>
                            {
                                rednerMemberSelectors(
                                    classes.textField,
                                    state.reviewInfo!.reviewerList!,
                                    "review-request-reviewer-label",
                                    state.userList!,
                                    onChangeReviewer
                                )
                            }
                        </CardContent>
                    </Box>
                    <Box display="flex" my="auto" mx="auto" justifyContent="center" alignItems="center">
                        <CardContent>
                        <InputLabel id="review-request-reviewee-label">レビューイ</InputLabel>
                        {
                            rednerMemberSelectors(
                                classes.textField,
                                state.reviewInfo!.revieweeList!,
                                "review-request-reviewee-label",
                                state.userList!,
                                onChangeReviewee
                            )
                        }
                        </CardContent>
                    </Box>
                    <Box display="flex" my="auto" mx="auto" justifyContent="center" alignItems="center">
                        <CardContent>
                            <InputLabel id="review-request-checklist-label">チェックリスト</InputLabel>
                            {
                                rednerCheckListSelectors(
                                    classes.textField,
                                    state.reviewInfo!.checkListIds!,
                                    state.checkLists!,
                                    onChangeCheckList)
                            }
                        </CardContent>
                    </Box>
                    <Box display="flex" mx="auto" marginTop="20px" justifyContent="center" alignItems="center">
                        <CardContent>
                            <InputLabel id="review-request-scope-label">公開範囲</InputLabel>
                            <Select className={classes.textField}
                                labelId="review-request-scope-label"
                                value={state.reviewInfo!.scope!}
                                onChange={(event: React.ChangeEvent<{ value: unknown }>) => onChangeScope(event.target.value as number)}
                            >
                                <MenuItem value={0}>公開</MenuItem>
                                <MenuItem value={1}>非公開</MenuItem>
                                <MenuItem value={2}>プロジェクトメンバのみ</MenuItem>
                            </Select>
                        </CardContent>
                    </Box>
                    <Box display="flex" mx="auto" my="25px" justifyContent="center" alignItems="center">
                        <CardContent className={classes.cardContent}>
                            <Button variant="contained" color="primary" onClick={onHandleClickCreate}>
                                CREATE REVIEW REQUEST
                            </Button>
                        </CardContent>
                    </Box>
                </Card>
            </Box>
        </Container>
    );
}