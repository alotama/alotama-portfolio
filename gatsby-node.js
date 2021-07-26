const format = require('date-fns/format')
const es = require('date-fns/locale').es
const GraphQLString = require('gatsby/graphql').GraphQLString

exports.createResolvers = ({ actions, cache, createNodeId, createResolvers, store, reporter }) => {
   createResolvers({
      GraphCMS_Post: {
         duration: {
            type: `String`,
            resolve(source, args, context, info) {
               const PostNodes = context.nodeModel.getNodeById({ id: 'GraphCMS_Post' })
               const PostContent = PostNodes
               console.log('PostContent ->', PostContent)
               const ReadingTime = Math.ceil(PostContent.match(/(\w+)/g).length/200)
               return `${ReadingTime} minutos de lectura`;
            },
         },
      },
   })
}


exports.createPages = async ({graphql, actions}) => {
   const {createPage} = actions

   const result = await graphql(`
   query PostsQuery {
     allGraphCmsPost {
       nodes {
         url
         title
         excerpt
         content
         featuredImage {
           gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
           altText
         }
         seo {
           metaTitle
           metaDescription
         }
         remoteId
         publicationDate
         updatedAt
       }
     }
   }
  `)

   if (result.errors) {
      throw result.errors
   }

   const posts = result.data.allGraphCmsPost.nodes || []
   posts.forEach(post => {
      const path = `/articulos/${post.url}`
      const publicationDate = format(new Date(post.publicationDate), 'dd MMMM yyyy', { locale: es })
      const updateDate = format(new Date(post.updatedAt), 'dd MMMM yyyy', { locale: es })

      createPage({
         path,
         component: require.resolve("./src/pages/articulos/post.js"),
         context: {
            id: post.remoteId,
            title: post.title,
            content: post.content,
            featuredImage: post.featuredImage,
            seo: post.seo,
            publicationDate: publicationDate,
            updateDate: {
               formatted: updateDate,
               original: post.updatedAt,
            }
         },
      })
   })
}
