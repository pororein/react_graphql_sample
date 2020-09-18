type AppConfig = {
    serverURL: string
};

const mode = process.env.NODE_ENV;
let appConfig: AppConfig;

/**
 * TODO: サーバーサイドに何かしらクラウドが使えるならproductionのURLは変更する
 * 
 * webpackのビルドモードで設定を変更する
 * 本番での事故を防ぐ為、予期しないビルドモードが指定された場合はdevelop用の設定を適用する
 */
switch (mode) {
    case "production":
        appConfig = {
            serverURL: "http://localhost:8080"
        };
        break;
    case "development":
    default:
        appConfig = {
            serverURL: "http://localhost:8080"
        };
        break;
}

export {
    AppConfig
};

export default appConfig;