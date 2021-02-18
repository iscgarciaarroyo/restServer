const { response } = require("express");
const { report } = require("../routes/usuario");

const usuarioGet = (req, res = response) => {
    const params = req.query
  res.json({
    msg: "get API - controller",
    params
  });
};

const usuarioPost = (req, res = response) => {
    const {nombre, edad} = req.body;
  res.json({
    msg: "get Post - controller",
    nombre,
    edad
  });
};

const usuarioPut = (req, res = response) => {
    const id = req.params.id;
  res.json({
    msg: "get PUT - controller",
    id
  });
};

const usuarioDelete = (req, res = response) => {
  res.json({
    msg: "get Delete - controller",
  });
};

module.exports = {
  usuarioGet,
  usuarioPost,
  usuarioDelete,
  usuarioPut,
};
