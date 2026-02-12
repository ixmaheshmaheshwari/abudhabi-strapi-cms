"use strict";

/**
 * exhibitor-reason router
 * 
 * Custom routes with explicit public access configuration
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/exhibitor-reasons",
      handler: "exhibitor-reason.find",
      config: {
        auth: false, // Allow public access
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/exhibitor-reasons/:id",
      handler: "exhibitor-reason.findOne",
      config: {
        auth: false, // Allow public access
        policies: [],
        middlewares: [],
      },
    },
  ],
};
