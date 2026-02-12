"use strict";

/**
 * exhibitor-reason router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::exhibitor-reason.exhibitor-reason", {
  config: {
    find: {
      auth: false, // Allow public access
      policies: [],
      middlewares: [],
    },
    findOne: {
      auth: false, // Allow public access
      policies: [],
      middlewares: [],
    },
  },
});
