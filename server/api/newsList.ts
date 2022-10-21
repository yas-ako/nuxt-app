import type { IncomingMessage, ServerResponse } from 'http'
import news from './news'
import { Post } from './types'

export default async (req: IncomingMessage, res: ServerResponse) => {
  const queries = {
    fields: 'id,title,publishedAt,revisedAt,tag,writer,description',
  }

  const data = news.getList<Post>({
    endpoint: 'news',
    queries: queries
  })

  return data
}