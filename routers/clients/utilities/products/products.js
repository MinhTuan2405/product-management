const express = require ('express')
const router = express.Router ()


router.get ("/intro", (request, response) => {
    response.send (" this is the product page")
})

router.get ('/:id', (request, response) => {
    const _id = request.params.id
    const {name} = request.query
    
    const message = "there is " + _id  + "product with name: " + name
    console.log (message)
    response.send (message) 
})
module.exports = router