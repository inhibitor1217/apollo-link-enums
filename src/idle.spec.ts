import { ApolloLink, execute, gql } from '@apollo/client/core';
import { getOperationName, Observable } from '@apollo/client/utilities';

import EnumApolloLink from './EnumApolloLink';

const query = gql`
  query TestQuery {
    field
  }
`;

describe('The result should remain as it is if no configuration is given', () => {
  it('parses null values for nullable leaf types', (done) => {
    const link = ApolloLink.from([
      new EnumApolloLink(),
      new ApolloLink(() => {
        return Observable.of({
          data: {
            field: null,
          },
        });
      }),
    ]);

    const observable = execute(link, {
      query,
      variables: {},
      operationName: getOperationName(query) ?? undefined,
    });

    observable.subscribe((result) => {
      expect(result).toEqual({ data: { field: null } });
      done();
    });
  });
});
