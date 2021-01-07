import graphqlClient from '../graphql/client';
import authQuery, { AuthQueryParameter } from '../graphql/queries/auth';
import getAllUserQuesry from '../graphql/queries/getAllUser';
import getAllCheckListQuesry from '../graphql/queries/getAllCheckList';
import createReviewInfoQuery, { CreateReviewInfoQueryType } from '../graphql/queries/createReviewInfo';
import { User } from '../../types/User';
import { CheckList } from '../../types/CheckList';
import { ReviewInfo } from '../../types/ReviewInfo';
import { ReviewStatus } from '../../types/ReviewStatus';

export async function authFetch(eMailAddress: string, password: string): Promise<User> {
  const param: AuthQueryParameter = {
    eMailAddress: eMailAddress,
    password: password
  };
  const result = await graphqlClient.request(authQuery, param);

  if (!result.userOne) {
    throw new Error(`user not found`);
  }

  let userInfo: User = result.userOne;

  return userInfo;
};

export async function getAllUserFetch() {
  let result = await graphqlClient.request(getAllUserQuesry);
  let users: User[] = result.userMany;

  return users;
}

export async function getAllCheckListsFetch() {
  let result = await graphqlClient.request(getAllCheckListQuesry);
  let checkLists: CheckList[] = result.checkListMany;

  return checkLists;
}
export async function putReviewInfoFetch(reviewInfo: ReviewInfo) {

  reviewInfo.status = ReviewStatus.NEW;

  let result = await graphqlClient.request(createReviewInfoQuery, reviewInfo);

  if (!result) {
    throw new Error(`failed create review request`);
  }

  return result;
}