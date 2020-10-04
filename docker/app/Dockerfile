FROM node:latest

ENV MONGO_DB_HOST mongo
ENV MONGO_DB_USER review_system_admin 
ENV MONGO_DB_PASS rsa
ENV MONGO_DB_NAME review_system
ENV BACKEND_URL http://localhost:8080/

# フロントエンドのソースをトランスパイル〜バンドルする
WORKDIR /usr/reactApp/src/frontend
COPY ./src/frontend/ /usr/reactApp/src/frontend

WORKDIR /usr/reactApp/dist
WORKDIR /usr/reactApp
COPY ./package.json /usr/reactApp
COPY ./tsconfig.json /usr/reactApp
COPY ./webpack.config.js /usr/reactApp
COPY ./gulpfile.js /usr/reactApp

RUN npm install
RUN npm run build

# アプリケーションディレクトリを作成する
WORKDIR /usr/app

# アプリケーションの依存関係をインストールする
# ワイルドカードを使用して、package.json と package-lock.json の両方が確実にコピーされるようにします。
# 可能であれば (npm@5+)
COPY ./src/backend/mock/app/package*.json ./

RUN npm install
# 本番用にコードを作成している場合
# RUN npm install --only=production

# アプリケーションのソースをバンドルする
COPY ./src/backend/mock/app/ /usr/app/

# ビルドしたフロントエンド資産を移動
WORKDIR /usr/app/public
COPY ./dist/index.html /usr/app/public
RUN cp /usr/reactApp/dist/* /usr/app/public

# バックエンド起動
WORKDIR /usr/app
EXPOSE 8080
CMD [ "npm", "start" ]