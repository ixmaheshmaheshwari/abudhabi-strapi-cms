"use strict";

/**
 * top-reason router
 * 
 * Custom routes with explicit public access configuration
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/top-reasons",
      handler: "top-reason.find",
      config: {
        auth: false, // Allow public access
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/top-reasons/:id",
      handler: "top-reason.findOne",
      config: {
        auth: false, // Allow public access
        policies: [],
        middlewares: [],
      },
    },
  ],
};
