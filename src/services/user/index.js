import {client} from '../apollo';
import {gql} from 'apollo-boost';

export const getUsers = () => {
  return client
    .query({
      query: gql`
        {
          users {
            name
            age
          }
        }
      `,
    })
    .then(result => console.log(result.data));
};
