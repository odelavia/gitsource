const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    avatar: { type: GraphQLString },
    skillset: { type: GraphQLString },
    google: { type: GraphQLString },
    facebook: { type: GraphQLString },
    github: { type: GraphQLString }
  }
});

module.exports = UserType;