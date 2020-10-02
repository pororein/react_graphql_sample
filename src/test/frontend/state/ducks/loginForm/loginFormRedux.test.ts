import { call, put } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { loginFormOperations, loginFormSelectors, loginFormTypes } from '../../../../../frontend/state/ducks/loginForm';
import { authFetch, handleLogin } from '../../../../../frontend/state/ducks/loginForm/operations';
import graphqlClient from "../../../../../frontend/common/graphql/client";
import authQuery from "../../../../../frontend/common/graphql/queries/auth";

jest.mock('../../../../../frontend/common/graphql/client');

describe('Operations test', () => {
  test('update email test', () => {
    expect(loginFormOperations.updateEMail('test@email.com'))
      .toEqual({ type: "UPDATEEMAIL", eMailAddress: 'test@email.com' });
  });

  test('update password test', () => {
    expect(loginFormOperations.updatePassword('test'))
      .toEqual({ type: "UPDATEPASSWORD", password: 'test' });
  });

  test('cleaning test', () => {
    let cleaningLoginInfo: loginFormTypes.LoginInfo = {
      eMailAddress: '',
      password: ''
    }
    expect(loginFormOperations.cleaning())
      .toEqual({ type: "CLEANING", loginInfo: cleaningLoginInfo });
  });

  test('loggingin test', () => {
    expect(loginFormOperations.loggingIn())
      .toEqual({ type: "LOGGINGIN", status: "LOGGINGIN" });
  });

  test('failed test', () => {
    expect(loginFormOperations.failed())
      .toEqual({ type: "FAILED", status: "FAILED" });
  });

  test('success test', () => {
    expect(loginFormOperations.success())
      .toEqual({ type: "SUCCESS", status: "SUCCESS" });
  });

  describe('authFetch test', () => {

    test('success test', async () => {
      let successResultMockVal = {
        _id: '_id',
        firstName: 'firstName',
        lastName: 'lastName',
        role: 0
      }

      let inputLoginInfo: loginFormTypes.LoginInfo = {
        eMailAddress: 'test@example.com',
        password: 'test',
      }

      expect(await authFetch(inputLoginInfo))
        .toEqual(successResultMockVal);
    });

    test('user not found test', async () => {
      let inputLoginInfo: loginFormTypes.LoginInfo = {
        eMailAddress: 'bad@example.com',
        password: 'bad',
      }

      await expect(authFetch(inputLoginInfo))
        .rejects.toThrow('user not found');
    });

    test('eMailAddress empty test', async () => {
      let inputLoginInfo: loginFormTypes.LoginInfo = {
        eMailAddress: '',
        password: 'test',
      }

      await expect(authFetch(inputLoginInfo))
        .rejects.toThrow('user not found');
    });

    test('password empty test', async () => {
      let inputLoginInfo: loginFormTypes.LoginInfo = {
        eMailAddress: 'test@example.com',
        password: '',
      }

      await expect(authFetch(inputLoginInfo))
        .rejects.toThrow('user not found');
    });
  });
})