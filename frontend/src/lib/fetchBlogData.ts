import { TBlogData, TBlogDataRow } from "../../types/type";
import { microCmsClient } from "./microcms";
import { formatDateToYYYYMMDD } from "./utils";

/**
 * トップページ用のmicroCMSデータ取得関数
 * 取得失敗時は空配列を返す
 */
// ブログ記事の型定義
export async function fetchBlogDataList( limit: number ): Promise<TBlogData[]> {
  const fetchResult: { contents: TBlogDataRow[] } = await microCmsClient.get({
    endpoint: 'blog', // 'blog'はmicroCMSのエンドポイント名
    queries: {
      fields: 'id,createdAt,updatedAt,publishedAt,revisedAt,title,post_dt,category,keywords,thumbnail,body',
      limit: limit
    },
  });

  const blogDataListRow = fetchResult.contents;
  
  const blogDataList: TBlogData[] = blogDataListRow.map((blogDataRow: TBlogDataRow) => {
    return {
      id: blogDataRow.id,
      createdAt: formatDateToYYYYMMDD(blogDataRow.createdAt),
      updatedAt: formatDateToYYYYMMDD(blogDataRow.updatedAt),
      publishedAt: formatDateToYYYYMMDD(blogDataRow.publishedAt),
      revisedAt: formatDateToYYYYMMDD(blogDataRow.revisedAt),
      title: blogDataRow.title,
      post_dt: formatDateToYYYYMMDD(blogDataRow.post_dt),
      category: blogDataRow.category,
      keywords: blogDataRow.keywords.split(','),
      thumbnail: blogDataRow.thumbnail,
      body: blogDataRow.body,
    };
  });

  return blogDataList;
}