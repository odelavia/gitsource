const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
} = graphql;

const UserType = require('./user_type');

const ProjectType = new GraphQLObjectType({
  name: 'ProjectType',
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    categories: { type: GraphQLString },
    description: { type: GraphQLString },
    stack: { type: GraphQLString },
    status: { type: GraphQLString },
    repoURL: { type: GraphQLString },
    img: { type: GraphQLString },
    members: {
      type: new GraphQLList(UserType),
      resolve(project) {
        return [
          {id: 1, name: `Project: ${project.id}, Member: 1`},
          {id: 2, name: `Project: ${project.id}, Member: 2`}
        ];
      }
    }
  }
});

module.exports = ProjectType;