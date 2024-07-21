module.exports = {
  routes: [
    {
      method: "GET",
      path: "/blog-posts/page/:page",
      handler: "blog-post.findByPage",
      config: {
        auth: false,
      },
    },
  ],
};
