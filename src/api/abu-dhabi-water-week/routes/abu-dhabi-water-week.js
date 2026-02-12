"use strict";

/**
 * abu-dhabi-water-week router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::abu-dhabi-water-week.abu-dhabi-water-week", {
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
