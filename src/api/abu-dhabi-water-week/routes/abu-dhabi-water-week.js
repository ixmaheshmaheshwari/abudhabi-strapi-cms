"use strict";

/**
 * abu-dhabi-water-week router
 * 
 * Custom routes with explicit public access configuration
 * This allows the API to be accessed without authentication
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/abu-dhabi-water-week",
      handler: "abu-dhabi-water-week.find",
      config: {
        auth: false, // Disable authentication requirement
        policies: [],
        middlewares: [],
      },
    },
  ],
};
