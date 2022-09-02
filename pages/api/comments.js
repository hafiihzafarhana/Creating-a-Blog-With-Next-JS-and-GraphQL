import { GraphQLClient, gql } from 'graphql-request';

const graphQlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphCMSToken = process.env.GRAPHCMS_TOKEN;

export default async function comments(req,res) {
  // res.status(200).json({ name: 'John Doe' })

  const {namaForm, commentForm, emailForm, slug} = req.body;

  const graphqlClient = new GraphQLClient((graphQlAPI), {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
    }
  })

  // mutation digunakan untuk menambah atau mengupdate data
  const query = gql`
  mutation CreateComment($namaForm: String!, $emailForm: String!, $commentForm: String!, $slug: String!){
    createKomentar(data:{nama: $namaForm, email: $emailForm, komentar: $commentForm, blog: {connect: {slug: $slug}}}) { id }
   }
  `;

  const result = await graphqlClient.request(query, {
    namaForm,
    commentForm,
    emailForm,
    slug
  })

  return res.status(200).send(result);
}
