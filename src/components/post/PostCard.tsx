import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { PostCardProps } from "@/types/post"
import { formatDistanceToNow } from "date-fns"
import { ja } from "date-fns/locale"

export default function PostCard({post}: PostCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow w-80 p-0">
      {post.topImage && (
        <div className="relative w-full h-48">
          <Image 
            src={post.topImage} 
            alt={post.title} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-t-md object-cover"
            priority
          />
        </div>
      )}
      <CardHeader className="p-0 pt-2 pb-0">
        <Link href={`/posts/${post.id}`}>
          <CardTitle className="line-clamp-2 px-4 py-1">{post.title}</CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{post.content}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{post.author.name}</span>
          <time>{formatDistanceToNow(new Date(post.createdAt),{
            addSuffix: true,
            locale: ja,
          })}</time>
        </div>
      </CardContent>
    </Card>
  )
}