import {gql,request} from 'graphql-request'
// import comments from '../pages/api/comments'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getBlog = async () => {
    const query = gql`
    query MyQuery {
        blog_semuaConnection {
          edges {
            node {
              penulis {
                biodata
                namaPenulis
                id
                foto {
                  url
                }
              }
              createdAt
              slug
              kontenTerbatas
              foto {
                url
              }
              kategori_semua {
                slug
                kategori
              }
              judul
            }
          }
        }
      }
    `
    const result = await request(graphqlAPI, query);
    return result.blog_semuaConnection.edges;
}

export const getRecentBlogs = async () => {
  const query = gql`
    query GetPostDetails(){
      blog_semua(
        orderBy: createdAt_ASC
        last:3
        ) {
          judul
          slug
          foto{
            url
          }
          createdAt
        }
    }
  `

  const result = await request(graphqlAPI, query);
  return result.blog_semua;
}

export const getSimilarBlogs = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug:String!, $categories:[String!]){
      blog_semua(
        where: {slug_not:$slug, AND: {kategori_semua_some:{slug_in:$categories}}}
        last:3
      ) {
        judul
        slug
        foto{
          url
        }
        createdAt
      }
    }
  `

  const result = await request(graphqlAPI, query, {slug, categories});
  return result.blog_semua;
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories(){
      kategori_semua{
        kategori
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.kategori_semua;
}

export const getDetailBlog = async (slug) => {
  const query = gql`
  query GetBlogDetails($slug : String!) {
      blog(where: {slug: $slug}){
            penulis {
              biodata
              namaPenulis
              id
              foto {
                url
              }
            }
            createdAt
            slug
            kontenTerbatas
            foto {
              url
            }
            kategori_semua {
              slug
              kategori
            }
            judul
            konten {
              raw
            }
          }
    }
  `
  const result = await request(graphqlAPI, query, {slug});
  return result.blog;
}

export const submitComment = async (obj) => {
  console.log(obj)
  const result = await fetch("/api/comments", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
  console.log(result)
  return result.json();
}

export const getComments = async (slug) => {
  const query = gql`
  query MyQuery($slug : String!) {
    komentar_semua(where: {blog: {slug: $slug}}) {
      nama
      komentar
      email
      id
      createdAt
    }
  }
  `

  const result = await request(graphqlAPI, query, {slug});
  return result.komentar_semua;
}

export const getFeaturedPosts = async () => {
  const query = gql`
  query getCategoryBlog(){
    blog_semua(where: {featuredPost:true}){
        penulis{
          namaPenulis
          foto{
            url
          }
        }
        foto{
          url
        }
        judul
        slug
        createdAt
    }
  }
  `

  const result = await request(graphqlAPI, query);
  return result.blog_semua;
}

export const getCategoryBlog = async (slug) => {
  const query = gql`
  query getCatBlog($slug: String!) {
    blog_semuaConnection(where: {kategori_semua_some: {slug: $slug}}) {
      edges {
        node {
          penulis {
            biodata
            namaPenulis
            id
            foto {
              url
            }
          }
          slug
          createdAt
          judul
          kontenTerbatas
          foto {
            url
          }
          kategori_semua {
            slug
            kategori
          }
        }
        cursor
      }
    }
  }
  `;

  const result = await request(graphqlAPI, query, {slug});
  return result.blog_semuaConnection.edges;
}