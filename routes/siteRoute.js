module.exports = (io) => {

  let conn = require('../inc/db');
  const express = require('express');
  let formidable = require('formidable');
  // let Pagination = require('./Pagination');
  const router = express.Router();

  const SiteController = require('../controllers/site.index.controller');
  const QuartosController = require('../controllers/site.quartos.controller');
  const ServicosController = require('../controllers/site.servicos.controller.js');
  const ContatosController = require('../controllers/site.contatos.controller.js');
  const ReservaController = require('../controllers/site.reservas.controller');
  const LoginController = require('../controllers/site.login.controller'); 
  const UsuarioadminController = require('../controllers/site.usuarioadmin.controller'); 

  router.get('/', SiteController.renderHome);

  router.get('/quartos', QuartosController.renderQuartos);
  
  router.get('/servicos', ServicosController.renderServicos);

  router.get('/contatos', ContatosController.renderContatos);
      
  router.post('/contatos', ContatosController.criarContato);

  router.get('/reservas', ReservaController.renderReservas);

  router.post('/reservas', ReservaController.criarReserva);

  router.get('/login', LoginController.renderLogin);

  router.post('/subscribe', SiteController.inscreverEmail);

  router.get('/usuarioadmin', UsuarioadminController.renderUsuarioadmin);

  router.post('/nome', UsuarioadminController.alterarNome);

  router.get('/minhasreservas', UsuarioadminController.renderMinhasreservas);

  router.get('/nome', UsuarioadminController.renderNome);

  router.get('/senha', UsuarioadminController.renderSenha);

  router.post('/senha', UsuarioadminController.criarSenha);

  return router;

};