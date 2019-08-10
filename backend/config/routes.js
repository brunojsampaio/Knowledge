module.exports = app => {
  app.route("/signup").post(app.api.user.save);

  app.route("/signin").post(app.api.auth.signin);

  app.route("/validateToken").post(app.api.auth.validateToken);

  app
    .route("/users")
    .all(app.config.passport.authenticate())
    .post(app.api.user.save)
    .get(app.api.user.get);

  app
    .route("/users/:id")
    .all(app.config.passport.authenticate())
    .put(app.api.user.save)
    .get(app.api.user.getById);

  app
    .route("/categories")
    .all(app.config.passport.authenticate())
    .post(app.api.category.save)
    .get(app.api.category.get);

  // Cuidado com ordem! Tem que vir antes de /categories/:id
  app
    .route("/categories/tree")
    .all(app.config.passport.authenticate())
    .get(app.api.category.getTree);

  app
    .route("/categories/:id")
    .all(app.config.passport.authenticate())
    .put(app.api.category.save)
    .get(app.api.category.getById)
    .delete(app.api.category.remove);

  app
    .route("/articles")
    .all(app.config.passport.authenticate())
    .get(app.api.article.get)
    .post(app.api.article.save);

  app
    .route("/articles/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.article.getById)
    .put(app.api.article.save)
    .delete(app.api.article.remove);

  app
    .route("/categories/:id/articles")
    .all(app.config.passport.authenticate())
    .get(app.api.article.getByCategory);
};
