"use strict";

/**
 * top-reason router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::top-reason.top-reason", {
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
