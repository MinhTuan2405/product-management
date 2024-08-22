const product_routers = require ('./utilities/products/products')
const express = require ('express')

module.exports = (app) => {
    app.use ("/product", product_routers)
}