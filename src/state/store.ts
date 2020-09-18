import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import rootReducer from "./ducks";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleWare from "redux-saga";
import { loginFormOperations } from "./ducks/loginForm";
import { menubarOperations } from "./ducks/menubar";
import { reviewRequestFormOperations } from "./ducks/reviewRequestForm";
import { createBrowserHistory } from "history";

interface ExtendedWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
  declare var window: ExtendedWindow;

export const history = createBrowserHistory();

export default function configureStore(preloadedState?: any) {
    const composeReduxDevToolsEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const sagaMiddleware = createSagaMiddleWare();
    const middlewares = [routerMiddleware(history), sagaMiddleware];

    const store = createStore(
        rootReducer(history),
        preloadedState,
        composeReduxDevToolsEnhancers(applyMiddleware(...middlewares)),
    );

  sagaMiddleware.run(loginFormOperations.rootSaga);
  sagaMiddleware.run(menubarOperations.rootSaga);
  sagaMiddleware.run(reviewRequestFormOperations.rootSaga);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./ducks', () => {
          store.replaceReducer(rootReducer(history));
        });
      }

    return store;
}