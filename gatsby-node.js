const format = require('date-fns/format')
const es = require('date-fns/locale').es

exports.createResolvers = ({ createResolvers }) => {
   const resolvers = {
      GraphCMS_Post: {
         duration: {
            type: 'String',
            resolve(source) {
               return Math.ceil(source.content.match(/(\w+)/g).length/300)
            },
         },
         formattedPublicationDate: {
            type: 'String',
            resolve(source) {
               return format(new Date(source.publicationDate), 'dd MMMM yyyy', { locale: es })
            },
         },
      },
   }
   createResolvers(resolvers)
}

exports.createPages = async ({graphql, actions}) => {
   const { createPage } = actions

   const result =  await graphql(`
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
         duration
         formattedPublicationDate
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
            duration: post.duration,
            publicationDate: post.formattedPublicationDate,
            updateDate: {
               formatted: updateDate,
               original: post.updatedAt,
            }
         },
      })
   })
}
