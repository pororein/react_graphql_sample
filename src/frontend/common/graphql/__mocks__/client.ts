import { GraphQLClient } from "graphql-request";
import { RequestDocument } from "graphql-request/dist/types";
import authQuery from "../queries/auth";

const clientMock: GraphQLClient = jest.createMockFromModule('graphql-request');

async function request(document: RequestDocument, variables?: any): Promise<any> {
  // 認証処理モック定義
  if (document === authQuery &&
    variables.hasOwnProperty('eMailAddress') &&
    variables.hasOwnProperty('password')) {
    
    // 正常ルートモック
    if (variables.eMailAddress == 'test@example.com' && 
      variables.password == 'test') {
      return {
        userOne: {
          _id: '_id',
          firstName: 'firstName',
          lastName: 'lastName',
          role: 0
        }
      }
    }

    // 異常ルートモック
    return { userOne: null }
  } else {
    // 上記に当てはまらない処理
    throw new Error(`bad argument by 'document' where operation is not defined.`);
  }
}

clientMock.request = request;

export default clientMock;