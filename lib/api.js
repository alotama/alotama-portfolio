import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'content/articles')
const projectDirectory = join(process.cwd(), 'content/projects')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getProjecSlugs() {
  return fs.readdirSync(projectDirectory)
}

export function getPostBySlug(directory, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(directory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const postsSlugs = getPostSlugs()
  const articlesSlugs = getProjecSlugs()
  const posts = postsSlugs
    .map((postsSlugs) => getPostBySlug(postsDirectory, postsSlugs, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getAllProject(fields = []) {
  const articlesSlugs = getProjecSlugs()
  const project = articlesSlugs
  .map((articlesSlugs) => getPostBySlug(projectDirectory, articlesSlugs, fields))
  // sort posts by date in descending order
  .sort((article1, article2) => (article1.date > article2.date ? -1 : 1))
  return project
}