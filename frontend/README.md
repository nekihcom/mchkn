# Frontend

Next.js（App Router）を使用したフロントエンドアプリケーション

## 技術スタック

- **Framework**: Next.js 15.4.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Storybook**: v9.0.18
- **Testing**: Vitest + Playwright

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# Storybookの起動
npm run storybook

# テストの実行
npm run test

# ビルド
npm run build
```

## ディレクトリ構造

```
src/
├── app/           # App Router ページ
├── components/    # 汎用UIコンポーネント
│   └── ui/       # shadcn/ui コンポーネント
├── lib/          # ユーティリティ関数
├── hooks/        # カスタムフック
├── types/        # 型定義
├── constants/    # 定数
├── config/       # 設定値・環境変数ラッパー
├── services/     # 外部APIラッパーやビジネスロジック
└── stories/      # Storybookストーリー

demo/             # フロントエンドから実行できる手動テストページ
```

## 開発ガイドライン

### コンポーネント開発

1. **shadcn/uiの使用**: UIは極力自作せず、必ずshadcn/uiのコンポーネントを利用
2. **Storybook**: 新しいコンポーネントは必ずStorybookストーリーを作成
3. **型安全性**: TypeScriptの型エラーは常にゼロを維持

### データハンドリング

- **ユーザー操作に依存しない**: server components + Server Actions
- **ユーザー操作に依存する**: client components + Server Actions + useSWR

### テスト

- **Storybook**: UIベースのテストページを`demo/`ディレクトリに配置
- **Vitest**: ユニットテストとコンポーネントテスト
- **Playwright**: E2Eテスト

## 利用可能なスクリプト

- `npm run dev` - 開発サーバー起動
- `npm run build` - プロダクションビルド
- `npm run start` - プロダクションサーバー起動
- `npm run lint` - ESLint実行
- `npm run storybook` - Storybook起動
- `npm run test` - テスト実行
- `npm run test:ui` - テストUI起動
- `npm run test:coverage` - カバレッジ付きテスト実行

## アクセス

- **開発サーバー**: http://localhost:3000
- **Storybook**: http://localhost:6006
- **Demoページ**: http://localhost:3000/demo
