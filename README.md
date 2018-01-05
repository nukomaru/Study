# Study
 - 自主学習用のリポジトリ

## Git

### コミットメッセージルール

#### 接頭句
 - [fix]：バグ修正
 - [add]：新規（ファイル）機能追加
 - [update]：機能修正（バグではない）
 - [remove]：削除（ファイル）
 
 #### サンプル
  - [fix] 削除フラグが更新されない不具合の修正
  - [add] 検索機能の作成
  - [update] orで検索出来るように機能拡張
  - [remove] 検索機能削除により不要となったファイルの削除

## コマンド一覧

### 設定ファイル作成
 - `yarn init -y`
   - package.jsonの作成
 - `yarn eslint --init`
   - .eslintrc.jsonの作成

### パッケージインストール
 - `yarn`
   - package.jsonに記載しているモジュールのインストール
 - `yarn add jQuery`
   - jQueryのインストール
 - `yarn add react react-dom`
   - Reactのインストール
 - `yarn add --dev webpack babel-loader babel-core babel-preset-react babel-preset-es2015`
   - webpack, Babelのインストール
   - --devオプションは開発環境で利用するモジュールをインストール、package.jsonに記録するときのためのオプション
 - `yarn add --dev webpack-dev-server`
   - webpack-dev-serverのインストール(ローカルサーバ作成のため)
 - `yarn add --dev eslint`
   - ESLintのインストール
 - `yarn add --dev eslint-plugin-react`
   - Reactのためのパッケージのインストール
 - `yarn add material-ui react-tap-event-plugin`
   - Material-UIのインストール
 
### 実行コマンド
 - `yarn webpack`
   - バンドル実行
 - `yarn webpack-dev-server`(設定ファイルの更新により以降`yarn start`で代用可能)
   - サーバ起動
 - `yarn eslint ファイル名`
   - 対象ファイルの構文をチェック