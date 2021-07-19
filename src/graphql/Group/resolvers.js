const { Group, Organisation } = require("../../models");

module.exports = {
  Query: {
    getGroup: (_, { id }) => Group.getGroup(id),
    getAllGroups: (_, { query }) => Group.getAllGroups(query),
  },
  Mutation: {
    createGroup: (_, { input }) => Group.createGroup(input),
    updateGroup: (_, { input }) => Group.updateGroup(input),
  },
  Group: {
    Orgs: (grp, { query }) => Organisation.getGroupWithOrgs(grp.id, query),
  },
};
