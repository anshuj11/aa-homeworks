const graphql = require("graphql");
const { GraphQLObjectType } = graphql;
const UserType = new GraphQLObjectType({
  name: "PostType"
});

module.exports = PostType;

