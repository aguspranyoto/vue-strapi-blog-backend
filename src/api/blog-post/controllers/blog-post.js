"use strict";

/**
 * blog-post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::blog-post.blog-post",
  ({ strapi }) => ({
    async findByPage(ctx) {
      const { page = 1, pageSize = 3 } = ctx.params;

      const result = await strapi.service("api::blog-post.blog-post").find({
        pagination: {
          page: parseInt(page, 10),
          pageSize: parseInt(pageSize, 10),
        },
      });

      return result;
    },
  })
);
