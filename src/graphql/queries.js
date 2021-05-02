/* src/graphql/queries.js */

export const listStages = /* GraphQL */ `
  query ListStages(
    $filter: ModelStageFilterInput
    $nextToken: String
  ) {
    listStages(filter: $filter, limit: 500, nextToken: $nextToken) {
      items {
        id
        name
        performances {
          items {
            id
            time
            performer
            description
          }
        }
      }
      nextToken
    }
  }
`;

export const getPerformance = `getPerformance(id: "") {
    createdAt
    description
    id
    imageUrl
    performanceStageId
    performer
    productID
    stage {
      createdAt
      id
      name
      test
      updatedAt
    }
    time
    updatedAt
  }`