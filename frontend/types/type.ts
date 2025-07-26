type TThumbnail = {
  url: string;
  height: number;
  width: number;
}

type TKeywords = string[]

export type TBlogDataRow = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  post_dt: string;
  category: string;
  keywords: string;
  thumbnail: TThumbnail;
  body: string;
}

export type TBlogData = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  post_dt: string;
  category: string;
  keywords: TKeywords;
  thumbnail: TThumbnail;
  body: string;
}