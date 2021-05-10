import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import format from 'date-fns/format'
import { el, es } from 'date-fns/locale'

const postsDirectory = join(process.cwd(), 'content/articles')
const projectDirectory = join(process.cwd(), 'content/projects')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getProjecSlugs() {
  return fs.readdirSync(projectDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
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

export function getProjectBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(projectDirectory, `${realSlug}.md`)
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
  const sortedPosts = postsSlugs
    .map((postsSlugs) => getPostBySlug(postsSlugs, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    
  const post = sortedPosts.map(element => {
    const formatDate = format(new Date(element.date), 'dd MMMM yyyy', {locale: es})
    element.date = formatDate
    return element
  })
  
  return post
}

export function getAllProject(fields = []) {
  const articlesSlugs = getProjecSlugs()
  const project = articlesSlugs
  .map((articlesSlugs) => getProjectBySlug(articlesSlugs, fields))
  .sort((article1, article2) => (article1.date > article2.date ? -1 : 1))
  
  return project
}

export function getRandomProject(fields = []) {
  const articlesSlugs = getProjecSlugs()

  articlesSlugs.filter(item => console.log('item ->', item))

  const project = articlesSlugs
  .map((articlesSlugs) => getProjectBySlug(articlesSlugs, fields))
  
  const nextProject = project[Math.floor(Math.random() * project.length)]

  return nextProject
}