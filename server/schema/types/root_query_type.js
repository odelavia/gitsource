const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require('./user_type');
const ProjectType = require('./project_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      description: 'Returns a single user',
      resolve(parentValue, args, req) {
        return req.user;
      }
    },
    project: {
      type: ProjectType,
      description: 'Returns a single project',
      resolve(parentValue, args, req) {
        return req.project;
      }
    }
  }
});

module.exports = RootQueryType;
