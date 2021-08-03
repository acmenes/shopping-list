const Item = require('../item')
const express = require('express')
const { request, response } = require('express')

const router = express.Router()

router.get('', (request, response, next) => {
    /// return all the items in this route using the findAll() function
    try{
        return response.json({ items: Item.findAll() })
    }
    catch(error){
        return next(error)
    }
})

router.post('', (request, response, next) => {
    /// create a new item that gets the name and price from what you enter
    try{
        let newItem = new Item(request.body.name, request.body.price)
        return response.json({ item: newItem })
    }
    catch(error){
        return next(error)
    }
})

router.get('/:name', (request, response, next) => {
    /// find the item using Item.find()
    try{
        return response.json({ item: Item.find(request.params.name) })
    }
    catch(error){
        return next(error)
    }
})

router.patch('/:name', (request, response, next) => {
    /// update the item based on the Item.update() function
    try{
        let updateItem = Item.update(request.params.name, request.params.price)
        return response.json({ item: updateItem})
    }
    catch(error){
        return next(error)
    }
})

router.delete('/:name', (request, response, next) => {
    /// remove an item using Item.remove()
    try{
        Item.remove(request.params.name)
        return response.json({ message: "Item removed" })
    }
    catch(error){
        return next(error)
    }
})

module.exports = router