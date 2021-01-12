import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
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
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import userInfoState from '../../state/atom/userInfo';
import { getAllUserFetch, getAllCheckListsFetch, putReviewInfoFetch } from "../../common/api/fetch";
import { reviewRequestFormTypes } from "../../state/ducks/reviewRequestForm";
import { User } from "../../types/User";
import { CheckList } from '../../types/CheckList';
import { ReviewMember } from '../../types/ReviewMember';
import { Scope } from "../../types/Scope";
import { ReviewInfo } from "../../types/ReviewInfo";

export type Props = {
    state: reviewRequestFormTypes.ReviewRequestFormState
    onChangeTitle: (title: string) => void
    onChangeDocPath: (path: string) => void
    onChangeTags: (tags: string[]) => void
    onChangeReviewee: (members: User[]) => void
    onChangeReviewer: (members: User[]) => void
    onChangeCheckList: (checkLsit: CheckList[]) => void
    onChangeScope: (scope: number) => void
    onHandleClickCreate: () => void
    onCloseAlert: () => void
};

type CreateFetchState = '' | 'FAILED' | 'SUCCESS';

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

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function reviewRequestForm() {

  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [docPath, setDocPath] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [revieweeList, setRevieweeList] = useState<ReviewMember[]>([]);
  const [reviewerList, setReviewerList] = useState<ReviewMember[]>([]);
  const [checklist, setChecklist] = useState<CheckList[]>([]);
  const [scope, setScope] = useState<Scope>(Scope.PUBLIC);
  const [createFetchState, setCreateFetchState] = useState<CreateFetchState>('');
  const [selectUserList, setSelectUserList] = useState<User[]>([]);
  const [selectCheckList, setSelectCheckList] = useState<CheckList[]>([]);

  useEffect(() => {
    let unmounted = false;

    (async () => {
      let userList = await getAllUserFetch();
      let checkList = await getAllCheckListsFetch();

      if (!unmounted) {
        setSelectUserList(userList);
        setSelectCheckList(checkList);
      };
    })

    return () => { unmounted = true; };
  })

  const userInfo = useRecoilValue(userInfoState);

  const createReviewRequest = () => {
    let reviewInfo: ReviewInfo = {
      title: title,
      documentPath: docPath,
      tags: tags,
      reviewerList: reviewerList,
      revieweeList: revieweeList,
      checkLists: checklist,
      scope: scope,
      creator: userInfo._id,
    }
    putReviewInfoFetch(reviewInfo);
  }

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
              <TextField className={classes.textField} label={"タイトル"}
                value={title}
                onChange={(event) =>
                  setTitle(event.target.value as string)}
              />
            </CardContent>
          </Box>
          <Box display="flex" mx="auto" justifyContent="center" alignItems="center">
            <CardContent className={classes.cardContent}>
              <TextField className={classes.textField} label={"ドキュメントURL"} value={docPath}
                onChange={(event) => setDocPath(event.target.value as string)} />
            </CardContent>
          </Box>
          <Box display="flex" my="auto" mx="auto" justifyContent="center" alignItems="center">
            <CardContent>
              <Autocomplete multiple
                value={tags}
                onChange={(event, newValue) => { setTags(newValue,);}}
                freeSolo
                options={tags}
                getOptionLabel={(option) => `${option}`}
                renderTags={(tagValue, getTagProps) =>
                  tagValue.map((option, index) => (
                    <Chip label={`${option}`} {...getTagProps({ index })}
                      disabled={!tags.find((tag) => {
                      option === tag }) ? false : true }/>
                  ))
                }
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                renderInput={(params) => (
                  <TextField {...params} className={classes.textField} label="タグ" />
                )}
              />
            </CardContent>
          </Box>
          <Box display="flex" my="auto" mx="auto" justifyContent="center" alignItems="center">
            <CardContent>
              <Autocomplete multiple
                value={reviewerList}
                onChange={(event, newValue) => {
                  setReviewerList(newValue,);
                }}
                options={selectUserList}
                getOptionLabel={(option) => `${option.lastName} ${option.firstName}`}
                renderTags={(tagValue, getTagProps) =>
                  tagValue.map((option, index) => (
                    <Chip label={`${option.lastName} ${option.firstName}`} {...getTagProps({ index })}
                      disabled={!reviewerList.find((member)=> { option._id! === member._id! }) ? false : true}
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
              <Autocomplete multiple
                value={revieweeList}
                onChange={(event, newValue) => {
                  setRevieweeList(
                    newValue,
                  );
                }}
                options={selectUserList}
                getOptionLabel={(option) => `${option.lastName} ${option.firstName}`}
                renderTags={(tagValue, getTagProps) =>
                  tagValue.map((option, index) => (
                    <Chip label={`${option.lastName} ${option.firstName}`} {...getTagProps({ index })}
                      disabled={!revieweeList.find((member)=> { option._id! === member._id! }) ? false : true}
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
              <Autocomplete multiple
                value={checklist}
                onChange={(event, newValue) => {
                  setChecklist(
                    newValue,
                  );
                }}
                options={selectCheckList}
                getOptionLabel={(option) => `${option.title}`}
                renderTags={(tagValue, getTagProps) =>
                  tagValue.map((option, index) => (
                    <Chip label={`${option.title}`} {...getTagProps({ index })}
                      disabled={!checklist.find((checkList)=> { option._id! === checkList._id! }) ? false :true }
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
                value={scope}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => setScope(event.target.value as number)}
              >
                <MenuItem value={0}>公開</MenuItem>
                <MenuItem value={1}>非公開</MenuItem>
                <MenuItem value={2}>プロジェクトメンバのみ</MenuItem>
              </Select>
            </CardContent>
          </Box>
          <Box display="flex" mx="auto" my="25px" justifyContent="center" alignItems="center">
            <CardContent className={classes.cardContent}>
              <Button variant="contained" color="primary" onClick={() => { createReviewRequest() }}>
                CREATE REVIEW REQUEST
              </Button>
            </CardContent>
          </Box>
        </Card>
      </Box>
      <Snackbar open={(createFetchState == 'SUCCESS' ? true : false)} autoHideDuration={6000} onClose={() => { setCreateFetchState('') }}>
        <Alert severity="success" onClose={() => { setCreateFetchState('') }}>
          Review Info Create Success!
        </Alert>
      </Snackbar>
      <Snackbar open={(createFetchState == 'FAILED' ? true : false)} autoHideDuration={6000} onClose={() => { setCreateFetchState('') }}>
        <Alert severity="error" onClose={() => { setCreateFetchState('') }}>
          Review Info Create Failed
        </Alert>
      </Snackbar>
    </Container>
  );
}