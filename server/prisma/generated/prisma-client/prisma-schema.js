module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.23.0-test.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateMedia {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Media {
  id: ID!
  title: String
  year: String
  rated: String
  released: String
  runtime: String
  genre: String
  director: String
  writer: String
  actors: String
  plot: String
  language: String
  country: String
  awards: String
  poster: String
  source: String
  value: String
  metascore: String
  imdbRating: String
  imdbVotes: String
  imdbID: String
  totalSeasons: String
  response: String
}

type MediaConnection {
  pageInfo: PageInfo!
  edges: [MediaEdge]!
  aggregate: AggregateMedia!
}

input MediaCreateInput {
  id: ID
  title: String
  year: String
  rated: String
  released: String
  runtime: String
  genre: String
  director: String
  writer: String
  actors: String
  plot: String
  language: String
  country: String
  awards: String
  poster: String
  source: String
  value: String
  metascore: String
  imdbRating: String
  imdbVotes: String
  imdbID: String
  totalSeasons: String
  response: String
}

input MediaCreateManyInput {
  create: [MediaCreateInput!]
  connect: [MediaWhereUniqueInput!]
}

type MediaEdge {
  node: Media!
  cursor: String!
}

enum MediaOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  year_ASC
  year_DESC
  rated_ASC
  rated_DESC
  released_ASC
  released_DESC
  runtime_ASC
  runtime_DESC
  genre_ASC
  genre_DESC
  director_ASC
  director_DESC
  writer_ASC
  writer_DESC
  actors_ASC
  actors_DESC
  plot_ASC
  plot_DESC
  language_ASC
  language_DESC
  country_ASC
  country_DESC
  awards_ASC
  awards_DESC
  poster_ASC
  poster_DESC
  source_ASC
  source_DESC
  value_ASC
  value_DESC
  metascore_ASC
  metascore_DESC
  imdbRating_ASC
  imdbRating_DESC
  imdbVotes_ASC
  imdbVotes_DESC
  imdbID_ASC
  imdbID_DESC
  totalSeasons_ASC
  totalSeasons_DESC
  response_ASC
  response_DESC
}

type MediaPreviousValues {
  id: ID!
  title: String
  year: String
  rated: String
  released: String
  runtime: String
  genre: String
  director: String
  writer: String
  actors: String
  plot: String
  language: String
  country: String
  awards: String
  poster: String
  source: String
  value: String
  metascore: String
  imdbRating: String
  imdbVotes: String
  imdbID: String
  totalSeasons: String
  response: String
}

input MediaScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  year: String
  year_not: String
  year_in: [String!]
  year_not_in: [String!]
  year_lt: String
  year_lte: String
  year_gt: String
  year_gte: String
  year_contains: String
  year_not_contains: String
  year_starts_with: String
  year_not_starts_with: String
  year_ends_with: String
  year_not_ends_with: String
  rated: String
  rated_not: String
  rated_in: [String!]
  rated_not_in: [String!]
  rated_lt: String
  rated_lte: String
  rated_gt: String
  rated_gte: String
  rated_contains: String
  rated_not_contains: String
  rated_starts_with: String
  rated_not_starts_with: String
  rated_ends_with: String
  rated_not_ends_with: String
  released: String
  released_not: String
  released_in: [String!]
  released_not_in: [String!]
  released_lt: String
  released_lte: String
  released_gt: String
  released_gte: String
  released_contains: String
  released_not_contains: String
  released_starts_with: String
  released_not_starts_with: String
  released_ends_with: String
  released_not_ends_with: String
  runtime: String
  runtime_not: String
  runtime_in: [String!]
  runtime_not_in: [String!]
  runtime_lt: String
  runtime_lte: String
  runtime_gt: String
  runtime_gte: String
  runtime_contains: String
  runtime_not_contains: String
  runtime_starts_with: String
  runtime_not_starts_with: String
  runtime_ends_with: String
  runtime_not_ends_with: String
  genre: String
  genre_not: String
  genre_in: [String!]
  genre_not_in: [String!]
  genre_lt: String
  genre_lte: String
  genre_gt: String
  genre_gte: String
  genre_contains: String
  genre_not_contains: String
  genre_starts_with: String
  genre_not_starts_with: String
  genre_ends_with: String
  genre_not_ends_with: String
  director: String
  director_not: String
  director_in: [String!]
  director_not_in: [String!]
  director_lt: String
  director_lte: String
  director_gt: String
  director_gte: String
  director_contains: String
  director_not_contains: String
  director_starts_with: String
  director_not_starts_with: String
  director_ends_with: String
  director_not_ends_with: String
  writer: String
  writer_not: String
  writer_in: [String!]
  writer_not_in: [String!]
  writer_lt: String
  writer_lte: String
  writer_gt: String
  writer_gte: String
  writer_contains: String
  writer_not_contains: String
  writer_starts_with: String
  writer_not_starts_with: String
  writer_ends_with: String
  writer_not_ends_with: String
  actors: String
  actors_not: String
  actors_in: [String!]
  actors_not_in: [String!]
  actors_lt: String
  actors_lte: String
  actors_gt: String
  actors_gte: String
  actors_contains: String
  actors_not_contains: String
  actors_starts_with: String
  actors_not_starts_with: String
  actors_ends_with: String
  actors_not_ends_with: String
  plot: String
  plot_not: String
  plot_in: [String!]
  plot_not_in: [String!]
  plot_lt: String
  plot_lte: String
  plot_gt: String
  plot_gte: String
  plot_contains: String
  plot_not_contains: String
  plot_starts_with: String
  plot_not_starts_with: String
  plot_ends_with: String
  plot_not_ends_with: String
  language: String
  language_not: String
  language_in: [String!]
  language_not_in: [String!]
  language_lt: String
  language_lte: String
  language_gt: String
  language_gte: String
  language_contains: String
  language_not_contains: String
  language_starts_with: String
  language_not_starts_with: String
  language_ends_with: String
  language_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  awards: String
  awards_not: String
  awards_in: [String!]
  awards_not_in: [String!]
  awards_lt: String
  awards_lte: String
  awards_gt: String
  awards_gte: String
  awards_contains: String
  awards_not_contains: String
  awards_starts_with: String
  awards_not_starts_with: String
  awards_ends_with: String
  awards_not_ends_with: String
  poster: String
  poster_not: String
  poster_in: [String!]
  poster_not_in: [String!]
  poster_lt: String
  poster_lte: String
  poster_gt: String
  poster_gte: String
  poster_contains: String
  poster_not_contains: String
  poster_starts_with: String
  poster_not_starts_with: String
  poster_ends_with: String
  poster_not_ends_with: String
  source: String
  source_not: String
  source_in: [String!]
  source_not_in: [String!]
  source_lt: String
  source_lte: String
  source_gt: String
  source_gte: String
  source_contains: String
  source_not_contains: String
  source_starts_with: String
  source_not_starts_with: String
  source_ends_with: String
  source_not_ends_with: String
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  metascore: String
  metascore_not: String
  metascore_in: [String!]
  metascore_not_in: [String!]
  metascore_lt: String
  metascore_lte: String
  metascore_gt: String
  metascore_gte: String
  metascore_contains: String
  metascore_not_contains: String
  metascore_starts_with: String
  metascore_not_starts_with: String
  metascore_ends_with: String
  metascore_not_ends_with: String
  imdbRating: String
  imdbRating_not: String
  imdbRating_in: [String!]
  imdbRating_not_in: [String!]
  imdbRating_lt: String
  imdbRating_lte: String
  imdbRating_gt: String
  imdbRating_gte: String
  imdbRating_contains: String
  imdbRating_not_contains: String
  imdbRating_starts_with: String
  imdbRating_not_starts_with: String
  imdbRating_ends_with: String
  imdbRating_not_ends_with: String
  imdbVotes: String
  imdbVotes_not: String
  imdbVotes_in: [String!]
  imdbVotes_not_in: [String!]
  imdbVotes_lt: String
  imdbVotes_lte: String
  imdbVotes_gt: String
  imdbVotes_gte: String
  imdbVotes_contains: String
  imdbVotes_not_contains: String
  imdbVotes_starts_with: String
  imdbVotes_not_starts_with: String
  imdbVotes_ends_with: String
  imdbVotes_not_ends_with: String
  imdbID: String
  imdbID_not: String
  imdbID_in: [String!]
  imdbID_not_in: [String!]
  imdbID_lt: String
  imdbID_lte: String
  imdbID_gt: String
  imdbID_gte: String
  imdbID_contains: String
  imdbID_not_contains: String
  imdbID_starts_with: String
  imdbID_not_starts_with: String
  imdbID_ends_with: String
  imdbID_not_ends_with: String
  totalSeasons: String
  totalSeasons_not: String
  totalSeasons_in: [String!]
  totalSeasons_not_in: [String!]
  totalSeasons_lt: String
  totalSeasons_lte: String
  totalSeasons_gt: String
  totalSeasons_gte: String
  totalSeasons_contains: String
  totalSeasons_not_contains: String
  totalSeasons_starts_with: String
  totalSeasons_not_starts_with: String
  totalSeasons_ends_with: String
  totalSeasons_not_ends_with: String
  response: String
  response_not: String
  response_in: [String!]
  response_not_in: [String!]
  response_lt: String
  response_lte: String
  response_gt: String
  response_gte: String
  response_contains: String
  response_not_contains: String
  response_starts_with: String
  response_not_starts_with: String
  response_ends_with: String
  response_not_ends_with: String
  AND: [MediaScalarWhereInput!]
  OR: [MediaScalarWhereInput!]
  NOT: [MediaScalarWhereInput!]
}

type MediaSubscriptionPayload {
  mutation: MutationType!
  node: Media
  updatedFields: [String!]
  previousValues: MediaPreviousValues
}

input MediaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MediaWhereInput
  AND: [MediaSubscriptionWhereInput!]
}

input MediaUpdateDataInput {
  title: String
  year: String
  rated: String
  released: String
  runtime: String
  genre: String
  director: String
  writer: String
  actors: String
  plot: String
  language: String
  country: String
  awards: String
  poster: String
  source: String
  value: String
  metascore: String
  imdbRating: String
  imdbVotes: String
  imdbID: String
  totalSeasons: String
  response: String
}

input MediaUpdateInput {
  title: String
  year: String
  rated: String
  released: String
  runtime: String
  genre: String
  director: String
  writer: String
  actors: String
  plot: String
  language: String
  country: String
  awards: String
  poster: String
  source: String
  value: String
  metascore: String
  imdbRating: String
  imdbVotes: String
  imdbID: String
  totalSeasons: String
  response: String
}

input MediaUpdateManyDataInput {
  title: String
  year: String
  rated: String
  released: String
  runtime: String
  genre: String
  director: String
  writer: String
  actors: String
  plot: String
  language: String
  country: String
  awards: String
  poster: String
  source: String
  value: String
  metascore: String
  imdbRating: String
  imdbVotes: String
  imdbID: String
  totalSeasons: String
  response: String
}

input MediaUpdateManyInput {
  create: [MediaCreateInput!]
  update: [MediaUpdateWithWhereUniqueNestedInput!]
  upsert: [MediaUpsertWithWhereUniqueNestedInput!]
  delete: [MediaWhereUniqueInput!]
  connect: [MediaWhereUniqueInput!]
  set: [MediaWhereUniqueInput!]
  disconnect: [MediaWhereUniqueInput!]
  deleteMany: [MediaScalarWhereInput!]
  updateMany: [MediaUpdateManyWithWhereNestedInput!]
}

input MediaUpdateManyMutationInput {
  title: String
  year: String
  rated: String
  released: String
  runtime: String
  genre: String
  director: String
  writer: String
  actors: String
  plot: String
  language: String
  country: String
  awards: String
  poster: String
  source: String
  value: String
  metascore: String
  imdbRating: String
  imdbVotes: String
  imdbID: String
  totalSeasons: String
  response: String
}

input MediaUpdateManyWithWhereNestedInput {
  where: MediaScalarWhereInput!
  data: MediaUpdateManyDataInput!
}

input MediaUpdateWithWhereUniqueNestedInput {
  where: MediaWhereUniqueInput!
  data: MediaUpdateDataInput!
}

input MediaUpsertWithWhereUniqueNestedInput {
  where: MediaWhereUniqueInput!
  update: MediaUpdateDataInput!
  create: MediaCreateInput!
}

input MediaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  year: String
  year_not: String
  year_in: [String!]
  year_not_in: [String!]
  year_lt: String
  year_lte: String
  year_gt: String
  year_gte: String
  year_contains: String
  year_not_contains: String
  year_starts_with: String
  year_not_starts_with: String
  year_ends_with: String
  year_not_ends_with: String
  rated: String
  rated_not: String
  rated_in: [String!]
  rated_not_in: [String!]
  rated_lt: String
  rated_lte: String
  rated_gt: String
  rated_gte: String
  rated_contains: String
  rated_not_contains: String
  rated_starts_with: String
  rated_not_starts_with: String
  rated_ends_with: String
  rated_not_ends_with: String
  released: String
  released_not: String
  released_in: [String!]
  released_not_in: [String!]
  released_lt: String
  released_lte: String
  released_gt: String
  released_gte: String
  released_contains: String
  released_not_contains: String
  released_starts_with: String
  released_not_starts_with: String
  released_ends_with: String
  released_not_ends_with: String
  runtime: String
  runtime_not: String
  runtime_in: [String!]
  runtime_not_in: [String!]
  runtime_lt: String
  runtime_lte: String
  runtime_gt: String
  runtime_gte: String
  runtime_contains: String
  runtime_not_contains: String
  runtime_starts_with: String
  runtime_not_starts_with: String
  runtime_ends_with: String
  runtime_not_ends_with: String
  genre: String
  genre_not: String
  genre_in: [String!]
  genre_not_in: [String!]
  genre_lt: String
  genre_lte: String
  genre_gt: String
  genre_gte: String
  genre_contains: String
  genre_not_contains: String
  genre_starts_with: String
  genre_not_starts_with: String
  genre_ends_with: String
  genre_not_ends_with: String
  director: String
  director_not: String
  director_in: [String!]
  director_not_in: [String!]
  director_lt: String
  director_lte: String
  director_gt: String
  director_gte: String
  director_contains: String
  director_not_contains: String
  director_starts_with: String
  director_not_starts_with: String
  director_ends_with: String
  director_not_ends_with: String
  writer: String
  writer_not: String
  writer_in: [String!]
  writer_not_in: [String!]
  writer_lt: String
  writer_lte: String
  writer_gt: String
  writer_gte: String
  writer_contains: String
  writer_not_contains: String
  writer_starts_with: String
  writer_not_starts_with: String
  writer_ends_with: String
  writer_not_ends_with: String
  actors: String
  actors_not: String
  actors_in: [String!]
  actors_not_in: [String!]
  actors_lt: String
  actors_lte: String
  actors_gt: String
  actors_gte: String
  actors_contains: String
  actors_not_contains: String
  actors_starts_with: String
  actors_not_starts_with: String
  actors_ends_with: String
  actors_not_ends_with: String
  plot: String
  plot_not: String
  plot_in: [String!]
  plot_not_in: [String!]
  plot_lt: String
  plot_lte: String
  plot_gt: String
  plot_gte: String
  plot_contains: String
  plot_not_contains: String
  plot_starts_with: String
  plot_not_starts_with: String
  plot_ends_with: String
  plot_not_ends_with: String
  language: String
  language_not: String
  language_in: [String!]
  language_not_in: [String!]
  language_lt: String
  language_lte: String
  language_gt: String
  language_gte: String
  language_contains: String
  language_not_contains: String
  language_starts_with: String
  language_not_starts_with: String
  language_ends_with: String
  language_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  awards: String
  awards_not: String
  awards_in: [String!]
  awards_not_in: [String!]
  awards_lt: String
  awards_lte: String
  awards_gt: String
  awards_gte: String
  awards_contains: String
  awards_not_contains: String
  awards_starts_with: String
  awards_not_starts_with: String
  awards_ends_with: String
  awards_not_ends_with: String
  poster: String
  poster_not: String
  poster_in: [String!]
  poster_not_in: [String!]
  poster_lt: String
  poster_lte: String
  poster_gt: String
  poster_gte: String
  poster_contains: String
  poster_not_contains: String
  poster_starts_with: String
  poster_not_starts_with: String
  poster_ends_with: String
  poster_not_ends_with: String
  source: String
  source_not: String
  source_in: [String!]
  source_not_in: [String!]
  source_lt: String
  source_lte: String
  source_gt: String
  source_gte: String
  source_contains: String
  source_not_contains: String
  source_starts_with: String
  source_not_starts_with: String
  source_ends_with: String
  source_not_ends_with: String
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  metascore: String
  metascore_not: String
  metascore_in: [String!]
  metascore_not_in: [String!]
  metascore_lt: String
  metascore_lte: String
  metascore_gt: String
  metascore_gte: String
  metascore_contains: String
  metascore_not_contains: String
  metascore_starts_with: String
  metascore_not_starts_with: String
  metascore_ends_with: String
  metascore_not_ends_with: String
  imdbRating: String
  imdbRating_not: String
  imdbRating_in: [String!]
  imdbRating_not_in: [String!]
  imdbRating_lt: String
  imdbRating_lte: String
  imdbRating_gt: String
  imdbRating_gte: String
  imdbRating_contains: String
  imdbRating_not_contains: String
  imdbRating_starts_with: String
  imdbRating_not_starts_with: String
  imdbRating_ends_with: String
  imdbRating_not_ends_with: String
  imdbVotes: String
  imdbVotes_not: String
  imdbVotes_in: [String!]
  imdbVotes_not_in: [String!]
  imdbVotes_lt: String
  imdbVotes_lte: String
  imdbVotes_gt: String
  imdbVotes_gte: String
  imdbVotes_contains: String
  imdbVotes_not_contains: String
  imdbVotes_starts_with: String
  imdbVotes_not_starts_with: String
  imdbVotes_ends_with: String
  imdbVotes_not_ends_with: String
  imdbID: String
  imdbID_not: String
  imdbID_in: [String!]
  imdbID_not_in: [String!]
  imdbID_lt: String
  imdbID_lte: String
  imdbID_gt: String
  imdbID_gte: String
  imdbID_contains: String
  imdbID_not_contains: String
  imdbID_starts_with: String
  imdbID_not_starts_with: String
  imdbID_ends_with: String
  imdbID_not_ends_with: String
  totalSeasons: String
  totalSeasons_not: String
  totalSeasons_in: [String!]
  totalSeasons_not_in: [String!]
  totalSeasons_lt: String
  totalSeasons_lte: String
  totalSeasons_gt: String
  totalSeasons_gte: String
  totalSeasons_contains: String
  totalSeasons_not_contains: String
  totalSeasons_starts_with: String
  totalSeasons_not_starts_with: String
  totalSeasons_ends_with: String
  totalSeasons_not_ends_with: String
  response: String
  response_not: String
  response_in: [String!]
  response_not_in: [String!]
  response_lt: String
  response_lte: String
  response_gt: String
  response_gte: String
  response_contains: String
  response_not_contains: String
  response_starts_with: String
  response_not_starts_with: String
  response_ends_with: String
  response_not_ends_with: String
  AND: [MediaWhereInput!]
}

input MediaWhereUniqueInput {
  id: ID
}

type Mutation {
  createMedia(data: MediaCreateInput!): Media!
  updateMedia(data: MediaUpdateInput!, where: MediaWhereUniqueInput!): Media
  updateManyMedias(data: MediaUpdateManyMutationInput!, where: MediaWhereInput): BatchPayload!
  upsertMedia(where: MediaWhereUniqueInput!, create: MediaCreateInput!, update: MediaUpdateInput!): Media!
  deleteMedia(where: MediaWhereUniqueInput!): Media
  deleteManyMedias(where: MediaWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  media(where: MediaWhereUniqueInput!): Media
  medias(where: MediaWhereInput, orderBy: MediaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Media]!
  mediasConnection(where: MediaWhereInput, orderBy: MediaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MediaConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  media(where: MediaSubscriptionWhereInput): MediaSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  username: String!
  email: String!
  password: String!
  playlist(where: MediaWhereInput, orderBy: MediaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Media!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  username: String!
  email: String!
  password: String!
  playlist: MediaCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  username: String
  email: String
  password: String
  playlist: MediaUpdateManyInput
}

input UserUpdateManyMutationInput {
  username: String
  email: String
  password: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  playlist_some: MediaWhereInput
  AND: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
  email: String
}
`
      }
    