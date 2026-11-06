# 自己紹介サイト

ソーシャルリンクをまとめた自己紹介ページです。

## 技術スタック

- **フレームワーク**: React 18 + Vite
- **スタイリング**: CSS（TailwindCSS 4のビルド設定を併用）
- **アイコン**: Material Icons（MUI）

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# 本番ビルド
npm run build
```

## プロジェクト構成

```
src/
├── main.tsx          # エントリーポイント
├── app/
│   ├── App.tsx       # メインアプリケーション
├── assets/
│   └── network-background.webp # サイト専用に生成した背景
└── styles/
    ├── index.css
    ├── tailwind.css
    └── theme.css
```

## カスタマイズ

`src/app/App.tsx` の `profiles` 配列でサービス名・URL・アイコンを編集できます。件数は配列から表示し、リンクが増えると次の段へ並びます。

スマホでは2列・最小72px高のShelfを表示します。画面幅に応じて3・4・5列へ広がります。配色や余白は `src/styles/theme.css`、黒とシアンの背景画像は `src/assets/network-background.webp` で管理します。

## Cloudflare Pages へのデプロイ

### GitHub連携での自動デプロイ

1. **GitHubにプッシュ**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin master
   ```

2. **Cloudflare Pagesでプロジェクト作成**
   - [Cloudflare Dashboard](https://dash.cloudflare.com/) にログイン
   - **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**
   - GitHubリポジトリを選択

3. **ビルド設定**
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

4. **デプロイ**
   - **Save and Deploy** をクリック
   - デプロイが完了すると、URLが発行されます

### 自動デプロイ
masterブランチにpushするたびに自動的にデプロイされます。

## ライセンス

© 2026 All rights reserved
