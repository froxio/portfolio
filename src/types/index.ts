export interface Project {
  slug: string
  title: string
  description: string
  stack: string[]
  highlights: string[]
  repoUrl?: string
  liveUrl?: string
  imageUrl?: string
  date: string
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
}
