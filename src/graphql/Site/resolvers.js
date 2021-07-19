const { Site, Organisation } = require("../../models");

module.exports = {
  Query: {
    getSite: (_, { id }) => Site.getSite(id),
    getAllSites: () => Site.getAllSites(),
    getOrgWithSites: (_, { input }) => Organisation.getOrgWithSites(input),
  },
  Mutation: {
    createSite: (_, { input }) => Site.createSite(input),
    updateSite: (_, { input }) => Site.updateSite(input),
  },
  Site: {
    org: (site) => Organisation.getOrg(site.orgId),
  },
};
