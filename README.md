# 自己紹介サイト

ソーシャルリンクをまとめた自己紹介ページです。

## 技術スタック

- **フレームワーク**: React 18 + Vite
- **スタイリング**: TailwindCSS 4
- **UIコンポーネント**: Radix UI

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
│   └── components/
│       └── ui/       # UIコンポーネント
└── styles/
    ├── index.css
    ├── tailwind.css
    └── theme.css
```

## カスタマイズ

`src/app/App.tsx` を編集して以下をカスタマイズできます：

- プロフィール画像
- 名前・自己紹介文
- ソーシャルリンク

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