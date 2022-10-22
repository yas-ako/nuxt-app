import type { IncomingMessage, ServerResponse } from 'http'
import news from './news'
import { Post } from './types'
import * as url from "url";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const params = url.parse(req.url as string, true).query;
  const slug = params.slug;
  const data = news.getListDetail<Post>({
    endpoint: 'news',
    contentId: String(slug),
  })

  return data;
}