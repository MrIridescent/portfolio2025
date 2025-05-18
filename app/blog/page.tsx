import { BlogHeader } from '@/components/blog/blog-header'
import { BlogList } from '@/components/blog/blog-list'

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full">
      <BlogHeader />
      <BlogList />
    </div>
  )
}