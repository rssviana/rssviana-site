import { Link } from '@tanstack/react-router'
import type { Post } from '@/types/posts'

export default function ArticleCard({ post }: { post: Post }) {
  return (
    <Link to="/artigos/$slug" params={{ slug: post.slug }} className="block text-left group">
      <div className="text-xs opacity-50 mb-1">{post.date}</div>
      <div className="text-lg group-hover:opacity-60 transition">{post.title}</div>
    </Link>
  )
}
