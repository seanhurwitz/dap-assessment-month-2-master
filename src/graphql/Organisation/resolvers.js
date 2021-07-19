const { Organisation, Group, Site } = require("../../models");

module.exports = {
  Query: {
    getOrg: (_, { id }) => Organisation.getOrg(id),
    getGroupWithOrgs: (_, { input }) => Organisation.getGroupWithOrgs(input),
  },
  Mutation: {
    createOrg: (_, { input }) => Organisation.createOrg(input),
    updateOrg: (_, { input }) => Organisation.updateOrg(input),
  },
  Org: {
    group: (org) => Group.getGroup(org.groupId),
    sites: (org, { query }) => Site.getOrgWithSites(org.id, query),
  },
};
