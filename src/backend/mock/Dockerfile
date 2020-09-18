FROM node:latest

ENV MONGO_DB_HOST mongo
ENV MONGO_DB_USER review_system_admin 
ENV MONGO_DB_PASS rsa
ENV MONGO_DB_NAME review_system
ENV BACKEND_URL http://localhost:8080/

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストールする
# ワイルドカードを使用して、package.json と package-lock.json の両方が確実にコピーされるようにします。
# 可能であれば (npm@5+)
COPY ./app/package*.json ./

RUN npm install
# 本番用にコードを作成している場合
# RUN npm install --only=production

# アプリケーションのソースをバンドルする
COPY ./app/ /usr/src/app/

EXPOSE 8080
CMD [ "npm", "start" ]