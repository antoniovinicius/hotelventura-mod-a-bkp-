const site = require("../inc/site")(io);

async function renderUsuarioadmin(req, res, _next) {
  res.render(
    "site/usuarioadmin",
    Object.assign(
      {},
      {
        title: "Administração do Usuário - Hotel Ventura",
        header: {
          background: "images/img_bg_6.jpg",
          title: "Administração do Usuário",
        },
        headerIndex: false,
        isAuthenticated: req.isAuthenticated(),
        body: {},
        user: req.user,
      }
    )
  );
}

async function renderMinhasreservas(req, res, _next) {
  res.render(
    "site/minhasreservas",
    Object.assign(
      {},
      {
        title: "Administração do Usuário - Hotel Ventura",
        header: {
          background: "images/img_bg_6.jpg",
          title: "Administração do Usuário",
        },
        headerIndex: false,
        isAuthenticated: req.isAuthenticated(),
        body: {},
        user: req.user,
      }
    )
  );
}

async function renderSenha(req, res, _next) {
  res.render(
    "site/senha",
    Object.assign(
      {},
      {
        title: "Administração do Usuário - Hotel Ventura",
        header: {
          background: "images/img_bg_6.jpg",
          title: "Administração do Usuário",
        },
        headerIndex: false,
        isAuthenticated: req.isAuthenticated(),
        body: {},
        user: req.user,
      }
    )
  );
}

async function renderNome(req, res, _next) {
  res.render(
    "site/nome",
    Object.assign(
      {},
      {
        title: "Administração do Usuário - Hotel Ventura",
        header: {
          background: "images/img_bg_6.jpg",
          title: "Administração do Usuário",
        },
        headerIndex: false,
        isAuthenticated: req.isAuthenticated(),
        body: {},
        user: req.user,
      }
    )
  );
}

async function alterarNome(req, res, next) {
  site
    .nomeUpdate(req, res)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400);
      res.send({
        error: err,
      });
    });
}

async function criarSenha(req, res, next) {
  site
    .senhaSave(req, res)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400);
      res.send({
        error: err,
      });
    });
}

module.exports = {
  renderUsuarioadmin,
  renderMinhasreservas,
  renderSenha,
  renderNome,
  alterarNome,
  criarSenha,
};
