const express = require("express")


/**
 * @param { express.Request } req
 * @param { express.Response } res
 * */
const ask = async (req, res) => {
  const {} = req.body;  
 
  res.status(202).json({
    msg : "hola?"
  })
}

module.exports = {
  ask,
}

