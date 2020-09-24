# Smart Review App

## 概要

レビュー記録をスマートに作成するツール

## 動作確認方法

※docker, docker-composeが使える環境を想定

以下のコマンドをルートディレクトリで実行
```
    docker-compose up --build -d
```

以下のURLにブラウザでアクセスする
```
    http://localhost:8080
```

ブラウザでアクセスするとログイン画面が表示されるので、以下のID/PASSでログイン可能
```
    ID  : test@example.com
    PASS: test
```

## 目的

- React-Reduxでのデザインパターンを習得する
- 自身のアイデアをアプリにアウトプットしてみる

## 使用技術要素

- React
- Redux
- Redux-Saga
- GraphQL
- postgresql
- Material UI
- plantuml

## React のバージョン

v16.13.1<br>
