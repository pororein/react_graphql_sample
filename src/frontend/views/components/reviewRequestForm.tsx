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
import Autocomplete from '@material-ui/lab/Autocomplete';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Chip from '@material-ui/core/Chip';
import { reviewRequestFormTypes } from "../../state/ducks/reviewRequestForm";
import { User, Scope } from "../../types";
import { CheckList } from '../../types/CheckList';
import { ReviewMember } from '../../types/ReviewMember';

export type Props = {
    state: reviewRequestFormTypes.ReviewRequestFormState
    onChangeTitle: (title: string) => void
    onChangeDocPath: (path: string) => void
    onChangeTag: (index: number, tag: string) => void
    onChangeReviewee: (members: User[]) => void
    onChangeReviewer: (members: User[]) => void
    onChangeCheckList: (checkLsit: CheckList[]) => void
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
                <Autocomplete
                    key={`checklist-selector-${i}`}
                    options={checkLists}
                    getOptionLabel={(option: CheckList) => `${option.title}`}
                    onChange={(event, value: CheckList | null, reason) => { changeHandler(i, (!value ? 'none' : value!._id!)) }}
                    renderInput={(params) => <TextField {...params} label={`checkList`} variant="outlined" />}
                />
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
                            <Autocomplete
                                multiple
                                value={state.reviewInfo!.reviewerList!}
                                onChange={(event, newValue) => {
                                    onChangeReviewer(
                                        newValue,
                                    );
                                }}
                                options={state.userList!}
                                getOptionLabel={(option) => `${option.lastName} ${option.firstName}`}
                                renderTags={(tagValue, getTagProps) =>
                                    tagValue.map((option, index) => (
                                        <Chip
                                            label={`${option.lastName} ${option.firstName}`}
                                            {...getTagProps({ index })}
                                            disabled={!state.reviewInfo!.reviewerList!.find((member) => { option._id! === member._id! }) ? false : true }
                                        />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField {...params} className={classes.textField} label="レビュアー" />
                                )}
                            />
                        </CardContent>
                    </Box>
                    <Box display="flex" my="auto" mx="auto" justifyContent="center" alignItems="center">
                        <CardContent>
                            <Autocomplete
                                multiple
                                value={state.reviewInfo!.revieweeList!}
                                onChange={(event, newValue) => {
                                    onChangeReviewee(
                                        newValue,
                                    );
                                }}
                                options={state.userList!}
                                getOptionLabel={(option) => `${option.lastName} ${option.firstName}`}
                                renderTags={(tagValue, getTagProps) =>
                                    tagValue.map((option, index) => (
                                        <Chip
                                            label={`${option.lastName} ${option.firstName}`}
                                            {...getTagProps({ index })}
                                            disabled={!state.reviewInfo!.revieweeList!.find((member) => { option._id! === member._id! }) ? false : true }
                                        />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField {...params} className={classes.textField} label="レビューイ" />
                                )}
                            />
                        </CardContent>
                    </Box>
                    <Box display="flex" my="auto" mx="auto" justifyContent="center" alignItems="center">
                        <CardContent>
                            <Autocomplete
                                multiple
                                value={state.reviewInfo!.checkLists!}
                                onChange={(event, newValue) => {
                                    onChangeCheckList(
                                        newValue,
                                    );
                                }}
                                options={state.checkLists!}
                                getOptionLabel={(option) => `${option.title}`}
                                renderTags={(tagValue, getTagProps) =>
                                    tagValue.map((option, index) => (
                                        <Chip
                                            label={`${option.title}`}
                                            {...getTagProps({ index })}
                                            disabled={!state.reviewInfo!.checkLists!.find((checkList) => { option._id! === checkList._id! }) ? false : true }
                                        />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField {...params} className={classes.textField} label="チェックリスト" />
                                )}
                            />
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