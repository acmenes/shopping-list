const items = require('./fakeDB')

class Item {
    constructor(name, price) {
        this.name = name
        this.price = price

        items.push(this)
    }
   static findAll(name) {
    /// list all the items 
    return items
   }

   static find(name) {
    /// find an item
    /// you search through with the value and see if it matches to a name
    const item = items.find(v => v.name == name)
    return item
   }

   static update(name) {
    /// update an item
    /// you have to find the item first

    let foundItem = Item.find(name)
    if (foundItem == undefined){
        throw {message: "Item not found", status: 404}
    }
    foundItem.name = data.name
    foundItem.price = data.price
   }

   static remove(name) {
    /// remove an item
    /// you have to find the item first

    /// you need to search for the item in the array
    let deleteItem = items.findIndex(v => v.name == name)
        if(deleteItem == -1){
            throw {message: "Item not found", status: 404}
        }
    items.splice(deleteItem, 1);
   }
}

module.exports = Item 